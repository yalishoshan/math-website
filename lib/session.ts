import { createHmac, timingSafeEqual } from "crypto";
import { cookies } from "next/headers";

const SECRET = process.env.SESSION_SECRET ?? "bagrut-math-secret-dev-key-2024";
const COOKIE = "bagrut_session";

export type SessionUser = { id: string; name: string; email: string; type: "user" };

function sign(payload: string): string {
  return createHmac("sha256", SECRET).update(payload).digest("hex");
}

export function createSessionCookie(user: SessionUser): string {
  const payload = JSON.stringify(user);
  const encoded = Buffer.from(payload).toString("base64url");
  const sig = sign(encoded);
  return `${encoded}.${sig}`;
}

export function parseSession(value: string): SessionUser | null {
  try {
    const dot = value.lastIndexOf(".");
    if (dot === -1) return null;
    const encoded = value.slice(0, dot);
    const sig = value.slice(dot + 1);
    // Use timingSafeEqual to prevent timing attacks on signature comparison
    const expected = Buffer.from(sign(encoded));
    const actual = Buffer.from(sig);
    if (expected.length !== actual.length || !timingSafeEqual(expected, actual)) return null;
    return JSON.parse(Buffer.from(encoded, "base64url").toString()) as SessionUser;
  } catch {
    return null;
  }
}

export async function getSession(): Promise<SessionUser | null> {
  const cookieStore = await cookies();
  const val = cookieStore.get(COOKIE)?.value;
  if (!val) return null;
  return parseSession(val);
}

export const SESSION_COOKIE_OPTIONS = {
  httpOnly: true,
  sameSite: "lax" as const,
  path: "/",
  maxAge: 60 * 60 * 24 * 30,
  secure: process.env.NODE_ENV === "production",
};
