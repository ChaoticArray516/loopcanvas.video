import { SITE_URL, SITE_NAME } from "@/lib/site-config";

/**
 * 全局 JSON-LD Schema — 注入 layout.tsx
 *
 * 包含:
 * - SoftwareApplication: LoopCanvas AI 产品信息
 * - Organization: 组织信息
 * - FAQPage: 全局常见问题（与首页 FAQSection 内容对齐）
 *
 * 参考: SEO_TECH_SPEC.md §5.2 + UI 设计改造方案 §5.2
 */

const SOFTWARE_APP = {
  "@type": "SoftwareApplication",
  "@id": `${SITE_URL}/#software`,
  name: SITE_NAME,
  applicationCategory: "MultimediaApplication",
  operatingSystem: "Any",
  url: SITE_URL,
  image: `${SITE_URL}/og-image.jpg`,
  description:
    "Create mesmerizing seamless loop videos with AI. Turn text prompts or images into infinite looping videos. Perfect for Spotify Canvas, website backgrounds, and social media.",
  offers: [
    {
      "@type": "Offer",
      name: "Free",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
    {
      "@type": "Offer",
      name: "Pro",
      price: "9.99",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
    {
      "@type": "Offer",
      name: "Team",
      price: "29.99",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
  ],
  featureList: [
    "Text-to-loop video generation",
    "Photo-to-loop video generation",
    "Seamless infinite loop optimization",
    "HD MP4 export",
    "Spotify Canvas format support (9:16, 3-8s)",
    "5 free generations daily",
  ],
  keywords: [
    "AI loop video generator",
    "seamless loop video",
    "Spotify Canvas maker",
    "text to loop",
    "photo to loop",
    "infinite loop video",
    "AI video generator",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    ratingCount: "10000",
    bestRating: "5",
  },
};

const ORGANIZATION = {
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/og-image.jpg`,
    width: 1200,
    height: 630,
  },
  sameAs: [
    "https://twitter.com/loopcanvas",
  ],
};

// 首页 FAQSection 中的通用 FAQ（与 FAQSection.tsx 内容对齐）
const GLOBAL_FAQS = [
  {
    question: "What is LoopCanvas AI?",
    answer:
      "LoopCanvas AI is an AI-powered tool that creates mesmerizing seamless loop videos from text prompts or images. Perfect for Spotify Canvas, website backgrounds, and social media content.",
  },
  {
    question: "How do I create a seamless loop video?",
    answer:
      "Simply describe your scene in the Text-to-Loop tool, or upload an image in the Photo-to-Loop tool. Our AI generates a video with perfectly matching start and end frames for a seamless infinite loop.",
  },
  {
    question: "Is LoopCanvas AI free to use?",
    answer:
      "Yes! Free users get 5 video generations per day with no credit card required. Upgrade to Pro ($9.99/month) for 2,000 generations and HD export.",
  },
  {
    question: "What formats do you support for Spotify Canvas?",
    answer:
      "We generate videos in 9:16 vertical format (MP4), optimized for Spotify Canvas specs: 3-8 seconds duration, seamless loop, HD quality.",
  },
];

const FAQ_PAGE = {
  "@type": "FAQPage",
  "@id": `${SITE_URL}/#faq`,
  mainEntity: GLOBAL_FAQS.map((faq, i) => ({
    "@type": "Question",
    "@id": `${SITE_URL}/#faq-${i + 1}`,
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function GlobalSchema() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [SOFTWARE_APP, ORGANIZATION, FAQ_PAGE],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
