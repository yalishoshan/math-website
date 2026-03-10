/**
 * Daily DB export → Google Sheet → Gmail
 * Run: node scripts/daily-export.mjs
 * Schedule: Windows Task Scheduler (see README or setup-task.bat)
 */

import Database from "better-sqlite3";
import { google } from "googleapis";
import nodemailer from "nodemailer";
import path from "path";
import { fileURLToPath } from "url";
import { readFileSync, existsSync } from "fs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");

// ── Load .env.local manually (no dotenv dependency needed) ──────────────────
function loadEnv() {
  const envPath = path.join(ROOT, ".env.local");
  if (!existsSync(envPath)) throw new Error(".env.local not found");
  for (const line of readFileSync(envPath, "utf8").split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eq = trimmed.indexOf("=");
    if (eq === -1) continue;
    const key = trimmed.slice(0, eq).trim();
    const val = trimmed.slice(eq + 1).trim().replace(/^["']|["']$/g, "");
    if (!process.env[key]) process.env[key] = val;
  }
}

loadEnv();

const SHEET_ID        = process.env.GOOGLE_SHEET_ID;
const GMAIL_USER      = process.env.GMAIL_USER;
const GMAIL_PASS      = process.env.GMAIL_APP_PASSWORD;
const REPORT_EMAIL    = process.env.REPORT_EMAIL ?? GMAIL_USER;
const CREDENTIALS     = path.join(ROOT, "google-credentials.json");
const DB_PATH         = path.join(ROOT, "prisma", "dev.db");

// ── 1. Read data from SQLite ─────────────────────────────────────────────────
function getData() {
  const db = new Database(DB_PATH, { readonly: true });

  const users = db.prepare(
    `SELECT id, name, email, createdAt FROM "User" ORDER BY createdAt DESC`
  ).all();

  // Total time per page (all time)
  const pageStats = db.prepare(`
    SELECT page,
           COUNT(*) as visits,
           SUM(duration) as totalSeconds,
           ROUND(AVG(duration)) as avgSeconds
    FROM "PageVisit"
    GROUP BY page
    ORDER BY totalSeconds DESC
  `).all();

  // Time per page for the last 7 days
  const recent = db.prepare(`
    SELECT page,
           COUNT(*) as visits,
           SUM(duration) as totalSeconds
    FROM "PageVisit"
    WHERE createdAt >= datetime('now', '-7 days')
    GROUP BY page
    ORDER BY totalSeconds DESC
  `).all();

  db.close();
  return { users, pageStats, recent };
}

function fmtTime(seconds) {
  if (seconds < 60) return `${seconds}ש`;
  if (seconds < 3600) return `${Math.round(seconds / 60)}ד`;
  return `${(seconds / 3600).toFixed(1)}ש'`;
}

// ── 2. Write to Google Sheet ─────────────────────────────────────────────────
async function updateSheet(users, pageStats, recent) {
  if (!existsSync(CREDENTIALS)) {
    throw new Error("google-credentials.json not found — see setup instructions");
  }

  const auth = new google.auth.GoogleAuth({
    keyFile: CREDENTIALS,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const sheets = google.sheets({ version: "v4", auth });

  const now = new Date().toLocaleString("he-IL", {
    timeZone: "Asia/Jerusalem",
    dateStyle: "full",
    timeStyle: "short",
  });

  const usersRows = [
    [`📊 דוח משתמשים — ${now}`, "", "", ""],
    ["#", "שם מלא", "כתובת מייל", "תאריך הרשמה"],
    ...users.map((u, i) => [
      i + 1,
      u.name,
      u.email,
      new Date(u.createdAt).toLocaleDateString("he-IL"),
    ]),
    [],
    [`סה"כ: ${users.length} משתמשים`, "", "", ""],
  ];

  const analyticsRows = [
    [],
    ["📈 זמן שהייה בדפים (כל הזמן)", "", "", ""],
    ["דף", "ביקורים", "זמן כולל", "ממוצע לביקור"],
    ...pageStats.map(r => [r.page, r.visits, fmtTime(r.totalSeconds), fmtTime(r.avgSeconds)]),
    [],
    ["📅 זמן שהייה — 7 ימים אחרונים", "", "", ""],
    ["דף", "ביקורים", "זמן כולל", ""],
    ...recent.map(r => [r.page, r.visits, fmtTime(r.totalSeconds), ""]),
  ];

  const allRows = [...usersRows, ...analyticsRows];

  // Clear sheet then write fresh data
  await sheets.spreadsheets.values.clear({
    spreadsheetId: SHEET_ID,
    range: "Sheet1",
  });

  await sheets.spreadsheets.values.update({
    spreadsheetId: SHEET_ID,
    range: "Sheet1!A1",
    valueInputOption: "USER_ENTERED",
    requestBody: { values: allRows },
  });

  console.log(`✓ Google Sheet updated (${users.length} users)`);
}

// ── 3. Send Gmail notification ───────────────────────────────────────────────
async function sendEmail(users) {
  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: { user: GMAIL_USER, pass: GMAIL_PASS },
  });

  const sheetUrl = `https://docs.google.com/spreadsheets/d/${SHEET_ID}`;
  const date = new Date().toLocaleDateString("he-IL", { timeZone: "Asia/Jerusalem" });

  await transport.sendMail({
    from: `"בגרות מתמטיקה" <${GMAIL_USER}>`,
    to: REPORT_EMAIL,
    subject: `📊 דוח יומי – ${date} | ${users.length} משתמשים`,
    html: `
      <div dir="rtl" style="font-family: Arial, sans-serif; max-width: 500px; margin: auto;">
        <h2 style="color:#111;">דוח יומי – בגרות מתמטיקה 5 יח״ל</h2>
        <p style="font-size:16px;">תאריך: <strong>${date}</strong></p>
        <p style="font-size:16px;">סה״כ משתמשים רשומים: <strong>${users.length}</strong></p>
        <br/>
        <a href="${sheetUrl}"
           style="background:#000;color:#fff;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:bold;font-size:14px;">
          פתח Google Sheet ←
        </a>
        <br/><br/>
        <table border="1" cellpadding="8" cellspacing="0"
               style="border-collapse:collapse;width:100%;font-size:13px;">
          <tr style="background:#111;color:#fff;">
            <th>#</th><th>שם</th><th>מייל</th><th>תאריך הרשמה</th>
          </tr>
          ${users.slice(0, 20).map((u, i) => `
          <tr style="background:${i % 2 === 0 ? '#f9f9f9' : '#fff'}">
            <td>${i + 1}</td>
            <td>${u.name}</td>
            <td>${u.email}</td>
            <td>${new Date(u.createdAt).toLocaleDateString("he-IL")}</td>
          </tr>`).join("")}
          ${users.length > 20 ? `<tr><td colspan="4" style="text-align:center;color:#888;">ועוד ${users.length - 20} משתמשים נוספים בגיליון</td></tr>` : ""}
        </table>
      </div>
    `,
  });

  console.log(`✓ Email sent to ${REPORT_EMAIL}`);
}

// ── Main ─────────────────────────────────────────────────────────────────────
async function main() {
  console.log(`[${new Date().toISOString()}] Starting daily export...`);

  const { users, pageStats, recent } = getData();
  console.log(`  Found ${users.length} users, ${pageStats.length} tracked pages`);

  await updateSheet(users, pageStats, recent);
  await sendEmail(users);

  console.log("✓ Done.");
}

main().catch((err) => {
  console.error("Export failed:", err.message);
  process.exit(1);
});
