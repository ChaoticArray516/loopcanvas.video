import GalleryJsonLd from "@/components/seo/GalleryJsonLd";
import VideoCard from "./VideoCard";

export const revalidate = 3600;

export const metadata = {
  title: "Gallery",
  description:
    "Browse AI-generated seamless loop video samples. Get inspired for your Spotify Canvas, website backgrounds, and social media content.",
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
    description: "Gentle ocean waves at sunset",
    prompt: "gentle ocean waves at sunset, seamless loop, golden hour lighting",
    video: "/samples/nature-ocean-1.mp4",
    thumbnail: "/samples/nature-ocean-1-thumb.jpg",
    category: "Nature",
  },
  {
    id: "nature-forest-1",
    title: "Forest Light",
    description: "Sunlight through forest canopy",
    prompt: "sunlight filtering through forest canopy, seamless loop, peaceful",
    video: "/samples/nature-forest-1.mp4",
    thumbnail: "/samples/nature-forest-1-thumb.jpg",
    category: "Nature",
  },
  {
    id: "nature-mountain-1",
    title: "Mountain Mist",
    description: "Mist rolling over mountains",
    prompt: "mist rolling over mountain peaks at dawn, seamless loop, serene",
    video: "/samples/nature-mountain-1.mp4",
    thumbnail: "/samples/nature-mountain-1-thumb.jpg",
    category: "Nature",
  },
  {
    id: "nature-aurora-1",
    title: "Northern Lights",
    description: "Aurora borealis over snowy peaks",
    prompt: "northern lights dancing across starry sky, seamless loop, vibrant",
    video: "/samples/nature-aurora-1.mp4",
    thumbnail: "/samples/nature-aurora-1-thumb.jpg",
    category: "Nature",
  },
  {
    id: "nature-waterfall-1",
    title: "Tropical Waterfall",
    description: "Waterfall into crystal pool",
    prompt: "tropical waterfall cascading, seamless loop, lush vegetation",
    video: "/samples/nature-waterfall-1.mp4",
    thumbnail: "/samples/nature-waterfall-1-thumb.jpg",
    category: "Nature",
  },
  {
    id: "nature-desert-1",
    title: "Desert Dunes",
    description: "Golden sand dunes at sunset",
    prompt: "golden sand dunes wind ripples, seamless loop, warm sunset",
    video: "/samples/nature-desert-1.mp4",
    thumbnail: "/samples/nature-desert-1-thumb.jpg",
    category: "Nature",
  },

  // ── Abstract (6) ────────────────────────────────────────
  {
    id: "abstract-particle-1",
    title: "Particle Dance",
    description: "Abstract particles in dark space",
    prompt: "abstract particles dancing in dark space, seamless loop, neon",
    video: "/samples/abstract-particle-1.mp4",
    thumbnail: "/samples/abstract-particle-1-thumb.jpg",
    category: "Abstract",
  },
  {
    id: "abstract-liquid-1",
    title: "Liquid Metal",
    description: "Colorful liquid metal flowing",
    prompt: "colorful liquid metal flowing, seamless loop, iridescent",
    video: "/samples/abstract-liquid-1.mp4",
    thumbnail: "/samples/abstract-liquid-1-thumb.jpg",
    category: "Abstract",
  },
  {
    id: "abstract-geometric-1",
    title: "Geometric Flow",
    description: "Neon geometric shapes transforming",
    prompt: "neon geometric shapes transforming, seamless loop, futuristic",
    video: "/samples/abstract-geometric-1.mp4",
    thumbnail: "/samples/abstract-geometric-1-thumb.jpg",
    category: "Abstract",
  },
  {
    id: "abstract-neon-1",
    title: "Neon Pulse",
    description: "Glowing neon beams weaving",
    prompt: "glowing neon beams weaving, seamless loop, cyberpunk",
    video: "/samples/abstract-neon-1.mp4",
    thumbnail: "/samples/abstract-neon-1-thumb.jpg",
    category: "Abstract",
  },
  {
    id: "abstract-smoke-1",
    title: "Color Smoke",
    description: "Rainbow smoke clouds swirling",
    prompt: "rainbow smoke clouds swirling, seamless loop, dreamy",
    video: "/samples/abstract-smoke-1.mp4",
    thumbnail: "/samples/abstract-smoke-1-thumb.jpg",
    category: "Abstract",
  },
  {
    id: "abstract-fractal-1",
    title: "Fractal Zoom",
    description: "Psychedelic fractals morphing",
    prompt: "psychedelic fractals morphing, seamless loop, mesmerizing",
    video: "/samples/abstract-fractal-1.mp4",
    thumbnail: "/samples/abstract-fractal-1-thumb.jpg",
    category: "Abstract",
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
