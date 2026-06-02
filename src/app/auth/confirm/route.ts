import { NextRequest, NextResponse } from "next/server";
import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { cookies } from "next/headers";

/**
 * GET /auth/confirm
 *
 * Email confirmation handler for Supabase Auth.
 * Verifies the OTP token, writes session cookies to the browser,
 * and redirects the user to the target page.
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
      const cookieStore = await cookies();
      const outgoingCookies: { name: string; value: string; options: CookieOptions }[] = [];

      const supabase = createServerClient(url, key, {
        cookies: {
          getAll() {
            return cookieStore.getAll();
          },
          setAll(cookiesToSet) {
            for (const c of cookiesToSet) {
              outgoingCookies.push(c);
            }
          },
        },
      });

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

      // Attach session cookies to the redirect response
      const response = NextResponse.redirect(new URL(next, request.url));
      for (const c of outgoingCookies) {
        response.cookies.set(c.name, c.value, c.options);
      }
      return response;
    }
  }

  return NextResponse.redirect(new URL(next, request.url));
}
