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
    {
      title: "Ocean Waves Loop",
      description: "Gentle ocean waves seamlessly looping for Spotify Canvas",
      videoUrl: `${SITE_URL}/samples/nature-ocean-1.mp4`,
      thumbnailUrl: `${SITE_URL}/samples/nature-ocean-1-thumb.jpg`,
      uploadDate: "2026-05-18",
    },
    {
      title: "Forest Light Loop",
      description: "Sunlight filtering through forest canopy in a seamless loop",
      videoUrl: `${SITE_URL}/samples/nature-forest-1.mp4`,
      thumbnailUrl: `${SITE_URL}/samples/nature-forest-1-thumb.jpg`,
      uploadDate: "2026-05-18",
    },
    {
      title: "Particle Dance Loop",
      description: "Abstract particle animation in infinite seamless loop",
      videoUrl: `${SITE_URL}/samples/abstract-particle-1.mp4`,
      thumbnailUrl: `${SITE_URL}/samples/abstract-particle-1-thumb.jpg`,
      uploadDate: "2026-05-18",
    },
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
