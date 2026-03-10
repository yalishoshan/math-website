import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { getSession } from "@/lib/session";

const MAX_DURATION = 4 * 60 * 60; // cap at 4 hours to ignore outliers
const MAX_PAGE_LENGTH = 200;

export async function POST(req: NextRequest) {
  let page: unknown, duration: unknown;
  try {
    ({ page, duration } = await req.json());
  } catch {
    return NextResponse.json({ ok: true }); // silently ignore bad requests
  }

  if (typeof page !== "string" || typeof duration !== "number" || duration < 3) {
    return NextResponse.json({ ok: true });
  }

  const session = await getSession();

  await db.pageVisit.create({
    data: {
      userId: session?.id ?? null,
      page: page.slice(0, MAX_PAGE_LENGTH),
      duration: Math.min(Math.round(duration), MAX_DURATION),
    },
  });

  return NextResponse.json({ ok: true });
}
