import { SITE_URL, SITE_NAME } from "@/lib/site-config";

interface HowToStepItem {
  name: string;
  text: string;
  url?: string;
  imageUrl?: string;
}

interface Props {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  authorName?: string;
  imageUrl?: string;
  steps?: HowToStepItem[];
  videoUrl?: string;
  videoThumbnailUrl?: string;
  totalTime?: string;
}

export default function HowToArticleJsonLd({
  title,
  description,
  url,
  datePublished,
  dateModified,
  authorName = "LoopCanvas Team",
  imageUrl,
  steps,
  videoUrl,
  videoThumbnailUrl,
  totalTime = "PT5M",
}: Props) {
  const articleImage = imageUrl ?? `${SITE_URL}/og-image.jpg`;
  const modifiedDate = dateModified ?? datePublished;

  const defaultSteps: HowToStepItem[] = [
    {
      name: "Choose your generation mode",
      text: "Navigate to the text-to-loop page or photo-to-loop page. For custom scenes from imagination, use text-to-loop. For transforming existing images, use photo-to-loop.",
      url: `${SITE_URL}/text-to-loop`,
    },
    {
      name: "Enter your prompt or upload an image",
      text: "For text-to-loop, describe the scene in detail (e.g., 'gentle ocean waves at sunset, seamless loop, 4 seconds'). For photo-to-loop, drag and drop or select an image file (JPG, PNG, WEBP, HEIC, max 20MB).",
    },
    {
      name: "Generate your loop video",
      text: "Click the Generate button. The AI will process your input and create a seamless looping video. This typically takes 10-30 seconds depending on complexity and server load.",
    },
    {
      name: "Preview and download",
      text: "Once generation is complete, preview your loop video to ensure it meets your needs. Click Download MP4 to save the video file to your device. The video is optimized for Spotify Canvas (9:16, 3-8s loop) by default.",
    },
  ];

  const howToSteps = steps ?? defaultSteps;

  const howToStepObjects = howToSteps.map((step, index) => ({
    "@type": "HowToStep",
    position: index + 1,
    name: step.name,
    text: step.text,
    ...(step.url && { url: step.url }),
    ...(step.imageUrl && {
      image: {
        "@type": "ImageObject",
        url: step.imageUrl,
      },
    }),
  }));

  const graphItems: Record<string, unknown>[] = [
    {
      "@type": "HowTo",
      "@id": `${url}/#howto`,
      name: title,
      description,
      url,
      totalTime,
      step: howToStepObjects,
      ...(videoUrl && {
        video: {
          "@type": "VideoObject",
          name: `${title} — Video Tutorial`,
          description: `Video tutorial for ${title}`,
          thumbnailUrl: videoThumbnailUrl ?? articleImage,
          contentUrl: videoUrl,
          uploadDate: datePublished,
          duration: totalTime,
        },
      }),
    },
    {
      "@type": "Article",
      "@id": `${url}/#article`,
      headline: title,
      description,
      url,
      image: {
        "@type": "ImageObject",
        url: articleImage,
        width: 1200,
        height: 630,
      },
      datePublished,
      dateModified: modifiedDate,
      author: {
        "@type": "Person",
        name: authorName,
        url: SITE_URL,
      },
      publisher: {
        "@id": `${SITE_URL}/#organization`,
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": url,
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${url}/#breadcrumb`,
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
          name: "Blog",
          item: `${SITE_URL}/blog`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: title,
          item: url,
        },
      ],
    },
  ];

  // Only add VideoObject to graph if videoUrl is provided (separate from HowTo video)
  if (videoUrl && videoThumbnailUrl) {
    graphItems.unshift({
      "@type": "VideoObject",
      "@id": `${url}/#video`,
      name: `${title} — Video Tutorial`,
      description: `Step-by-step video tutorial for ${title}`,
      thumbnailUrl: videoThumbnailUrl,
      contentUrl: videoUrl,
      uploadDate: datePublished,
      duration: totalTime,
      author: {
        "@type": "Person",
        name: authorName,
        url: SITE_URL,
      },
      publisher: {
        "@id": `${SITE_URL}/#organization`,
      },
    });
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": graphItems,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
