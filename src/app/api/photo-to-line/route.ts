import { NextRequest, NextResponse } from "next/server";
import { generateImageToVideoWithFallback } from "@/lib/openrouter";

/**
 * POST /api/photo-to-line
 * Photo-to-loop video generation
 *
 * Request: multipart/form-data { image: File, prompt?: string }
 * Response: { videoUrl: string, model: string, creditsRemaining: number }
 *
 * TODO: Phase 4c — 接入 creditGuard + Supabase auth + credits 扣减
 */

const ACCEPTED_TYPES = [
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/heic",
];
const MAX_SIZE_MB = 20;
const MAX_SIZE_BYTES = MAX_SIZE_MB * 1024 * 1024;

export async function POST(request: NextRequest) {
  try {
    // Parse FormData
    let formData: FormData;
    try {
      formData = await request.formData();
    } catch {
      return NextResponse.json(
        { error: "Invalid form data" },
        { status: 400 }
      );
    }

    const file = formData.get("image") as File | null;
    const prompt = (formData.get("prompt") as string | null) || undefined;

    // Validate file exists
    if (!file) {
      return NextResponse.json(
        { error: "Image file is required" },
        { status: 400 }
      );
    }

    // Validate file type
    if (!ACCEPTED_TYPES.includes(file.type)) {
      return NextResponse.json(
        {
          error: "INVALID_FILE_TYPE",
          message: `Accepted formats: JPG, PNG, WEBP, HEIC. Got: ${file.type}`,
        },
        { status: 400 }
      );
    }

    // Validate file size
    if (file.size > MAX_SIZE_BYTES) {
      return NextResponse.json(
        {
          error: "FILE_TOO_LARGE",
          message: `Maximum file size is ${MAX_SIZE_MB}MB. Got: ${(file.size / 1024 / 1024).toFixed(2)}MB`,
        },
        { status: 400 }
      );
    }

    // Convert to Base64
    const bytes = await file.arrayBuffer();
    const base64 = Buffer.from(bytes).toString("base64");

    // TODO: Phase 4c — creditGuard check
    // const guard = await creditGuard(userId);
    // if (!guard.allowed) {
    //   return NextResponse.json(
    //     { error: "CREDITS_EXHAUSTED", upgradeUrl: "/pricing" },
    //     { status: 402 }
    //   );
    // }

    // Call OpenRouter with fallback chain
    const result = await generateImageToVideoWithFallback(
      "photo_to_line",
      base64,
      prompt,
      {
        maxRetries: 3,
        timeoutMs: 60000,
      }
    );

    // TODO: Phase 4c — deduct credits
    // await supabase.from("credits").update({ used: used + 1 }).eq("user_id", userId);

    return NextResponse.json({
      videoUrl: result.videoUrl,
      model: result.model,
      creditsRemaining: 999, // TODO: Phase 4c — real credits
    });
  } catch (error) {
    console.error("[API /photo-to-line] Error:", error);

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
  return NextResponse.json({ ok: true, endpoint: "/api/photo-to-line" });
}
