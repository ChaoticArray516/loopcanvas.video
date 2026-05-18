import { NextRequest, NextResponse } from "next/server";
import { generateWithFallback } from "@/lib/openrouter";

/**
 * POST /api/generate
 * Text-to-loop video generation
 *
 * Request Body: { prompt: string }
 * Response: { videoUrl: string, model: string, creditsRemaining: number }
 *
 * TODO: Phase 4c — 接入 creditGuard + Supabase auth + credits 扣减
 */

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

    // TODO: Phase 4c — creditGuard check
    // const guard = await creditGuard(userId);
    // if (!guard.allowed) {
    //   return NextResponse.json(
    //     { error: "CREDITS_EXHAUSTED", upgradeUrl: "/pricing" },
    //     { status: 402 }
    //   );
    // }

    // Call OpenRouter with fallback chain
    const result = await generateWithFallback("text_line_art", prompt.trim(), {
      maxRetries: 3,
      timeoutMs: 60000,
    });

    // TODO: Phase 4c — deduct credits
    // await supabase.from("credits").update({ used: used + 1 }).eq("user_id", userId);

    return NextResponse.json({
      videoUrl: result.videoUrl,
      model: result.model,
      creditsRemaining: 999, // TODO: Phase 4c — real credits
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

// Keep GET for health check (existing placeholder behavior)
export async function GET() {
  return NextResponse.json({ ok: true, endpoint: "/api/generate" });
}
