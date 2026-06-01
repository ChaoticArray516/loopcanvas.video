import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

/**
 * GET /auth/callback
 *
 * Supabase OAuth callback handler.
 * Exchanges the auth code for a session and redirects the user.
 */

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get("code");
  const next = searchParams.get("next") || "/text-to-loop";

  if (code) {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (url && key) {
      const supabase = createClient(url, key);
      const { error } = await supabase.auth.exchangeCodeForSession(code);

      if (error) {
        console.error("[Auth Callback] Error exchanging code:", error.message);
        return NextResponse.redirect(
          new URL("/login?error=oauth_failed", request.url)
        );
      }
    }
  }

  return NextResponse.redirect(new URL(next, request.url));
}
