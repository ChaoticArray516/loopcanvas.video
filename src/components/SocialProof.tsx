"use client";

import { Star } from "lucide-react";
import AnimatedCounter from "./AnimatedCounter";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

// Stats hidden until we have real user data
const stats: Array<{ target: number; suffix: string; label: string; prefix?: string }> = [];

// Testimonials hidden until we have real user feedback
const testimonials: Array<{ name: string; role: string; content: string; avatar: string }> = [];

const useCases = ["Spotify Canvas", "Website Backgrounds", "Instagram Reels", "TikTok", "YouTube Shorts", "Digital Art"];

export default function SocialProof() {
  const ref1 = useScrollAnimation();
  const ref2 = useScrollAnimation();

  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Stats */}
        <div ref={ref1} className="animate-ready grid gap-8 sm:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="glass-card rounded-2xl p-8 text-center">
              <div className="font-heading text-4xl font-extrabold text-foreground">
                <AnimatedCounter
                  target={stat.target}
                  suffix={stat.suffix}
                  prefix={stat.prefix}
                  duration={2500}
                />
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Use Case Tags */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
          {useCases.map((uc) => (
            <span
              key={uc}
              className="rounded-full bg-white/[0.06] px-4 py-1.5 text-xs font-medium uppercase tracking-wide text-muted-foreground border border-white/10"
            >
              {uc}
            </span>
          ))}
        </div>

        {/* Testimonials */}
        <div ref={ref2} className="animate-ready mt-16 grid gap-6 sm:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="glass-card rounded-2xl p-6">
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                &ldquo;{t.content}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-pink-500 text-xs font-bold text-white">
                  {t.avatar}
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
