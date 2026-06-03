"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface Props {
  src: string;
  poster: string;
  width?: number;
  height?: number;
  className?: string;
}

export default function VideoHero({
  src,
  poster,
  width = 1920,
  height = 1080,
  className = "",
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden bg-muted ${className}`}
      style={{
        aspectRatio: `${width} / ${height}`,
        maxWidth: width,
      }}
    >
      {isVisible ? (
        <video
          src={src}
          poster={poster}
          width={width}
          height={height}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 h-full w-full object-cover"
        />
      ) : (
        <Image
          src={poster}
          alt="Video poster"
          fill
          sizes={`(max-width: ${width}px) 100vw, ${width}px`}
          className="object-cover"
          priority
        />
      )}
    </div>
  );
}
