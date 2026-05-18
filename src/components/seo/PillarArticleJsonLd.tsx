import { SITE_URL, SITE_NAME } from "@/lib/site-config";

interface FaqItem {
  question: string;
  answer: string;
}

interface Props {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  authorName?: string;
  imageUrl?: string;
  faqs?: FaqItem[];
}

export default function PillarArticleJsonLd({
  title,
  description,
  url,
  datePublished,
  dateModified,
  authorName = "LoopCanvas Team",
  imageUrl,
  faqs,
}: Props) {
  const articleImage = imageUrl ?? `${SITE_URL}/og-image.jpg`;
  const modifiedDate = dateModified ?? datePublished;

  const defaultFaqs: FaqItem[] = [
    {
      question: "What is an AI loop video generator?",
      answer:
        "An AI loop video generator is a tool that uses artificial intelligence to create seamless, infinitely repeating videos from text prompts or images. These loops are perfect for Spotify Canvas, website backgrounds, and social media content.",
    },
    {
      question: "How long should a Spotify Canvas video be?",
      answer:
        "Spotify Canvas videos should be between 3 to 8 seconds long and in a 9:16 vertical aspect ratio (1080x1920 pixels). The video must seamlessly loop without a visible jump.",
    },
    {
      question: "Can I use AI loop videos for commercial purposes?",
      answer:
        "Yes, with LoopCanvas AI's Pro and Team plans, you receive a commercial license that allows you to use generated loop videos for commercial projects including Spotify artist profiles, marketing campaigns, and client work.",
    },
    {
      question: "What file formats do you support for upload?",
      answer:
        "We support JPG, PNG, WEBP, and HEIC image formats up to 20MB. For text-to-video generation, simply enter a text prompt describing the scene you want.",
    },
  ];

  const faqItems = faqs ?? defaultFaqs;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
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
        "@type": "FAQPage",
        "@id": `${url}/#faq`,
        mainEntity: faqItems.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
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
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
