import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

/**
 * GET /api/auth/signout
 *
 * Signs out the current user and redirects to the homepage.
 */

export async function GET() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (url && key) {
    const supabase = createClient(url, key);
    await supabase.auth.signOut();
  }

  return NextResponse.redirect(new URL("/", process.env.NEXT_PUBLIC_SITE_URL || "https://loopcanvas.video"));
}
