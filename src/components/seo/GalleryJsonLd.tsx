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
    { title: "Wildflower Meadow Loop", description: "Colorful wildflowers swaying with butterflies", videoUrl: `${SITE_URL}/samples/nature-flowers-1.mp4`, thumbnailUrl: `${SITE_URL}/samples/nature-flowers-1-thumb.jpg`, uploadDate: "2026-05-18" },
    { title: "Winter Snow Loop", description: "Soft snowflakes in a quiet winter forest", videoUrl: `${SITE_URL}/samples/nature-snow-1.mp4`, thumbnailUrl: `${SITE_URL}/samples/nature-snow-1-thumb.jpg`, uploadDate: "2026-05-18" },
    { title: "Rainy Window Loop", description: "Gentle rain on window with city bokeh", videoUrl: `${SITE_URL}/samples/nature-rain-1.mp4`, thumbnailUrl: `${SITE_URL}/samples/nature-rain-1-thumb.jpg`, uploadDate: "2026-05-18" },
    { title: "Forest Light Loop", description: "Sunlight filtering through dense green canopy", videoUrl: `${SITE_URL}/samples/nature-forest-1.mp4`, thumbnailUrl: `${SITE_URL}/samples/nature-forest-1-thumb.jpg`, uploadDate: "2026-05-18" },
    // Abstract (6)
    { title: "Particle Dance Loop", description: "Abstract particles dancing in dark space", videoUrl: `${SITE_URL}/samples/abstract-particle-1.mp4`, thumbnailUrl: `${SITE_URL}/samples/abstract-particle-1-thumb.jpg`, uploadDate: "2026-05-18" },
    { title: "Liquid Metal Loop", description: "Colorful liquid metal flowing and morphing", videoUrl: `${SITE_URL}/samples/abstract-fluid-1.mp4`, thumbnailUrl: `${SITE_URL}/samples/abstract-fluid-1-thumb.jpg`, uploadDate: "2026-05-18" },
    { title: "Geometric Flow Loop", description: "Neon geometric shapes transforming", videoUrl: `${SITE_URL}/samples/abstract-geometric-1.mp4`, thumbnailUrl: `${SITE_URL}/samples/abstract-geometric-1-thumb.jpg`, uploadDate: "2026-05-18" },
    { title: "Neon Pulse Loop", description: "Glowing neon beams weaving through darkness", videoUrl: `${SITE_URL}/samples/abstract-neon-1.mp4`, thumbnailUrl: `${SITE_URL}/samples/abstract-neon-1-thumb.jpg`, uploadDate: "2026-05-18" },
    { title: "Ink Flow Loop", description: "Colorful ink drops diffusing in water", videoUrl: `${SITE_URL}/samples/abstract-ink-1.mp4`, thumbnailUrl: `${SITE_URL}/samples/abstract-ink-1-thumb.jpg`, uploadDate: "2026-05-18" },
    { title: "Crystal Prism Loop", description: "Faceted crystal prisms refracting rainbow light", videoUrl: `${SITE_URL}/samples/abstract-crystal-1.mp4`, thumbnailUrl: `${SITE_URL}/samples/abstract-crystal-1-thumb.jpg`, uploadDate: "2026-05-18" },
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
