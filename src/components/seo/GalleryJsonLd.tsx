import { SITE_URL, SITE_NAME } from "@/lib/site-config";

interface GalleryItem {
  title: string;
  description: string;
  videoUrl: string;
  thumbnailUrl: string;
  uploadDate: string;
}

interface Props {
  items?: GalleryItem[];
}

export default function GalleryJsonLd({ items }: Props) {
  const pageUrl = `${SITE_URL}/gallery`;

  const defaultItems: GalleryItem[] = [
    // Nature (6)
    { title: "Ocean Waves Loop", description: "Gentle ocean waves seamlessly looping for Spotify Canvas", videoUrl: `${SITE_URL}/samples/nature-ocean-1.mp4`, thumbnailUrl: `${SITE_URL}/samples/nature-ocean-1-thumb.jpg`, uploadDate: "2026-05-18" },
    { title: "Forest Light Loop", description: "Sunlight filtering through forest canopy in a seamless loop", videoUrl: `${SITE_URL}/samples/nature-forest-1.mp4`, thumbnailUrl: `${SITE_URL}/samples/nature-forest-1-thumb.jpg`, uploadDate: "2026-05-18" },
    { title: "Mountain Mist Loop", description: "Mist rolling over mountain peaks in a seamless loop", videoUrl: `${SITE_URL}/samples/nature-mountain-1.mp4`, thumbnailUrl: `${SITE_URL}/samples/nature-mountain-1-thumb.jpg`, uploadDate: "2026-05-18" },
    { title: "Northern Lights Loop", description: "Aurora borealis dancing over snowy peaks", videoUrl: `${SITE_URL}/samples/nature-aurora-1.mp4`, thumbnailUrl: `${SITE_URL}/samples/nature-aurora-1-thumb.jpg`, uploadDate: "2026-05-18" },
    { title: "Tropical Waterfall Loop", description: "Waterfall cascading into a crystal pool", videoUrl: `${SITE_URL}/samples/nature-waterfall-1.mp4`, thumbnailUrl: `${SITE_URL}/samples/nature-waterfall-1-thumb.jpg`, uploadDate: "2026-05-18" },
    { title: "Desert Dunes Loop", description: "Golden sand dunes with wind ripple patterns", videoUrl: `${SITE_URL}/samples/nature-desert-1.mp4`, thumbnailUrl: `${SITE_URL}/samples/nature-desert-1-thumb.jpg`, uploadDate: "2026-05-18" },
    // Abstract (6)
    { title: "Particle Dance Loop", description: "Abstract particles dancing in dark space", videoUrl: `${SITE_URL}/samples/abstract-particle-1.mp4`, thumbnailUrl: `${SITE_URL}/samples/abstract-particle-1-thumb.jpg`, uploadDate: "2026-05-18" },
    { title: "Liquid Metal Loop", description: "Colorful liquid metal flowing and morphing", videoUrl: `${SITE_URL}/samples/abstract-liquid-1.mp4`, thumbnailUrl: `${SITE_URL}/samples/abstract-liquid-1-thumb.jpg`, uploadDate: "2026-05-18" },
    { title: "Geometric Flow Loop", description: "Neon geometric shapes transforming", videoUrl: `${SITE_URL}/samples/abstract-geometric-1.mp4`, thumbnailUrl: `${SITE_URL}/samples/abstract-geometric-1-thumb.jpg`, uploadDate: "2026-05-18" },
    { title: "Neon Pulse Loop", description: "Glowing neon beams weaving through darkness", videoUrl: `${SITE_URL}/samples/abstract-neon-1.mp4`, thumbnailUrl: `${SITE_URL}/samples/abstract-neon-1-thumb.jpg`, uploadDate: "2026-05-18" },
    { title: "Color Smoke Loop", description: "Rainbow smoke clouds swirling", videoUrl: `${SITE_URL}/samples/abstract-smoke-1.mp4`, thumbnailUrl: `${SITE_URL}/samples/abstract-smoke-1-thumb.jpg`, uploadDate: "2026-05-18" },
    { title: "Fractal Zoom Loop", description: "Psychedelic fractals infinitely morphing", videoUrl: `${SITE_URL}/samples/abstract-fractal-1.mp4`, thumbnailUrl: `${SITE_URL}/samples/abstract-fractal-1-thumb.jpg`, uploadDate: "2026-05-18" },
  ];

  const galleryItems = items ?? defaultItems;

  const videoObjects = galleryItems.map((item, index) => ({
    "@type": "VideoObject",
    "@id": `${pageUrl}/#video-${index + 1}`,
    name: item.title,
    description: item.description,
    thumbnailUrl: item.thumbnailUrl,
    contentUrl: item.videoUrl,
    uploadDate: item.uploadDate,
    duration: "PT4S",
    encodingFormat: "video/mp4",
    author: {
      "@id": `${SITE_URL}/#organization`,
    },
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
  }));

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${pageUrl}/#collection`,
        name: `Gallery — ${SITE_NAME}`,
        url: pageUrl,
        description:
          "Browse AI-generated seamless loop video samples. Get inspired for your Spotify Canvas, website backgrounds, and social media content.",
        hasPart: videoObjects,
      },
      ...videoObjects,
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}/#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: SITE_URL,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Gallery",
            item: pageUrl,
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
