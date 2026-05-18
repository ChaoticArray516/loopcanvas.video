"use client";

import { useState } from "react";
import { Wand2, Loader2, Download, AlertCircle } from "lucide-react";

type Status = "idle" | "generating" | "success" | "error";

interface Props {
  initialPrompt?: string;
}

export default function PromptInput({ initialPrompt = "" }: Props) {
  const [prompt, setPrompt] = useState(initialPrompt);
  const [status, setStatus] = useState<Status>("idle");
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState("");

  // TODO: replace with real auth + credits hook
  const credits: number = 5;
  const isLoggedIn = false;

  const creditsStatus =
    !isLoggedIn
      ? "guest"
      : credits === 0
        ? "depleted"
        : credits <= 2
          ? "low"
          : "normal";

  const canGenerate =
    prompt.trim().length > 0 &&
    status !== "generating" &&
    creditsStatus !== "depleted";

  async function handleGenerate() {
    if (!canGenerate) return;

    setStatus("generating");
    setVideoUrl(null);
    setErrorMsg("");

    // TODO: replace with real API call (Phase 4a)
    try {
      await new Promise((resolve) => setTimeout(resolve, 3000));
      // Simulate success
      setVideoUrl("/samples/nature-ocean-1.mp4");
      setStatus("success");
    } catch {
      setErrorMsg("Generation failed. Please try again.");
      setStatus("error");
    }
  }

  return (
    <div className="mx-auto w-full max-w-2xl space-y-6">
      {/* Credits badge */}
      <div className="flex items-center justify-between">
        <label
          htmlFor="prompt"
          className="text-sm font-medium text-muted-foreground"
        >
          Describe your loop scene
        </label>
        {creditsStatus === "guest" && (
          <span className="text-xs text-muted-foreground">
            Sign in for more generations
          </span>
        )}
        {creditsStatus === "normal" && (
          <span className="rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-700">
            {credits} credits left
          </span>
        )}
        {creditsStatus === "low" && (
          <span className="rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-medium text-amber-700">
            {credits} credits left — low
          </span>
        )}
        {creditsStatus === "depleted" && (
          <span className="rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-700">
            No credits — upgrade to Pro
          </span>
        )}
      </div>

      {/* Textarea */}
      <textarea
        id="prompt"
        rows={4}
        placeholder="e.g., gentle ocean waves at sunset, warm golden light, seamless loop..."
        className="w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        disabled={status === "generating"}
      />

      {/* Generate button */}
      <button
        onClick={handleGenerate}
        disabled={!canGenerate}
        className="flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {status === "generating" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Generating...
          </>
        ) : (
          <>
            <Wand2 className="h-4 w-4" />
            Generate Loop Video
          </>
        )}
      </button>

      {/* Result area */}
      {status === "generating" && (
        <div className="space-y-3 rounded-2xl border border-border/50 bg-card p-6">
          <div className="aspect-[9/16] max-h-[400px] w-full animate-pulse rounded-xl bg-muted" />
          <div className="h-4 w-2/3 animate-pulse rounded bg-muted" />
          <div className="h-4 w-1/2 animate-pulse rounded bg-muted" />
        </div>
      )}

      {status === "success" && videoUrl && (
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
            <a
              href={videoUrl}
              download
              className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <Download className="h-4 w-4" />
              Download MP4
            </a>
          </div>
        </div>
      )}

      {status === "error" && (
        <div className="flex items-center gap-3 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
          <AlertCircle className="h-5 w-5 shrink-0" />
          {errorMsg || "Something went wrong. Please try again."}
        </div>
      )}
    </div>
  );
}
