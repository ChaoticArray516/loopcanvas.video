import { SITE_URL, SITE_NAME, SITE_DESCRIPTION } from "@/lib/site-config";

interface Props {
  demoVideoUrl?: string;
  demoThumbnailUrl?: string;
}

export default function SpotifyCanvasJsonLd({
  demoVideoUrl = `${SITE_URL}/samples/spotify-canvas-demo.mp4`,
  demoThumbnailUrl = `${SITE_URL}/samples/spotify-canvas-demo-thumb.jpg`,
}: Props) {
  const pageUrl = `${SITE_URL}/spotify-canvas-maker`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        "@id": `${pageUrl}/#webapp`,
        name: `${SITE_NAME} — Spotify Canvas Maker`,
        url: pageUrl,
        applicationCategory: "MultimediaApplication",
        operatingSystem: "Any",
        browserRequirements: "Requires JavaScript. Requires HTML5.",
        description:
          "Create stunning Spotify Canvas videos with AI. Turn text prompts or images into seamless 3-8 second looping videos optimized for Spotify artist profiles.",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
        featureList: [
          "Spotify Canvas format optimization (9:16, 3-8s loop)",
          "Text-to-Canvas generation",
          "Photo-to-Canvas generation",
          "HD export with seamless looping",
          "No watermark on paid plans",
        ],
        screenshot: {
          "@type": "ImageObject",
          url: demoThumbnailUrl,
          width: 1080,
          height: 1920,
        },
      },
      {
        "@type": "VideoObject",
        "@id": `${pageUrl}/#demo-video`,
        name: "Spotify Canvas Demo — Ocean Waves Loop",
        description:
          "Example of a seamless looping Spotify Canvas video created with LoopCanvas AI",
        thumbnailUrl: demoThumbnailUrl,
        contentUrl: demoVideoUrl,
        uploadDate: "2026-05-18",
        duration: "PT4S",
        encodingFormat: "video/mp4",
        width: 1080,
        height: 1920,
        author: {
          "@id": `${SITE_URL}/#organization`,
        },
        publisher: {
          "@id": `${SITE_URL}/#organization`,
        },
      },
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
            name: "Spotify Canvas Maker",
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
