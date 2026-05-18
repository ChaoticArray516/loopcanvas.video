import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import GalleryJsonLd from "@/components/seo/GalleryJsonLd";

export const metadata = {
  title: "Gallery",
  description:
    "Browse AI-generated seamless loop video samples. Get inspired for your Spotify Canvas, website backgrounds, and social media content.",
  alternates: {
    canonical: "/gallery",
  },
};

const samples = [
  {
    title: "Ocean Waves",
    description: "Gentle ocean waves at sunset",
    prompt: "gentle ocean waves at sunset, seamless loop, golden hour lighting",
    thumbnail: "/samples/nature-ocean-1-thumb.jpg",
    video: "/samples/nature-ocean-1.mp4",
    category: "Nature",
  },
  {
    title: "Forest Light",
    description: "Sunlight through forest canopy",
    prompt: "sunlight filtering through forest canopy, seamless loop, peaceful",
    thumbnail: "/samples/nature-forest-1-thumb.jpg",
    video: "/samples/nature-forest-1.mp4",
    category: "Nature",
  },
  {
    title: "Particle Dance",
    description: "Abstract particle animation",
    prompt: "abstract particles dancing in dark space, seamless loop, neon colors",
    thumbnail: "/samples/abstract-particle-1-thumb.jpg",
    video: "/samples/abstract-particle-1.mp4",
    category: "Abstract",
  },
  {
    title: "Neon City",
    description: "Cyberpunk cityscape glow",
    prompt: "neon-lit city street at night, rain reflections, seamless loop",
    thumbnail: "/samples/nature-ocean-1-thumb.jpg",
    video: "/samples/nature-ocean-1.mp4",
    category: "Urban",
  },
  {
    title: "Floating Bubbles",
    description: "Soft bubbles rising slowly",
    prompt: "soft bubbles rising through water, seamless loop, pastel colors",
    thumbnail: "/samples/nature-forest-1-thumb.jpg",
    video: "/samples/nature-forest-1.mp4",
    category: "Abstract",
  },
  {
    title: "Mountain Mist",
    description: "Mist rolling over mountains",
    prompt: "mist rolling over mountain peaks at dawn, seamless loop, serene",
    thumbnail: "/samples/abstract-particle-1-thumb.jpg",
    video: "/samples/abstract-particle-1.mp4",
    category: "Nature",
  },
];

export default function GalleryPage() {
  return (
    <>
      <GalleryJsonLd />

      <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
              Gallery
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
              Explore AI-generated seamless loop videos. Click any sample to use
              its prompt as your starting point.
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {samples.map((sample) => (
              <div
                key={sample.title}
                className="group overflow-hidden rounded-2xl border border-border/50 bg-card transition-colors hover:border-border"
              >
                {/* Thumbnail / Video Placeholder */}
                <div className="relative aspect-[9/16] bg-muted">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-background/80 backdrop-blur-sm">
                      <Play className="h-6 w-6 text-foreground" />
                    </div>
                  </div>
                  <span className="absolute left-3 top-3 rounded-full bg-background/80 px-2.5 py-1 text-xs font-medium backdrop-blur-sm">
                    {sample.category}
                  </span>
                </div>

                {/* Info */}
                <div className="p-4">
                  <h3 className="font-semibold">{sample.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {sample.description}
                  </p>
                  <Link
                    href={`/text-to-loop?prompt=${encodeURIComponent(sample.prompt)}`}
                    className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary/80"
                  >
                    Use this prompt
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
