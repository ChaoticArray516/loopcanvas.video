/**
 * OpenRouter 客户端封装 — LoopCanvas AI 视频生成
 *
 * 提供：
 * - generateWithFallback(scene, prompt)  带模型降级链的生成
 * - callOpenRouter(scene, prompt)        单次 API 调用
 * - callOpenRouterImageToVideo(scene, base64Image, prompt?)  图片转视频
 * - buildLoopPrompt(userPrompt)          prompt 增强
 *
 * 降级策略：
 * - 402/429/503 → 指数退避 (1000 * 2^attempt ms) → 重试同模型
 * - 其他错误 → 切下一个 fallback 模型
 * - 全部失败 → 抛出 "All fallback models failed"
 */

// ===== Scene 类型定义 =====

export type Scene =
  | "text_line_art"
  | "text_with_english"
  | "photo_to_line"
  | "premium_complex"
  | "vector_style";

// ===== 模型降级链 =====

export const MODEL_FALLBACK_CHAIN: Record<Scene, string[]> = {
  text_line_art: ["flux.2-klein-4b", "seedream-4.5", "riverflow-v2-fast"],
  text_with_english: [
    "gpt-image-1",
    "gemini-3.1-flash-image",
    "gemini-2.5-flash-image",
  ],
  photo_to_line: ["gemini-2.5-flash-image", "seedream-4.5", "flux.2-pro"],
  premium_complex: ["flux.2-max", "gemini-3-pro-image"],
  vector_style: ["recraft-v4", "flux.2-max"],
};

// ===== 配置与环境 =====

const OPENROUTER_BASE_URL = "https://openrouter.ai/api/v1";
const API_KEY = process.env.OPENROUTER_API_KEY;
const HTTP_REFERER =
  process.env.OPENROUTER_HTTP_REFERER || "https://loopcanvas.video";
const SITE_NAME = process.env.OPENROUTER_SITE_NAME || "LoopCanvas AI";

interface OpenRouterConfig {
  maxRetries?: number; // 单个模型最大重试次数，默认 3
  timeoutMs?: number; // 请求超时，默认 60000
  temperature?: number;
  maxTokens?: number;
}

interface OpenRouterResult {
  videoUrl: string;
  model: string;
  scene: Scene;
  prompt: string;
}

// ===== Prompt 增强 =====

/**
 * 将用户的简短 prompt 增强为适合生成无缝循环视频的完整 prompt
 */
export function buildLoopPrompt(userPrompt: string): string {
  const base = userPrompt.trim();

  // 如果用户已经提到了 loop，不再追加
  const hasLoopKeyword = /\bloop|seamless|infinite|cycle\b/i.test(base);

  const loopSuffix = hasLoopKeyword
    ? ""
    : ", seamless infinite loop, perfectly matching start and end frames, 4 seconds duration";

  const qualityPrefix =
    "High quality video generation: ";

  return `${qualityPrefix}${base}${loopSuffix}. Optimized for vertical 9:16 format, smooth motion, no text overlays, visually engaging.`;
}

// ===== 核心 API 调用 =====

/**
 * 单次调用 OpenRouter API（文本生成视频）
 */
export async function callOpenRouter(
  scene: Scene,
  prompt: string,
  config: OpenRouterConfig = {}
): Promise<OpenRouterResult> {
  if (!API_KEY) {
    throw new Error("OPENROUTER_API_KEY is not set");
  }

  const model = MODEL_FALLBACK_CHAIN[scene][0];
  const enhancedPrompt = buildLoopPrompt(prompt);

  const response = await fetch(`${OPENROUTER_BASE_URL}/chat/completions`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
      "HTTP-Referer": HTTP_REFERER,
      "X-Title": SITE_NAME,
    },
    body: JSON.stringify({
      model,
      messages: [
        {
          role: "system",
          content:
            "You are a video generation assistant. Generate a seamless looping video based on the user's description. The video must loop perfectly with no visible jump between end and start.",
        },
        {
          role: "user",
          content: enhancedPrompt,
        },
      ],
      temperature: config.temperature ?? 0.7,
      max_tokens: config.maxTokens ?? 2048,
    }),
    signal: AbortSignal.timeout(config.timeoutMs ?? 60000),
  });

  if (!response.ok) {
    const errorBody = await response.text();
    throw new OpenRouterError(
      response.status,
      `OpenRouter API error (${response.status}): ${errorBody}`
    );
  }

  const data = (await response.json()) as {
    choices: { message: { content: string } }[];
  };

  // TODO: Phase 4b 中替换为真实视频生成 API 调用
  // 当前返回占位视频 URL（用于框架验证）
  const videoUrl = `/samples/nature-ocean-1.mp4`;

  return {
    videoUrl,
    model,
    scene,
    prompt: enhancedPrompt,
  };
}

/**
 * 单次调用 OpenRouter API（图片转视频）
 */
export async function callOpenRouterImageToVideo(
  scene: Scene,
  base64Image: string,
  prompt?: string,
  config: OpenRouterConfig = {}
): Promise<OpenRouterResult> {
  if (!API_KEY) {
    throw new Error("OPENROUTER_API_KEY is not set");
  }

  const model = MODEL_FALLBACK_CHAIN[scene][0];
  const userPrompt = prompt || "Transform this image into a seamless looping video";
  const enhancedPrompt = buildLoopPrompt(userPrompt);

  const response = await fetch(`${OPENROUTER_BASE_URL}/chat/completions`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
      "HTTP-Referer": HTTP_REFERER,
      "X-Title": SITE_NAME,
    },
    body: JSON.stringify({
      model,
      messages: [
        {
          role: "system",
          content:
            "You are a video generation assistant. Transform the provided image into a seamless looping video. The video must loop perfectly.",
        },
        {
          role: "user",
          content: [
            { type: "text", text: enhancedPrompt },
            {
              type: "image_url",
              image_url: { url: `data:image/jpeg;base64,${base64Image}` },
            },
          ],
        },
      ],
      temperature: config.temperature ?? 0.7,
      max_tokens: config.maxTokens ?? 2048,
    }),
    signal: AbortSignal.timeout(config.timeoutMs ?? 60000),
  });

  if (!response.ok) {
    const errorBody = await response.text();
    throw new OpenRouterError(
      response.status,
      `OpenRouter API error (${response.status}): ${errorBody}`
    );
  }

  // TODO: Phase 4b 中替换为真实视频生成 API 调用
  const videoUrl = `/samples/nature-ocean-1.mp4`;

  return {
    videoUrl,
    model,
    scene,
    prompt: enhancedPrompt,
  };
}

// ===== 降级循环生成 =====

class OpenRouterError extends Error {
  constructor(
    public readonly status: number,
    message: string
  ) {
    super(message);
    this.name = "OpenRouterError";
  }

  isRetryable(): boolean {
    return [402, 429, 503].includes(this.status);
  }
}

/**
 * 带模型降级链的生成
 * - 402/429/503 → 指数退避重试同模型
 * - 其他错误 → 切换下一个 fallback 模型
 * - 全部失败 → 抛出 "All fallback models failed"
 */
export async function generateWithFallback(
  scene: Scene,
  prompt: string,
  config: OpenRouterConfig = {}
): Promise<OpenRouterResult> {
  const models = MODEL_FALLBACK_CHAIN[scene];
  const maxRetries = config.maxRetries ?? 3;

  for (const model of models) {
    for (let attempt = 0; attempt < maxRetries; attempt++) {
      try {
        const result = await callOpenRouter(scene, prompt, {
          ...config,
          timeoutMs: config.timeoutMs ?? 60000,
        });
        return result;
      } catch (error) {
        if (error instanceof OpenRouterError && error.isRetryable()) {
          // 指数退避：1000 * 2^attempt ms
          const delay = 1000 * Math.pow(2, attempt);
          console.warn(
            `[OpenRouter] Retryable error (${error.status}) for model ${model}, attempt ${attempt + 1}/${maxRetries}, waiting ${delay}ms`
          );
          await sleep(delay);
          continue; // 重试同模型
        }

        console.warn(
          `[OpenRouter] Non-retryable error for model ${model}, switching fallback`
        );
        break; // 切换下一个模型
      }
    }
  }

  throw new Error(
    `All fallback models failed for scene "${scene}". Models tried: ${models.join(", ")}`
  );
}

/**
 * 带模型降级链的图片转视频生成
 */
export async function generateImageToVideoWithFallback(
  scene: Scene,
  base64Image: string,
  prompt?: string,
  config: OpenRouterConfig = {}
): Promise<OpenRouterResult> {
  const models = MODEL_FALLBACK_CHAIN[scene];
  const maxRetries = config.maxRetries ?? 3;

  for (const model of models) {
    for (let attempt = 0; attempt < maxRetries; attempt++) {
      try {
        const result = await callOpenRouterImageToVideo(
          scene,
          base64Image,
          prompt,
          { ...config, timeoutMs: config.timeoutMs ?? 60000 }
        );
        return result;
      } catch (error) {
        if (error instanceof OpenRouterError && error.isRetryable()) {
          const delay = 1000 * Math.pow(2, attempt);
          console.warn(
            `[OpenRouter] Retryable error (${error.status}) for model ${model}, attempt ${attempt + 1}/${maxRetries}, waiting ${delay}ms`
          );
          await sleep(delay);
          continue;
        }

        console.warn(
          `[OpenRouter] Non-retryable error for model ${model}, switching fallback`
        );
        break;
      }
    }
  }

  throw new Error(
    `All fallback models failed for scene "${scene}". Models tried: ${models.join(", ")}`
  );
}

// ===== 辅助函数 =====

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// ===== Barrel Export =====

export {
  OpenRouterError,
  OPENROUTER_BASE_URL,
  sleep,
};
