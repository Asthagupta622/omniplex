import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    stripeKey: process.env.STRIPE_SECRET_KEY,
    planId: process.env.STRIPE_PRO_PLAN_ID,
    appUrl: process.env.NEXT_PUBLIC_APP_URL,
  });
}
