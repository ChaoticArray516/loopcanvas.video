"use client";

import { useState, useEffect } from "react";

interface VideoItem {
  src: string;
  poster: string;
  label: string;
}

const VIDEOS: VideoItem[] = [
  {
    src: "/samples/nature-ocean-1.mp4",
    poster: "/samples/nature-ocean-1-thumb.jpg",
    label: "Ocean",
  },
  {
    src: "/samples/abstract-particle-1.mp4",
    poster: "/samples/abstract-particle-1-thumb.jpg",
    label: "Particles",
  },
  {
    src: "/samples/nature-aurora-1.mp4",
    poster: "/samples/nature-aurora-1-thumb.jpg",
    label: "Aurora",
  },
];

function VideoCard({ item }: { item: VideoItem }) {
  const [canPlay, setCanPlay] = useState(true);

  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.03] shadow-2xl shadow-brand-500/10">
      <div className="aspect-[9/16] w-full">
        {canPlay ? (
          <video
            src={item.src}
            poster={item.poster}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="h-full w-full object-cover"
            onError={() => setCanPlay(false)}
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-b from-brand-900/40 to-[#0A0A0F]">
            <div className="h-10 w-10 rounded-full border-2 border-brand-400/30" />
            <span className="text-xs text-muted-foreground">{item.label}</span>
          </div>
        )}
      </div>
      {/* Gradient overlay at bottom */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#0A0A0F]/80 to-transparent" />
    </div>
  );
}

export default function HeroVideoWall() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Delay load to prioritize LCP text content
    const timer = setTimeout(() => setIsVisible(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative hidden lg:block">
      <div className="relative flex gap-4">
        {/* Left column — offset down */}
        <div className="mt-12 w-[140px] shrink-0">
          {isVisible && <VideoCard item={VIDEOS[0]} />}
        </div>
        {/* Middle column */}
        <div className="w-[140px] shrink-0">
          {isVisible && <VideoCard item={VIDEOS[1]} />}
        </div>
        {/* Right column — offset down */}
        <div className="mt-8 w-[140px] shrink-0">
          {isVisible && <VideoCard item={VIDEOS[2]} />}
        </div>
      </div>

      {/* Ambient glow behind videos */}
      <div className="absolute -inset-10 -z-10 rounded-full bg-brand-500/10 blur-3xl" />
    </div>
  );
}
