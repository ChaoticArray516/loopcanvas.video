import { NextRequest, NextResponse } from "next/server";
import { generateImageToVideoWithFallback } from "@/lib/openrouter";
import { creditGuard, deductCredit } from "@/lib/credit-guard";
import { createClient, SupabaseClient } from "@supabase/supabase-js";

/**
 * POST /api/photo-to-line
 * Photo-to-loop video generation
 */

const ACCEPTED_TYPES = [
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/heic",
];
const MAX_SIZE_MB = 20;
const MAX_SIZE_BYTES = MAX_SIZE_MB * 1024 * 1024;

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

    // Convert to Base64
    const bytes = await file.arrayBuffer();
    const base64 = Buffer.from(bytes).toString("base64");

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

    // Deduct credit
    const creditsRemaining = await deductCredit(userId);

    return NextResponse.json({
      videoUrl: result.videoUrl,
      model: result.model,
      creditsRemaining,
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