import { NextResponse } from "next/server";

// Stub: share tracking is not wired up; accept the ping and do nothing with it.
export async function POST() {
  return NextResponse.json({ ok: true });
}
