import { NextResponse } from "next/server";

// Stub: storage and email delivery are not wired yet, so nothing is saved and no signup is reported as successful.
export async function POST() {
  return NextResponse.json(
    { error: "Signups open soon - we're launching Atlanta Pulse shortly. Please check back." },
    { status: 503, headers: { "Cache-Control": "no-store" } }
  );
}
