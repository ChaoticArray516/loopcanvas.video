/**
 * POST /api/video/generate
 *
 * 提交视频生成任务（异步）
 * 立即返回 requestId，前端通过 /api/video/status 轮询进度。
 *
 * Vercel Serverless 限制：60s timeout
 * 本接口仅做"提交"，不等待生成完成，因此不受超时影响。
 *
 * ─── 请求体 ───────────────────────────────────────
 * {
 *   mode: "text" | "image",
 *   prompt: string,
 *   imageUrl?: string,
 *   imageBase64?: string,
 *   negativePrompt?: string,
 *   aspectRatio?: "9:16" | "16:9" | "1:1",
 *   seed?: number,
 * }
 *
 * ─── 响应体 ───────────────────────────────────────
 * 成功 202：{ requestId: string, estimatedCost: { usd, cny } }
 * 失败 4xx/5xx：{ error: string }
 */

import { NextRequest, NextResponse } from "next/server";
import {
  submitVideoJob,
  urlToDataUrl,
  estimateCost,
  SiliconFlowError,
  type VideoGenerateRequest,
} from "@/lib/siliconflow-video";
import { creditGuard, deductCredit } from "@/lib/credit-guard";
import { createClient, SupabaseClient } from "@supabase/supabase-js";

export const runtime = "nodejs";
export const maxDuration = 60;

interface GenerateRequestBody {
  mode: "text" | "image";
  prompt: string;
  imageUrl?: string;
  imageBase64?: string;
  negativePrompt?: string;
  aspectRatio?: "9:16" | "16:9" | "1:1";
  seed?: number;
}

// Lazy-initialized service role client
let _supabase: SupabaseClient | null = null;
function getSupabase(): SupabaseClient | null {
  if (!_supabase) {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
    if (!url || !key) return null;
    _supabase = createClient(url, key);
  }
  return _supabase;
}

async function getUserIdFromRequest(request: NextRequest): Promise<string | null> {
  const authHeader = request.headers.get("authorization");
  if (!authHeader?.startsWith("Bearer ")) return null;

  const token = authHeader.slice(7);
  const sb = getSupabase();
  if (!sb) return null;

  const { data: { user }, error } = await sb.auth.getUser(token);
  if (error || !user) return null;
  return user.id;
}

export async function POST(req: NextRequest) {
  // 1. 鉴权
  const userId = await getUserIdFromRequest(req);
  if (!userId) {
    return NextResponse.json(
      { error: "AUTH_REQUIRED", message: "Please sign in to generate videos" },
      { status: 401 }
    );
  }

  // 2. 额度检查
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

  // 3. 解析请求体
  let body: GenerateRequestBody;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  // 4. 参数校验
  const { mode, prompt, imageUrl, imageBase64, negativePrompt, aspectRatio, seed } = body;

  if (!mode || !["text", "image"].includes(mode)) {
    return NextResponse.json(
      { error: "mode must be 'text' or 'image'" },
      { status: 400 }
    );
  }
  if (!prompt || typeof prompt !== "string" || prompt.trim().length === 0) {
    return NextResponse.json({ error: "prompt is required" }, { status: 400 });
  }
  if (prompt.length > 2000) {
    return NextResponse.json(
      { error: "prompt must be under 2000 characters" },
      { status: 400 }
    );
  }
  if (mode === "image" && !imageUrl && !imageBase64) {
    return NextResponse.json(
      { error: "imageUrl or imageBase64 is required for image mode" },
      { status: 400 }
    );
  }

  // 5. 获取 SiliconFlow API Key
  const apiKey = process.env.SILICONFLOW_API_KEY;
  if (!apiKey) {
    console.error("[SiliconFlow] SILICONFLOW_API_KEY is not set");
    return NextResponse.json(
      { error: "Video service not configured" },
      { status: 503 }
    );
  }

  // 6. 构造请求对象
  let videoRequest: VideoGenerateRequest;

  try {
    if (mode === "text") {
      videoRequest = {
        mode: "text",
        prompt: prompt.trim(),
        negativePrompt,
        aspectRatio: aspectRatio ?? "9:16",
        seed,
      };
    } else {
      let finalBase64 = imageBase64;
      if (!finalBase64 && imageUrl) {
        finalBase64 = await urlToDataUrl(imageUrl);
      }
      videoRequest = {
        mode: "image",
        prompt: prompt.trim(),
        imageBase64: finalBase64!,
        negativePrompt,
        aspectRatio: aspectRatio ?? "9:16",
        seed,
      };
    }
  } catch (err) {
    console.error("[SiliconFlow] Image fetch error:", err);
    return NextResponse.json(
      { error: "Failed to process input image" },
      { status: 422 }
    );
  }

  // 7. 提交任务
  try {
    const { requestId } = await submitVideoJob(videoRequest, apiKey);
    const cost = estimateCost(videoRequest);

    // 扣除额度
    await deductCredit(userId);

    console.log(`[SiliconFlow] Job submitted: ${requestId} (mode=${mode})`);

    return NextResponse.json(
      {
        requestId,
        estimatedCost: cost,
        message: "Video generation started. Poll /api/video/status for progress.",
      },
      { status: 202 }
    );
  } catch (err) {
    if (err instanceof SiliconFlowError) {
      console.error(`[SiliconFlow] Submit error ${err.statusCode}:`, err.message);

      if (err.statusCode === 402) {
        return NextResponse.json(
          { error: "Insufficient balance. Please top up your SiliconFlow account." },
          { status: 402 }
        );
      }
      if (err.statusCode === 429) {
        return NextResponse.json(
          { error: "Rate limit exceeded. Please try again later." },
          { status: 429 }
        );
      }
    }

    console.error("[SiliconFlow] Unexpected error:", err);
    return NextResponse.json(
      { error: "Failed to submit video generation job" },
      { status: 500 }
    );
  }
}
