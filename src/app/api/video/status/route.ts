/**
 * POST /api/video/status
 *
 * 查询视频生成任务状态（前端轮询专用）
 *
 * 设计原则：
 *   - 每次调用只做一次状态查询，立即返回
 *   - 前端负责轮询频率控制（推荐 5s 间隔）
 *   - 视频 URL 有效期 10 分钟，Succeed 后需立即下载或转存
 *
 * ─── 请求体 ───────────────────────────────────────
 * { requestId: string }
 *
 * ─── 响应体 ───────────────────────────────────────
 * {
 *   requestId: string,
 *   status: "InQueue" | "InProgress" | "Succeed" | "Failed",
 *   videoUrl?: string,
 *   inferenceTime?: number,
 *   reason?: string,
 * }
 */

import { NextRequest, NextResponse } from "next/server";
import {
  getVideoStatus,
  SiliconFlowError,
} from "@/lib/siliconflow-video";

export const runtime = "nodejs";
export const maxDuration = 30;

interface StatusRequestBody {
  requestId: string;
}

export async function POST(req: NextRequest) {
  // 1. 解析请求体
  let body: StatusRequestBody;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const { requestId } = body;
  if (!requestId || typeof requestId !== "string") {
    return NextResponse.json({ error: "requestId is required" }, { status: 400 });
  }

  // 2. 获取 API Key
  const apiKey = process.env.SILICONFLOW_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "Video service not configured" },
      { status: 503 }
    );
  }

  // 3. 查询状态
  try {
    const statusRes = await getVideoStatus(requestId, apiKey);

    const response: Record<string, unknown> = {
      requestId,
      status: statusRes.status,
    };

    if (statusRes.status === "Succeed") {
      const videoUrl = statusRes.results?.videos?.[0]?.url;
      if (!videoUrl) {
        return NextResponse.json(
          { requestId, status: "Failed", reason: "No video URL in response" },
          { status: 500 }
        );
      }
      response.videoUrl = videoUrl;
      response.inferenceTime = statusRes.results?.timings?.inference;
      response.seed = statusRes.results?.seed;
    }

    if (statusRes.status === "Failed") {
      response.reason = statusRes.reason ?? "Unknown error";
    }

    // 在响应头中加入进度提示
    const headers = new Headers();
    headers.set("X-Video-Status", statusRes.status);
    if (statusRes.status === "InQueue" || statusRes.status === "InProgress") {
      headers.set("Retry-After", "5");
    }

    return NextResponse.json(response, { status: 200, headers });
  } catch (err) {
    if (err instanceof SiliconFlowError) {
      if (err.statusCode === 404) {
        return NextResponse.json(
          { requestId, error: "Job not found. It may have expired." },
          { status: 404 }
        );
      }
    }
    console.error("[SiliconFlow] Status check error:", err);
    return NextResponse.json(
      { requestId, error: "Failed to check video status" },
      { status: 500 }
    );
  }
}
