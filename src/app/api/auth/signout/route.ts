import { NextResponse } from "next/server";
import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

/**
 * GET /api/auth/signout
 *
 * Signs out the current user by clearing Supabase cookies
 * and redirecting to the homepage.
 */
export async function GET() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://loopcanvas.video";

  if (url && key) {
    const cookieStore = await cookies();
    const supabase = createServerClient(url, key, {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll() {
          // no-op: signout invalidates, no new cookies need to be set
        },
      },
    });

    await supabase.auth.signOut();
  }

  // Clear Supabase compound auth cookie on the browser side
  const response = NextResponse.redirect(new URL("/", siteUrl));
  response.cookies.set("sb-puvtgzmqccbeyeymkhpk-auth-token", "", {
    maxAge: 0,
    path: "/",
  });

  return response;
}
