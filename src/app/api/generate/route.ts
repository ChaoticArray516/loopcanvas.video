import { NextRequest, NextResponse } from "next/server";
import { generateWithFallback } from "@/lib/openrouter";
import { creditGuard, deductCredit } from "@/lib/credit-guard";
import { createClient, SupabaseClient } from "@supabase/supabase-js";

/**
 * POST /api/generate
 * Text-to-loop video generation
 */

// Lazy-initialized service role client
let _supabase: SupabaseClient | null = null;
function getSupabase(): SupabaseClient {
  if (!_supabase) {
    _supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    );
  }
  return _supabase;
}

async function getUserIdFromRequest(request: NextRequest): Promise<string | null> {
  const authHeader = request.headers.get("authorization");
  if (!authHeader?.startsWith("Bearer ")) return null;

  const token = authHeader.slice(7);
  const { data: { user }, error } = await getSupabase().auth.getUser(token);
  if (error || !user) return null;
  return user.id;
}

export async function POST(request: NextRequest) {
  try {
    // Parse JSON body
    let body: { prompt?: string };
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { error: "Invalid JSON body" },
        { status: 400 }
      );
    }

    const { prompt } = body;

    // Validate prompt
    if (!prompt || typeof prompt !== "string" || prompt.trim().length === 0) {
      return NextResponse.json(
        { error: "Prompt is required and must be a non-empty string" },
        { status: 400 }
      );
    }

    if (prompt.trim().length > 2000) {
      return NextResponse.json(
        { error: "Prompt exceeds maximum length of 2000 characters" },
        { status: 400 }
      );
    }

    // Credit guard check
    const userId = await getUserIdFromRequest(request);
    if (!userId) {
      return NextResponse.json(
        { error: "AUTH_REQUIRED", message: "Please sign in to generate videos" },
        { status: 401 }
      );
    }

    const guard = await creditGuard(userId);
    if (!guard.allowed) {
      return NextResponse.json(
        {
          error: guard.reason ?? "CREDITS_EXHAUSTED",
          upgradeUrl: guard.upgradeUrl ?? "/pricing",
        },
        { status: 402 }
      );
    }

    // Call OpenRouter with fallback chain
    const result = await generateWithFallback("text_line_art", prompt.trim(), {
      maxRetries: 3,
      timeoutMs: 60000,
    });

    // Deduct credit
    const creditsRemaining = await deductCredit(userId);

    return NextResponse.json({
      videoUrl: result.videoUrl,
      model: result.model,
      creditsRemaining,
    });
  } catch (error) {
    console.error("[API /generate] Error:", error);

    if (error instanceof Error && error.message.includes("All fallback models failed")) {
      return NextResponse.json(
        { error: "GENERATION_FAILED", message: "All models failed. Please try again later." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { error: "INTERNAL_ERROR", message: "Failed to generate video" },
      { status: 500 }
    );
  }
}

// Keep GET for health check
export async function GET() {
  return NextResponse.json({ ok: true, endpoint: "/api/generate" });
}