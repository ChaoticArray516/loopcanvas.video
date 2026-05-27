"use client";

import { useState, useEffect } from "react";
import { Wand2, Download, AlertCircle, RotateCcw } from "lucide-react";
import { useVideoGeneration } from "@/hooks/useVideoGeneration";
import { createClient } from "@supabase/supabase-js";

interface Props {
  initialPrompt?: string;
}

function getSupabase() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key) return null;
  return createClient(url, key);
}

export default function PromptInput({ initialPrompt = "" }: Props) {
  const [prompt, setPrompt] = useState(initialPrompt);
  const [authToken, setAuthToken] = useState<string>("");

  const {
    generate,
    status,
    videoUrl,
    error,
    isLoading,
    progress,
    reset,
  } = useVideoGeneration();

  // Get Supabase auth token on mount
  useEffect(() => {
    const sb = getSupabase();
    if (!sb) return;
    sb.auth.getSession().then(({ data: { session } }) => {
      if (session?.access_token) {
        setAuthToken(session.access_token);
      }
    });
  }, []);

  const canGenerate = prompt.trim().length > 0 && !isLoading;

  async function handleGenerate() {
    if (!canGenerate) return;
    await generate(
      { mode: "text", prompt: prompt.trim(), aspectRatio: "9:16" },
      authToken
    );
  }

  // Status label map
  const statusLabel: Record<string, string> = {
    idle: "Ready to generate",
    submitting: "Submitting...",
    InQueue: "In queue...",
    InProgress: `Generating... ${progress}%`,
    Succeed: "Complete!",
    Failed: "Failed",
  };

  return (
    <div className="mx-auto w-full max-w-2xl space-y-6">
      {/* Prompt input */}
      <div className="space-y-2">
        <label
          htmlFor="prompt"
          className="text-sm font-medium text-muted-foreground"
        >
          Describe your loop scene
        </label>
        <textarea
          id="prompt"
          rows={4}
          placeholder="e.g., gentle ocean waves at sunset, warm golden light, seamless loop..."
          className="w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          disabled={isLoading}
        />
      </div>

      {/* Generate button */}
      <button
        onClick={handleGenerate}
        disabled={!canGenerate}
        className="flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {isLoading ? (
          <>
            <div className="h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground/30 border-t-primary-foreground" />
            {statusLabel[status]}
          </>
        ) : (
          <>
            <Wand2 className="h-4 w-4" />
            Generate Loop Video
          </>
        )}
      </button>

      {/* Progress bar */}
      {isLoading && (
        <div className="space-y-2">
          <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
            <div
              className="h-full rounded-full bg-primary transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-center text-xs text-muted-foreground">
            {statusLabel[status]}
          </p>
        </div>
      )}

      {/* Result area — success */}
      {status === "Succeed" && videoUrl && (
        <div className="space-y-4 rounded-2xl border border-border/50 bg-card p-6">
          <div className="overflow-hidden rounded-xl bg-black">
            <video
              src={videoUrl}
              controls
              loop
              autoPlay
              muted
              className="mx-auto max-h-[400px] w-full"
            />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">
              Your loop is ready!
            </span>
            <div className="flex items-center gap-2">
              <a
                href={videoUrl}
                download
                className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                <Download className="h-4 w-4" />
                Download MP4
              </a>
              <button
                onClick={reset}
                className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted"
              >
                <RotateCcw className="h-4 w-4" />
                New
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Error */}
      {status === "Failed" && error && (
        <div className="flex items-center gap-3 rounded-xl border border-red-200/20 bg-red-500/10 p-4 text-sm text-red-400">
          <AlertCircle className="h-5 w-5 shrink-0" />
          <div className="flex-1">{error}</div>
          <button
            onClick={reset}
            className="rounded-full border border-red-200/20 px-3 py-1 text-xs hover:bg-red-500/20"
          >
            Retry
          </button>
        </div>
      )}

      {/* Guest hint */}
      {!authToken && (
        <p className="text-center text-xs text-muted-foreground">
          Sign in for more generations and to save your videos
        </p>
      )}
    </div>
  );
}
