import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { createSessionCookie, SESSION_COOKIE_OPTIONS, type SessionUser } from "@/lib/session";
import { rateLimit } from "@/lib/rateLimit";
import bcrypt from "bcryptjs";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: NextRequest) {
  // Rate limit: 5 signups per IP per hour
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0].trim() ?? "unknown";
  if (!rateLimit(`signup:${ip}`, 5, 60 * 60 * 1000)) {
    return NextResponse.json({ error: "יותר מדי ניסיונות. נסה שוב מאוחר יותר." }, { status: 429 });
  }

  let name: string, email: string, password: string;
  try {
    ({ name, email, password } = await req.json());
  } catch {
    return NextResponse.json({ error: "בקשה לא תקינה" }, { status: 400 });
  }

  // Validate types and lengths
  if (typeof name !== "string" || typeof email !== "string" || typeof password !== "string")
    return NextResponse.json({ error: "נתונים לא תקינים" }, { status: 400 });

  const trimmedName = name.trim();
  const trimmedEmail = email.trim().toLowerCase();

  if (!trimmedName || trimmedName.length > 100)
    return NextResponse.json({ error: "שם לא תקין" }, { status: 400 });

  if (!EMAIL_REGEX.test(trimmedEmail) || trimmedEmail.length > 254)
    return NextResponse.json({ error: "כתובת מייל לא תקינה" }, { status: 400 });

  if (password.length < 6 || password.length > 128)
    return NextResponse.json({ error: "הסיסמה חייבת להכיל בין 6 ל-128 תווים" }, { status: 400 });

  const existing = await db.user.findUnique({ where: { email: trimmedEmail } });
  if (existing)
    return NextResponse.json({ error: "כתובת המייל כבר רשומה" }, { status: 400 });

  const hashed = await bcrypt.hash(password, 10);
  const user = await db.user.create({
    data: { name: trimmedName, email: trimmedEmail, password: hashed },
  });

  const session: SessionUser = { id: user.id, name: user.name, email: user.email, type: "user" };
  const res = NextResponse.json({ user: session });
  res.cookies.set("bagrut_session", createSessionCookie(session), SESSION_COOKIE_OPTIONS);
  return res;
}
