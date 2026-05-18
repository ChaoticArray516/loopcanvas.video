"use client";

import { useState, useCallback } from "react";
import { Upload, Loader2, Download, AlertCircle, X, ImageIcon } from "lucide-react";

type Status = "idle" | "generating" | "success" | "error";

const ACCEPTED_TYPES = [
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/heic",
];
const MAX_SIZE_MB = 20;
const MAX_SIZE_BYTES = MAX_SIZE_MB * 1024 * 1024;

export default function PhotoUpload() {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState("");
  const [isDragging, setIsDragging] = useState(false);

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

  function validateFile(file: File): string | null {
    if (!ACCEPTED_TYPES.includes(file.type)) {
      return "Please upload JPG, PNG, WEBP, or HEIC images only.";
    }
    if (file.size > MAX_SIZE_BYTES) {
      return `File size must be under ${MAX_SIZE_MB}MB.`;
    }
    return null;
  }

  function handleFile(selected: File) {
    const err = validateFile(selected);
    if (err) {
      setErrorMsg(err);
      setStatus("error");
      return;
    }
    setFile(selected);
    setPreview(URL.createObjectURL(selected));
    setStatus("idle");
    setErrorMsg("");
    setVideoUrl(null);
  }

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const dropped = e.dataTransfer.files[0];
    if (dropped) handleFile(dropped);
  }, []);

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const selected = e.target.files?.[0];
    if (selected) handleFile(selected);
  }

  function clearFile() {
    setFile(null);
    setPreview(null);
    setVideoUrl(null);
    setStatus("idle");
    setErrorMsg("");
  }

  async function handleGenerate() {
    if (!file || status === "generating" || creditsStatus === "depleted") return;

    setStatus("generating");
    setVideoUrl(null);
    setErrorMsg("");

    // TODO: replace with real API call (Phase 4a)
    try {
      await new Promise((resolve) => setTimeout(resolve, 3000));
      setVideoUrl("/samples/nature-ocean-1.mp4");
      setStatus("success");
    } catch {
      setErrorMsg("Generation failed. Please try again.");
      setStatus("error");
    }
  }

  const canGenerate =
    file !== null && status !== "generating" && creditsStatus !== "depleted";

  return (
    <div className="mx-auto w-full max-w-2xl space-y-6">
      {/* Credits badge */}
      <div className="flex items-center justify-between">
        <label className="text-sm font-medium text-muted-foreground">
          Upload a photo to animate
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

      {/* Drop zone */}
      {!preview ? (
        <div
          onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
          onDragLeave={() => setIsDragging(false)}
          onDrop={handleDrop}
          className={`relative flex flex-col items-center justify-center rounded-2xl border-2 border-dashed p-12 transition-colors ${
            isDragging
              ? "border-primary bg-primary/5"
              : "border-border bg-muted/30 hover:bg-muted/50"
          }`}
        >
          <input
            type="file"
            accept="image/jpeg,image/png,image/webp,image/heic"
            onChange={handleInputChange}
            className="absolute inset-0 cursor-pointer opacity-0"
          />
          <ImageIcon className="h-10 w-10 text-muted-foreground" />
          <p className="mt-4 text-sm font-medium">
            Drag & drop an image, or click to browse
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            JPG, PNG, WEBP, HEIC — max {MAX_SIZE_MB}MB
          </p>
        </div>
      ) : (
        <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-card">
          <button
            onClick={clearFile}
            className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-background/80 backdrop-blur-sm transition-colors hover:bg-background"
          >
            <X className="h-4 w-4" />
          </button>
          <img
            src={preview}
            alt="Upload preview"
            className="max-h-[300px] w-full object-contain"
          />
          <div className="px-4 py-3 text-sm text-muted-foreground">
            {file?.name} — {(file!.size / 1024 / 1024).toFixed(2)} MB
          </div>
        </div>
      )}

      {/* Generate button */}
      {preview && (
        <button
          onClick={handleGenerate}
          disabled={!canGenerate}
          className="flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {status === "generating" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Generating loop...
            </>
          ) : (
            <>
              <Upload className="h-4 w-4" />
              Generate Loop Video
            </>
          )}
        </button>
      )}

      {/* Result area */}
      {status === "generating" && (
        <div className="space-y-3 rounded-2xl border border-border/50 bg-card p-6">
          <div className="aspect-[9/16] max-h-[400px] w-full animate-pulse rounded-xl bg-muted" />
          <div className="h-4 w-2/3 animate-pulse rounded bg-muted" />
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
