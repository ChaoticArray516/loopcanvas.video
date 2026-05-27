"use client";

import { useState, useEffect, useCallback } from "react";
import { Upload, Download, AlertCircle, RotateCcw, X, ImageIcon } from "lucide-react";
import { useVideoGeneration } from "@/hooks/useVideoGeneration";
import { createClient } from "@supabase/supabase-js";

const ACCEPTED_TYPES = [
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/heic",
];
const MAX_SIZE_MB = 20;
const MAX_SIZE_BYTES = MAX_SIZE_MB * 1024 * 1024;

function getSupabase() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key) return null;
  return createClient(url, key);
}

function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      resolve(result);
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

export default function PhotoUpload() {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
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

  useEffect(() => {
    const sb = getSupabase();
    if (!sb) return;
    sb.auth.getSession().then(({ data: { session } }) => {
      if (session?.access_token) {
        setAuthToken(session.access_token);
      }
    });
  }, []);

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
      reset();
      return;
    }
    setFile(selected);
    setPreview(URL.createObjectURL(selected));
    reset();
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
    reset();
  }

  async function handleGenerate() {
    if (!file || isLoading) return;

    const imageBase64 = await fileToBase64(file);
    await generate(
      {
        mode: "image",
        prompt: "Transform this image into a seamless looping video",
        imageBase64,
        aspectRatio: "9:16",
      },
      authToken
    );
  }

  const canGenerate = file !== null && !isLoading;

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
          {isLoading ? (
            <>
              <div className="h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground/30 border-t-primary-foreground" />
              {statusLabel[status]}
            </>
          ) : (
            <>
              <Upload className="h-4 w-4" />
              Generate Loop Video
            </>
          )}
        </button>
      )}

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

      {/* Result — success */}
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
                onClick={clearFile}
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
