import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

/**
 * GET /auth/confirm
 *
 * Email confirmation handler for Supabase Auth.
 * Users clicking the confirmation link in their email land here.
 */

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const token_hash = searchParams.get("token_hash");
  const type = searchParams.get("type") as "email" | "recovery" | null;
  const next = searchParams.get("next") || "/text-to-loop";

  if (token_hash && type) {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (url && key) {
      const supabase = createClient(url, key);
      const { error } = await supabase.auth.verifyOtp({
        type,
        token_hash,
      });

      if (error) {
        console.error("[Auth Confirm] Error verifying OTP:", error.message);
        return NextResponse.redirect(
          new URL("/login?error=confirmation_failed", request.url)
        );
      }
    }
  }

  return NextResponse.redirect(new URL(next, request.url));
}
