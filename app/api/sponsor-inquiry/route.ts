import { NextResponse } from "next/server";

// Stub: storage and email delivery are not wired yet, so nothing is saved and no inquiry is reported as received.
export async function POST() {
  return NextResponse.json(
    { error: "Sponsor inquiries open soon - please check back shortly." },
    { status: 503, headers: { "Cache-Control": "no-store" } }
  );
}
