import { NextResponse } from "next/server";
import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { cookies } from "next/headers";

/**
 * GET /api/auth/signout
 *
 * Signs out the current user by clearing Supabase session cookies
 * and redirecting to the homepage.
 */

export async function GET() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://loopcanvas.video";

  const cookieStore = await cookies();
  const outgoingCookies: { name: string; value: string; options: CookieOptions }[] = [];

  if (url && key) {
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

    await supabase.auth.signOut();
  }

  // Attach cleared cookies + redirect
  const response = NextResponse.redirect(new URL("/", siteUrl));
  for (const c of outgoingCookies) {
    response.cookies.set(c.name, c.value, c.options);
  }

  return response;
}
