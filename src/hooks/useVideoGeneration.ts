/**
 * useVideoGeneration — React Hook
 *
 * 封装完整的视频生成流程：
 *   1. 调用 /api/video/generate 提交任务
 *   2. 每 5 秒轮询 /api/video/status
 *   3. 完成后返回视频 URL，或暴露错误信息
 *
 * 使用示例：
 * ```tsx
 * const { generate, status, videoUrl, error, isLoading, reset, progress } = useVideoGeneration();
 *
 * // 文生视频
 * await generate({ mode: "text", prompt: "Glowing particles in a loop" }, authToken);
 *
 * // 图生视频
 * await generate({ mode: "image", prompt: "Animate this", imageBase64: "data:image/..." }, authToken);
 * ```
 */

import { useState, useRef, useCallback, useEffect } from "react";

// ─── 类型定义 ─────────────────────────────────────

export type GenerationStatus =
  | "idle"
  | "submitting"
  | "InQueue"
  | "InProgress"
  | "Succeed"
  | "Failed";

export interface GenerateOptions {
  mode: "text" | "image";
  prompt: string;
  imageUrl?: string;
  imageBase64?: string;
  negativePrompt?: string;
  aspectRatio?: "9:16" | "16:9" | "1:1";
  seed?: number;
}

export interface UseVideoGenerationReturn {
  status: GenerationStatus;
  videoUrl: string | null;
  error: string | null;
  requestId: string | null;
  inferenceTime: number | null;
  estimatedCost: { usd: number; cny: number } | null;
  isLoading: boolean;
  pollCount: number;
  /** 轮询进度百分比 (0-100) */
  progress: number;
  generate: (options: GenerateOptions, authToken: string) => Promise<void>;
  reset: () => void;
}

// ─── 配置 ─────────────────────────────────────────

const POLL_INTERVAL_MS = 5_000;
const MAX_POLL_ATTEMPTS = 72;

// ─── Hook ─────────────────────────────────────────

export function useVideoGeneration(): UseVideoGenerationReturn {
  const [status, setStatus] = useState<GenerationStatus>("idle");
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [requestId, setRequestId] = useState<string | null>(null);
  const [inferenceTime, setInferenceTime] = useState<number | null>(null);
  const [estimatedCost, setEstimatedCost] = useState<{ usd: number; cny: number } | null>(null);
  const [pollCount, setPollCount] = useState(0);

  const pollTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isCancelledRef = useRef(false);

  // ─── 重置 ───────────────────────────────────────
  const reset = useCallback(() => {
    isCancelledRef.current = true;
    if (pollTimerRef.current) {
      clearTimeout(pollTimerRef.current);
      pollTimerRef.current = null;
    }
    setStatus("idle");
    setVideoUrl(null);
    setError(null);
    setRequestId(null);
    setInferenceTime(null);
    setEstimatedCost(null);
    setPollCount(0);
    isCancelledRef.current = false;
  }, []);

  // ─── 轮询状态 ────────────────────────────────────
  // Defined as a ref-held function to allow recursive calls via setTimeout
  // without triggering ESLint "accessed before declared" / "update ref during render"
  const pollStatusRef = useRef<((reqId: string, attempt: number, authToken: string) => void) | undefined>(undefined);

  const pollStatus = useCallback(async (reqId: string, attempt: number, authToken: string) => {
    if (isCancelledRef.current) return;
    if (attempt >= MAX_POLL_ATTEMPTS) {
      setStatus("Failed");
      setError("Video generation timed out. Please try again.");
      return;
    }

    try {
      const res = await fetch("/api/video/status", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authToken}`,
        },
        body: JSON.stringify({ requestId: reqId }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error ?? `HTTP ${res.status}`);
      }

      setPollCount(attempt + 1);

      switch (data.status as GenerationStatus) {
        case "Succeed":
          setStatus("Succeed");
          setVideoUrl(data.videoUrl);
          setInferenceTime(data.inferenceTime ?? null);
          break;

        case "Failed":
          setStatus("Failed");
          setError(data.reason ?? "Video generation failed");
          break;

        case "InQueue":
        case "InProgress":
          setStatus(data.status);
          pollTimerRef.current = setTimeout(
            () => pollStatusRef.current?.(reqId, attempt + 1, authToken),
            POLL_INTERVAL_MS
          );
          break;

        default:
          pollTimerRef.current = setTimeout(
            () => pollStatusRef.current?.(reqId, attempt + 1, authToken),
            POLL_INTERVAL_MS
          );
      }
    } catch (err) {
      if (isCancelledRef.current) return;
      console.error("[useVideoGeneration] Poll error:", err);
      if (attempt < MAX_POLL_ATTEMPTS) {
        pollTimerRef.current = setTimeout(
          () => pollStatusRef.current?.(reqId, attempt + 1, authToken),
          POLL_INTERVAL_MS * 2
        );
      } else {
        setStatus("Failed");
        setError("Network error while checking status");
      }
    }
  }, []);

  // Sync pollStatus into ref so recursive setTimeout callbacks always see latest
  useEffect(() => {
    pollStatusRef.current = pollStatus;
  });

  // ─── 触发生成 ────────────────────────────────────
  const generate = useCallback(
    async (options: GenerateOptions, authToken: string) => {
      reset();
      isCancelledRef.current = false;

      if (!authToken) {
        setStatus("Failed");
        setError("Please sign in to generate videos");
        return;
      }

      setStatus("submitting");
      setError(null);

      try {
        const res = await fetch("/api/video/generate", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authToken}`,
          },
          body: JSON.stringify(options),
        });

        const data = await res.json();

        if (!res.ok) {
          if (res.status === 401) {
            throw new Error("Please sign in to generate videos");
          }
          if (res.status === 402) {
            throw new Error(
              data.error ?? "Credits exhausted. Upgrade to Pro for more generations."
            );
          }
          if (res.status === 429) {
            throw new Error("Rate limit exceeded. Please try again later.");
          }
          throw new Error(data.error ?? `Generation failed (${res.status})`);
        }

        const { requestId: reqId, estimatedCost: cost } = data;
        setRequestId(reqId);
        setEstimatedCost(cost ?? null);
        setStatus("InQueue");

        // 初始延迟 8 秒后开始轮询
        pollTimerRef.current = setTimeout(
          () => pollStatusRef.current?.(reqId, 0, authToken),
          8_000
        );
      } catch (err) {
        setStatus("Failed");
        setError(
          err instanceof Error ? err.message : "Failed to submit video job"
        );
      }
    },
    [reset]
  );

  const progress = Math.min(
    Math.round((pollCount / MAX_POLL_ATTEMPTS) * 100),
    99
  );

  return {
    status,
    videoUrl,
    error,
    requestId,
    inferenceTime,
    estimatedCost,
    isLoading:
      status === "submitting" ||
      status === "InQueue" ||
      status === "InProgress",
    pollCount,
    progress,
    generate,
    reset,
  };
}
