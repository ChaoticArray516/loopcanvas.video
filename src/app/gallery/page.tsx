import GalleryJsonLd from "@/components/seo/GalleryJsonLd";
import Breadcrumb from "@/components/ui/breadcrumb";
import VideoCard from "./VideoCard";

export const revalidate = 3600;

export const metadata = {
  title: "Loop Video Gallery — AI Seamless Loop Examples | LoopCanvas",
  description:
    "Browse our gallery of AI-generated seamless loop videos. Examples for Spotify Canvas, website backgrounds, and social media. Get inspired.",
  alternates: {
    canonical: "/gallery",
  },
};

interface Sample {
  id: string;
  title: string;
  description: string;
  prompt: string;
  video: string;
  thumbnail: string;
  category: string;
}

const samples: Sample[] = [
  // ── Nature (6) ──────────────────────────────────────────
  {
    id: "nature-ocean-1",
    title: "Ocean Waves",
    description: "Gentle ocean waves lapping at golden hour beach",
    prompt: "gentle ocean waves at sunset, seamless loop, golden hour lighting",
    video: "/samples/nature-ocean-1.mp4",
    thumbnail: "/samples/nature-ocean-1-thumb.jpg",
    category: "Nature",
  },
  {
    id: "nature-forest-1",
    title: "Forest Light",
    description: "Sunlight filtering through dense green canopy",
    prompt: "sunlight filtering through forest canopy, seamless loop, peaceful",
    video: "/samples/nature-forest-1.mp4",
    thumbnail: "/samples/nature-forest-1-thumb.jpg",
    category: "Nature",
  },
  {
    id: "nature-sunset-1",
    title: "Lake Sunset",
    description: "Dramatic sunset over calm lake with mountains",
    prompt: "dramatic sunset over calm lake, mountain silhouettes, seamless loop",
    video: "/samples/nature-sunset-1.mp4",
    thumbnail: "/samples/nature-sunset-1-thumb.jpg",
    category: "Nature",
  },
  {
    id: "nature-rain-1",
    title: "Rainy Window",
    description: "Gentle rain on window with city bokeh",
    prompt: "rain on window with city lights bokeh, cozy indoor, seamless loop",
    video: "/samples/nature-rain-1.mp4",
    thumbnail: "/samples/nature-rain-1-thumb.jpg",
    category: "Nature",
  },
  {
    id: "nature-snow-1",
    title: "Winter Snow",
    description: "Soft snowflakes in quiet winter forest",
    prompt: "snowflakes falling in winter forest, peaceful white landscape, seamless loop",
    video: "/samples/nature-snow-1.mp4",
    thumbnail: "/samples/nature-snow-1-thumb.jpg",
    category: "Nature",
  },
  {
    id: "nature-flowers-1",
    title: "Wildflower Meadow",
    description: "Colorful wildflowers swaying with butterflies",
    prompt: "wildflowers swaying in meadow, butterflies, spring sunlight, seamless loop",
    video: "/samples/nature-flowers-1.mp4",
    thumbnail: "/samples/nature-flowers-1-thumb.jpg",
    category: "Nature",
  },

  // ── Abstract (6) ────────────────────────────────────────
  {
    id: "abstract-particle-1",
    title: "Particle Dance",
    description: "Glowing particles in abstract spiral patterns",
    prompt: "abstract particles dancing in dark space, seamless loop, neon",
    video: "/samples/abstract-particle-1.mp4",
    thumbnail: "/samples/abstract-particle-1-thumb.jpg",
    category: "Abstract",
  },
  {
    id: "abstract-neon-1",
    title: "Neon Pulse",
    description: "Vibrant neon geometric shapes morphing",
    prompt: "neon geometric shapes transforming, seamless loop, cyberpunk",
    video: "/samples/abstract-neon-1.mp4",
    thumbnail: "/samples/abstract-neon-1-thumb.jpg",
    category: "Abstract",
  },
  {
    id: "abstract-ink-1",
    title: "Ink Flow",
    description: "Colorful ink drops diffusing in water",
    prompt: "ink drops diffusing in water, organic flowing patterns, seamless loop",
    video: "/samples/abstract-ink-1.mp4",
    thumbnail: "/samples/abstract-ink-1-thumb.jpg",
    category: "Abstract",
  },
  {
    id: "abstract-geometric-1",
    title: "Geometric Flow",
    description: "Minimalist geometric patterns tessellating",
    prompt: "geometric patterns rotating and tessellating, seamless loop, futuristic",
    video: "/samples/abstract-geometric-1.mp4",
    thumbnail: "/samples/abstract-geometric-1-thumb.jpg",
    category: "Abstract",
  },
  {
    id: "abstract-fluid-1",
    title: "Liquid Metal",
    description: "Smooth liquid metal with rainbow reflections",
    prompt: "liquid metal surface with iridescent reflections, seamless loop, futuristic",
    video: "/samples/abstract-fluid-1.mp4",
    thumbnail: "/samples/abstract-fluid-1-thumb.jpg",
    category: "Abstract",
  },
  {
    id: "abstract-crystal-1",
    title: "Crystal Prism",
    description: "Faceted crystal prisms refracting rainbow light",
    prompt: "crystal prisms refracting rainbow light, seamless loop, magical",
    video: "/samples/abstract-crystal-1.mp4",
    thumbnail: "/samples/abstract-crystal-1-thumb.jpg",
    category: "Abstract",
  },
];

export default function GalleryPage() {
  return (
    <>
      <GalleryJsonLd />

      <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Gallery" }]} />

          <div className="text-center">
            <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
              Gallery
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
              Explore AI-generated seamless loop videos. Download any sample or
              use its prompt as your starting point.
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {samples.map((sample) => (
              <VideoCard key={sample.id} sample={sample} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
