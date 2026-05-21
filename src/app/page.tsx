import dynamic from "next/dynamic";
import Link from "next/link";
import { ArrowRight, Sparkles, Image, Wand2, Zap, Shield, Star } from "lucide-react";
import HomeJsonLd from "@/components/seo/HomeJsonLd";
import HeroVideoWall from "@/components/HeroVideoWall";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LoopCanvas AI - Free AI Loop Video Generator | Create Perfect Seamless Loops",
  description:
    "Create mesmerizing seamless loop videos with AI. Turn text prompts or images into infinite looping videos. Perfect for Spotify Canvas, website backgrounds, and social media. Free to try.",
  alternates: { canonical: "/" },
};

export const revalidate = 3600;

const FeaturesSection = dynamic(() => import("./FeaturesSection"), {
  loading: () => <FeaturesSectionSkeleton />,
});

const HowItWorks = dynamic(() => import("./HowItWorks"), {
  loading: () => <HowItWorksSkeleton />,
});

const SocialProof = dynamic(() => import("@/components/SocialProof"), {
  loading: () => <div className="h-80 animate-pulse bg-muted/20" />,
});

const FAQSection = dynamic(() => import("@/components/FAQSection"), {
  loading: () => <div className="h-96 animate-pulse bg-muted/20" />,
});

function FeaturesSectionSkeleton() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto h-9 w-96 max-w-full animate-pulse rounded-lg bg-muted" />
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="rounded-2xl border border-border/50 bg-card p-6">
              <div className="h-8 w-8 animate-pulse rounded-lg bg-muted" />
              <div className="mt-4 h-5 w-32 animate-pulse rounded bg-muted" />
              <div className="mt-2 h-12 animate-pulse rounded bg-muted" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorksSkeleton() {
  return (
    <section className="bg-muted/20 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="mx-auto h-9 w-48 animate-pulse rounded-lg bg-muted" />
        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="text-center">
              <div className="mx-auto h-12 w-12 animate-pulse rounded-full bg-muted" />
              <div className="mx-auto mt-4 h-5 w-24 animate-pulse rounded bg-muted" />
              <div className="mx-auto mt-2 h-10 w-40 animate-pulse rounded bg-muted" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <HomeJsonLd />

      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        {/* Gradient Glows */}
        <div className="hero-glow-primary" />
        <div className="hero-glow-accent" />

        <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center gap-12 lg:flex-row lg:items-center lg:justify-between">
          {/* Left: Text Content */}
          <div className="max-w-2xl text-center lg:text-left">
            <h1 className="font-heading text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Create Mesmerizing{" "}
              <span className="gradient-text">Loop Videos</span> with AI
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground lg:mx-0">
              Turn text prompts or photos into mesmerizing seamless loop videos.
              Perfect for Spotify Canvas, website backgrounds, and social media.
            </p>

            {/* Trust Badges */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground lg:justify-start">
              <span className="flex items-center gap-1.5">
                <Shield className="h-4 w-4 text-primary" /> No credit card required
              </span>
              <span className="flex items-center gap-1.5">
                <Zap className="h-4 w-4 text-primary" /> 5 free generations daily
              </span>
              <span className="flex items-center gap-1.5">
                <Sparkles className="h-4 w-4 text-primary" /> HD MP4 export
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
              <Link
                href="/text-to-loop"
                className="btn-primary inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-base font-medium"
              >
                <Wand2 className="h-5 w-5" />
                Try Text-to-Loop
              </Link>
              <Link
                href="/photo-to-loop"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-8 py-3.5 text-base font-medium text-foreground transition-colors hover:bg-white/5"
              >
                <Image className="h-5 w-5" />
                Upload Image
              </Link>
            </div>

            {/* Social Proof Micro */}
            <div className="mt-8 flex items-center justify-center gap-6 text-sm text-muted-foreground lg:justify-start">
              <span className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                4.9/5
              </span>
              <span>10,000+ creators</span>
              <span>50,000+ loops generated</span>
            </div>
          </div>

          {/* Right: Video Wall */}
          <HeroVideoWall />
        </div>
      </section>

      <FeaturesSection />
      <HowItWorks />
      <SocialProof />
      <FAQSection />

      {/* Bottom CTA */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl rounded-3xl bg-gradient-to-br from-brand-600 to-brand-800 px-8 py-16 text-center">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-white">
            Ready to create your first loop?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-white/80">
            Join thousands of artists and creators making stunning loop videos with AI.
          </p>
          <Link
            href="/text-to-loop"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-base font-semibold text-brand-700 transition-colors hover:bg-white/90"
          >
            Start Creating Free
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
