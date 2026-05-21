"use client";

import Link from "next/link";
import { ArrowRight, Play, Download } from "lucide-react";

interface Sample {
  id: string;
  title: string;
  description: string;
  prompt: string;
  video: string;
  thumbnail: string;
  category: string;
}

interface VideoCardProps {
  sample: Sample;
}

export default function VideoCard({ sample }: VideoCardProps) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-border/50 bg-card transition-all hover:border-border hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-500/5">
      {/* Video / Thumbnail */}
      <div className="relative aspect-[9/16] bg-muted overflow-hidden">
        <video
          src={sample.video}
          poster={sample.thumbnail}
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 h-full w-full object-cover opacity-80 transition-opacity group-hover:opacity-100"
          onMouseEnter={(e) => {
            const v = e.currentTarget;
            v.play().catch(() => {});
          }}
          onMouseLeave={(e) => {
            const v = e.currentTarget;
            v.pause();
            v.currentTime = 0;
          }}
        />
        {/* Play overlay */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-background/70 backdrop-blur-sm transition-transform group-hover:scale-110">
            <Play className="h-6 w-6 text-foreground ml-0.5" fill="currentColor" />
          </div>
        </div>
        {/* Category badge */}
        <span className="absolute left-3 top-3 rounded-full bg-background/80 px-2.5 py-1 text-xs font-medium backdrop-blur-sm">
          {sample.category}
        </span>
      </div>

      {/* Info */}
      <div className="p-4">
        <h3 className="font-semibold">{sample.title}</h3>
        <p className="text-sm text-muted-foreground">{sample.description}</p>

        {/* Actions */}
        <div className="mt-3 flex items-center gap-3">
          <Link
            href={`/text-to-loop?prompt=${encodeURIComponent(sample.prompt)}`}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary/80"
          >
            Use this prompt
            <ArrowRight className="h-4 w-4" />
          </Link>
          <a
            href={sample.video}
            download={`${sample.id}.mp4`}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            title="Download MP4"
          >
            <Download className="h-4 w-4" />
            Download
          </a>
        </div>
      </div>
    </div>
  );
}
