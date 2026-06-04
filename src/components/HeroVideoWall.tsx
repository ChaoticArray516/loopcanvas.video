"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";

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
    src: "/samples/nature-sunset-1.mp4",
    poster: "/samples/nature-sunset-1-thumb.jpg",
    label: "Sunset",
  },
];

/* Fixed card dimensions to prevent CLS */
const CARD_W = 140;
const CARD_H = 249; /* 140 * 9/16 */

function VideoCard({ item }: { item: VideoItem }) {
  const [isInView, setIsInView] = useState(false);
  const [hasError, setHasError] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.03] shadow-2xl shadow-brand-500/10"
      style={{ width: CARD_W, height: CARD_H }}
    >
      {isInView && !hasError ? (
        <video
          src={item.src}
          poster={item.poster}
          width={CARD_W}
          height={CARD_H}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="h-full w-full object-cover"
          onError={() => setHasError(true)}
        />
      ) : (
        <Image
          src={item.poster}
          alt={item.label}
          width={CARD_W}
          height={CARD_H}
          className="h-full w-full object-cover"
          loading="eager"
          priority
        />
      )}
      {/* Gradient overlay at bottom */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#0A0A0F]/80 to-transparent" />
    </div>
  );
}

export default function HeroVideoWall() {
  return (
    <div className="relative hidden lg:block" style={{ minHeight: CARD_H + 48 }}>
      <div className="relative flex gap-4">
        {/* Left column — offset down */}
        <div className="mt-12 shrink-0" style={{ width: CARD_W }}>
          <VideoCard item={VIDEOS[0]} />
        </div>
        {/* Middle column */}
        <div className="shrink-0" style={{ width: CARD_W }}>
          <VideoCard item={VIDEOS[1]} />
        </div>
        {/* Right column — offset down */}
        <div className="mt-8 shrink-0" style={{ width: CARD_W }}>
          <VideoCard item={VIDEOS[2]} />
        </div>
      </div>

      {/* Ambient glow behind videos */}
      <div className="absolute -inset-10 -z-10 rounded-full bg-brand-500/10 blur-3xl" />
    </div>
  );
}
