/**
 * SiliconFlow Video API — Core Service
 * LoopCanvas AI · https://loopcanvas.video
 *
 * 覆盖能力：
 *   - Text-to-Video (T2V): Wan-AI/Wan2.2-T2V-A14B
 *   - Image-to-Video (I2V): Wan-AI/Wan2.2-I2V-A14B
 *   - 异步提交 + 轮询状态
 *   - 9:16 垂直输出（720×1280），完美适配 Spotify Canvas
 *
 * 定价（2026-05）：$0.29 / 视频（5秒，720p）
 * API 端点：https://api.siliconflow.com/v1（全球可用）
 */

// ─────────────────────────────────────────────
// 类型定义
// ─────────────────────────────────────────────

export type VideoAspectRatio = "9:16" | "16:9" | "1:1";
export type VideoStatus = "InQueue" | "InProgress" | "Succeed" | "Failed";

export type VideoModel =
  | "Wan-AI/Wan2.2-T2V-A14B"
  | "Wan-AI/Wan2.2-I2V-A14B";

/** 图像尺寸枚举，由宽高比决定 */
const ASPECT_RATIO_TO_SIZE: Record<VideoAspectRatio, string> = {
  "9:16": "720x1280",   // 垂直 — Spotify Canvas / TikTok / Reels
  "16:9": "1280x720",   // 横屏 — YouTube
  "1:1":  "960x960",    // 方形 — Instagram
};

// ─────────────────────────────────────────────
// 请求 / 响应类型
// ─────────────────────────────────────────────

export interface T2VRequest {
  mode: "text";
  prompt: string;
  negativePrompt?: string;
  aspectRatio?: VideoAspectRatio;
  seed?: number;
}

export interface I2VRequest {
  mode: "image";
  prompt: string;
  /** base64 Data URL，格式：data:image/png;base64,XXX */
  imageBase64: string;
  negativePrompt?: string;
  aspectRatio?: VideoAspectRatio;
  seed?: number;
}

export type VideoGenerateRequest = T2VRequest | I2VRequest;

/** 提交任务后返回 */
export interface SubmitResponse {
  requestId: string;
}

/** 轮询状态返回 */
export interface VideoStatusResponse {
  status: VideoStatus;
  reason?: string;
  results?: {
    videos: Array<{ url: string }>;
    timings?: { inference: number };
    seed?: number;
  };
}

/** 最终完成后的结果 */
export interface VideoResult {
  requestId: string;
  videoUrl: string;
  inferenceTime?: number;
  seed?: number;
}

// ─────────────────────────────────────────────
// 常量
// ─────────────────────────────────────────────

const SILICONFLOW_API_BASE = "https://api.siliconflow.cn/v1";
const SUBMIT_ENDPOINT = `${SILICONFLOW_API_BASE}/video/submit`;
const STATUS_ENDPOINT = `${SILICONFLOW_API_BASE}/video/status`;

/** 轮询配置 */
const POLL_CONFIG = {
  /** 初始等待（ms）— 视频生成通常需要 60-120s */
  initialDelayMs: 8_000,
  /** 轮询间隔（ms） */
  intervalMs: 5_000,
  /** 最大轮询次数（60次 × 5s = 300s 超时） */
  maxAttempts: 60,
} as const;

// ─────────────────────────────────────────────
// 核心函数
// ─────────────────────────────────────────────

/**
 * 提交视频生成任务
 * @returns requestId — 用于后续轮询状态
 */
export async function submitVideoJob(
  request: VideoGenerateRequest,
  apiKey: string
): Promise<SubmitResponse> {
  const imageSize =
    ASPECT_RATIO_TO_SIZE[request.aspectRatio ?? "9:16"];

  // 构造请求体
  const body: Record<string, unknown> =
    request.mode === "text"
      ? {
          model: "Wan-AI/Wan2.2-T2V-A14B" satisfies VideoModel,
          prompt: request.prompt,
          negative_prompt: request.negativePrompt,
          image_size: imageSize,
          seed: request.seed,
        }
      : {
          model: "Wan-AI/Wan2.2-I2V-A14B" satisfies VideoModel,
          prompt: request.prompt,
          image: request.imageBase64,
          negative_prompt: request.negativePrompt,
          image_size: imageSize,
          seed: request.seed,
        };

  // 移除 undefined 字段
  Object.keys(body).forEach((k) => body[k] === undefined && delete body[k]);

  const res = await fetch(SUBMIT_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const errText = await res.text();
    throw new SiliconFlowError(
      `Submit failed [${res.status}]: ${errText}`,
      res.status
    );
  }

  const data = (await res.json()) as SubmitResponse;

  if (!data.requestId) {
    throw new SiliconFlowError("Submit response missing requestId", 500);
  }

  return data;
}

/**
 * 查询单次任务状态
 */
export async function getVideoStatus(
  requestId: string,
  apiKey: string
): Promise<VideoStatusResponse> {
  const res = await fetch(STATUS_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ requestId }),
  });

  if (!res.ok) {
    const errText = await res.text();
    throw new SiliconFlowError(
      `Status check failed [${res.status}]: ${errText}`,
      res.status
    );
  }

  return (await res.json()) as VideoStatusResponse;
}

/**
 * 提交任务并轮询直到完成（适用于后台 Worker / Node.js 长任务）
 *
 * 注意：此函数执行时间可能超过 Vercel Serverless 60s 限制。
 *     在 Vercel 中请使用 submitVideoJob + 前端轮询 /api/video/status 的分离模式。
 *     此函数适用于 Vercel Edge Functions（无超时限制）或后台 Worker。
 */
export async function generateVideoAndWait(
  request: VideoGenerateRequest,
  apiKey: string
): Promise<VideoResult> {
  const { requestId } = await submitVideoJob(request, apiKey);

  // 初始等待，避免立即轮询
  await sleep(POLL_CONFIG.initialDelayMs);

  for (let attempt = 0; attempt < POLL_CONFIG.maxAttempts; attempt++) {
    const statusRes = await getVideoStatus(requestId, apiKey);

    switch (statusRes.status) {
      case "Succeed": {
        const videoUrl = statusRes.results?.videos?.[0]?.url;
        if (!videoUrl) {
          throw new SiliconFlowError("Succeed but no video URL returned", 500);
        }
        return {
          requestId,
          videoUrl,
          inferenceTime: statusRes.results?.timings?.inference,
          seed: statusRes.results?.seed,
        };
      }

      case "Failed":
        throw new SiliconFlowError(
          `Video generation failed: ${statusRes.reason ?? "unknown reason"}`,
          500
        );

      case "InQueue":
      case "InProgress":
        // 继续轮询
        await sleep(POLL_CONFIG.intervalMs);
        break;
    }
  }

  throw new SiliconFlowError(
    `Video generation timed out after ${
      (POLL_CONFIG.initialDelayMs +
        POLL_CONFIG.maxAttempts * POLL_CONFIG.intervalMs) /
      1000
    }s`,
    504
  );
}

// ─────────────────────────────────────────────
// 工具函数
// ─────────────────────────────────────────────

/** 将本地文件 Buffer 转为 base64 Data URL */
export function bufferToDataUrl(
  buffer: Buffer,
  mimeType: "image/png" | "image/jpeg" | "image/webp" = "image/png"
): string {
  return `data:${mimeType};base64,${buffer.toString("base64")}`;
}

/** 将远程图片 URL 下载并转为 base64 Data URL */
export async function urlToDataUrl(imageUrl: string): Promise<string> {
  const res = await fetch(imageUrl);
  if (!res.ok) {
    throw new Error(`Failed to fetch image: ${res.status}`);
  }
  const contentType =
    (res.headers.get("content-type") as
      | "image/png"
      | "image/jpeg"
      | "image/webp") ?? "image/png";
  const arrayBuffer = await res.arrayBuffer();
  const base64 = Buffer.from(arrayBuffer).toString("base64");
  return `data:${contentType};base64,${base64}`;
}

/** 估算单次调用成本（USD） */
export function estimateCost(
  _request: VideoGenerateRequest,
  durationSeconds = 5
): { usd: number; cny: number } {
  // 当前定价：$0.29 / 5s 视频（Wan2.2，720p）
  const usdPer5s = 0.29;
  const usd = (usdPer5s / 5) * durationSeconds;
  return { usd: parseFloat(usd.toFixed(4)), cny: parseFloat((usd * 7.25).toFixed(3)) };
}

// ─────────────────────────────────────────────
// 自定义错误类
// ─────────────────────────────────────────────

export class SiliconFlowError extends Error {
  constructor(
    message: string,
    public readonly statusCode: number
  ) {
    super(message);
    this.name = "SiliconFlowError";
  }
}

// ─────────────────────────────────────────────
// 内部工具
// ─────────────────────────────────────────────

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
