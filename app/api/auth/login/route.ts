import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { createSessionCookie, SESSION_COOKIE_OPTIONS, type SessionUser } from "@/lib/session";
import { rateLimit } from "@/lib/rateLimit";
import bcrypt from "bcryptjs";

// Dummy hash to run bcrypt even when user is not found (prevents timing attacks)
const DUMMY_HASH = "$2a$10$abcdefghijklmnopqrstuuABCDEFGHIJKLMNOPQRSTUVWXYZ012345";
const GENERIC_ERROR = "פרטי הכניסה שגויים"; // Same message for all auth failures (no user enumeration)

export async function POST(req: NextRequest) {
  // Rate limit: 10 attempts per IP per 15 minutes
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0].trim() ?? "unknown";
  if (!rateLimit(`login:${ip}`, 10, 15 * 60 * 1000)) {
    return NextResponse.json({ error: "יותר מדי ניסיונות. נסה שוב בעוד 15 דקות." }, { status: 429 });
  }

  let email: string, password: string;
  try {
    ({ email, password } = await req.json());
  } catch {
    return NextResponse.json({ error: "בקשה לא תקינה" }, { status: 400 });
  }

  if (!email || typeof email !== "string" || !password || typeof password !== "string") {
    return NextResponse.json({ error: GENERIC_ERROR }, { status: 401 });
  }

  const user = await db.user.findUnique({ where: { email: email.toLowerCase().trim() } });

  // Always run bcrypt — prevents timing attack when user doesn't exist
  const hashToCheck = user?.password ?? DUMMY_HASH;
  const valid = await bcrypt.compare(password, hashToCheck);

  if (!user || !valid) {
    return NextResponse.json({ error: GENERIC_ERROR }, { status: 401 });
  }

  const session: SessionUser = { id: user.id, name: user.name, email: user.email, type: "user" };
  const res = NextResponse.json({ user: session });
  res.cookies.set("bagrut_session", createSessionCookie(session), SESSION_COOKIE_OPTIONS);
  return res;
}
