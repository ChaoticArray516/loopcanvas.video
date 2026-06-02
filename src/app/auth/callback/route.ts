import { NextRequest, NextResponse } from "next/server";
import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { cookies } from "next/headers";

/**
 * GET /auth/callback
 *
 * Supabase OAuth callback handler.
 * Exchanges the auth code for a session, writes cookies to the browser,
 * and redirects the user to the target page.
 */

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get("code");
  const next = searchParams.get("next") || "/text-to-loop";

  const cookieStore = await cookies();
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (code && url && key) {
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

    const { error } = await supabase.auth.exchangeCodeForSession(code);

    if (error) {
      console.error("[Auth Callback] Error exchanging code:", error.message);
      return NextResponse.redirect(
        new URL("/login?error=oauth_failed", request.url)
      );
    }

    // Attach session cookies to the redirect response
    const response = NextResponse.redirect(new URL(next, request.url));
    for (const c of outgoingCookies) {
      response.cookies.set(c.name, c.value, c.options);
    }
    return response;
  }

  return NextResponse.redirect(new URL(next, request.url));
}
