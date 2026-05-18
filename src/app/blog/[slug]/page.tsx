import Link from "next/link";
import { ArrowLeft, Calendar, ArrowRight } from "lucide-react";
import {
  PillarArticleJsonLd,
  HowToArticleJsonLd,
  SupportArticleJsonLd,
} from "@/components/seo";

interface Article {
  slug: string;
  title: string;
  description: string;
  type: "pillar" | "howto" | "support";
  datePublished: string;
  dateModified?: string;
  content: string;
  faqs?: { question: string; answer: string }[];
  steps?: { name: string; text: string }[];
}

const articles: Article[] = [
  {
    slug: "best-ai-loop-video-generator",
    title: "Best AI Loop Video Generator 2026",
    description:
      "A comprehensive comparison of the top AI tools for creating seamless loop videos in 2026.",
    type: "pillar",
    datePublished: "2026-05-15",
    content: `
## What is an AI Loop Video Generator?

An AI loop video generator is a tool that uses artificial intelligence to create seamless, infinitely repeating videos from text prompts or images. These videos are perfect for Spotify Canvas, website backgrounds, social media content, and digital art installations.

## Top AI Loop Video Generators in 2026

### 1. LoopCanvas AI

LoopCanvas AI stands out as the most user-friendly option, offering both text-to-loop and photo-to-loop generation. With its Spotify Canvas optimization feature, it's the go-to choice for musicians and artists.

### 2. Runway Gen-3

Runway's Gen-3 model offers impressive video generation capabilities with high fidelity outputs. However, it lacks dedicated loop optimization features.

### 3. Pika Labs

Pika Labs excels at creative video generation but requires more technical expertise to achieve seamless loops.

## Key Features to Look For

- Seamless loop optimization
- Multiple input modes (text, image)
- HD export quality
- Commercial licensing options
- Spotify Canvas format support
    `,
    faqs: [
      {
        question: "What makes a good loop video?",
        answer:
          "A good loop video has perfectly matching start and end frames, creating the illusion of infinite playback. The content should be visually engaging but not too complex.",
      },
      {
        question: "How long should a loop video be?",
        answer:
          "For Spotify Canvas, 3-8 seconds is ideal. For website backgrounds, 10-30 seconds works well. Social media loops typically range from 3-15 seconds.",
      },
      {
        question: "Can I use loop videos commercially?",
        answer:
          "Yes, with tools like LoopCanvas AI's Pro plan, you get full commercial licensing rights for all generated content.",
      },
      {
        question: "What resolution do I need?",
        answer:
          "For Spotify Canvas, 1080x1920 (9:16) is required. Website backgrounds typically use 1920x1080 or 4K for larger displays.",
      },
    ],
  },
  {
    slug: "how-to-create-spotify-canvas",
    title: "How to Create Spotify Canvas Videos with AI",
    description:
      "Step-by-step guide to creating stunning Spotify Canvas videos using AI technology.",
    type: "howto",
    datePublished: "2026-05-10",
    content: `
## Introduction

Spotify Canvas is a powerful feature that lets artists add 3-8 second looping videos to their tracks. In this guide, we'll show you how to create professional Canvas videos using AI.

## Step 1: Plan Your Canvas

Before generating, think about the mood of your track. The Canvas should complement the music, not distract from it. Consider:
- The genre and energy level
- Color palette that matches your album art
- Whether to use abstract or representational visuals

## Step 2: Choose Your Generation Method

LoopCanvas AI offers two approaches:

### Text-to-Loop
Describe the scene you want. Example: "gentle ocean waves at sunset, warm golden light, seamless loop"

### Photo-to-Loop
Upload an image and let AI animate it into a seamless loop.

## Step 3: Generate and Refine

Generate your video and review the loop. If needed, adjust your prompt or try different images until you get the perfect result.

## Step 4: Export and Upload

Export in the correct format (MP4, 9:16, 3-8 seconds) and upload through Spotify for Artists.
    `,
    steps: [
      {
        name: "Plan Your Canvas",
        text: "Determine the mood, colors, and style that match your track.",
      },
      {
        name: "Choose Generation Method",
        text: "Use text-to-loop for custom scenes or photo-to-loop to animate existing images.",
      },
      {
        name: "Generate and Refine",
        text: "Create your loop video and adjust prompts until the result is perfect.",
      },
      {
        name: "Export and Upload",
        text: "Download the MP4 file and upload it through Spotify for Artists.",
      },
    ],
  },
  {
    slug: "ai-loop-videos-social-media",
    title: "AI Loop Videos for Social Media Marketing",
    description:
      "Learn how brands and creators are using AI-generated loop videos to boost engagement.",
    type: "pillar",
    datePublished: "2026-05-05",
    content: `
## Why Loop Videos Work on Social Media

Loop videos are inherently engaging because viewers naturally watch them multiple times, increasing view counts and dwell time. Platforms like Instagram and TikTok favor content that keeps users watching.

## Platform-Specific Strategies

### Instagram
- Use 15-second loops for Reels
- Create eye-catching thumbnails
- Add trending audio to boost discovery

### TikTok
- Shorter loops (3-5 seconds) perform best
- Sync with popular sounds
- Use transitions to mask the loop point

### Twitter/X
- GIF-style loops work well in feeds
- Keep file sizes under 5MB
- Focus on immediate visual impact
    `,
  },
  {
    slug: "text-to-loop-vs-photo-to-loop",
    title: "Text-to-Loop vs Photo-to-Loop: Which Should You Use?",
    description:
      "Understand the differences between text prompt and image-based loop generation.",
    type: "support",
    datePublished: "2026-04-28",
    content: `
## Text-to-Loop

Best for: Creating entirely new scenes from imagination

**Pros:**
- Unlimited creative freedom
- No source image needed
- Great for abstract and fantastical concepts

**Cons:**
- Results can be unpredictable
- May require prompt engineering

## Photo-to-Loop

Best for: Animating existing images or photos

**Pros:**
- More predictable results
- Preserves the original image aesthetic
- Great for product photos and portraits

**Cons:**
- Requires a source image
- Less creative flexibility
    `,
  },
  {
    slug: "loop-video-formats-explained",
    title: "Loop Video Formats Explained",
    description:
      "MP4, MOV, GIF — which format is best for your use case?",
    type: "support",
    datePublished: "2026-04-20",
    content: `
## MP4 (H.264/H.265)

The most widely supported format. Best for:
- Spotify Canvas
- Website backgrounds
- Social media uploads

## MOV (ProRes)

Professional-grade format. Best for:
- Post-production workflows
- Archival storage
- High-end commercial use

## GIF

Legacy format with limited colors. Best for:
- Simple animations
- Email embeds
- Small file size requirements
    `,
  },
  {
    slug: "spotify-canvas-size-requirements",
    title: "Spotify Canvas Size Requirements in 2026",
    description:
      "The definitive guide to Spotify Canvas dimensions and best practices.",
    type: "support",
    datePublished: "2026-04-15",
    content: `
## Official Requirements

- **Format:** MP4 or MOV
- **Aspect Ratio:** 9:16 (vertical)
- **Resolution:** Minimum 720px width, recommended 1080px
- **Duration:** 3-8 seconds
- **File Size:** Under 8MB
- **Loop:** Must loop seamlessly

## Best Practices

1. Keep content simple and non-distracting
2. Avoid text overlays (listeners should focus on the music)
3. Match the mood and energy of the track
4. Test the loop multiple times before uploading
5. Preview on mobile devices before publishing
    `,
  },
];

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) return { title: "Not Found" };

  return {
    title: article.title,
    description: article.description,
    alternates: {
      canonical: `/blog/${slug}`,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    return (
      <div className="flex flex-1 items-center justify-center px-4 py-20">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Article Not Found</h1>
          <p className="mt-2 text-muted-foreground">
            The article you are looking for does not exist.
          </p>
          <Link
            href="/blog"
            className="mt-4 inline-flex items-center gap-2 text-primary hover:underline"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const url = `${process.env.NEXT_PUBLIC_SITE_URL || "https://loopcanvas.video"}/blog/${slug}`;

  const paragraphs = article.content
    .trim()
    .split("\n\n")
    .filter(Boolean);

  return (
    <>
      {/* JSON-LD based on article type */}
      {article.type === "pillar" && (
        <PillarArticleJsonLd
          title={article.title}
          description={article.description}
          url={url}
          datePublished={article.datePublished}
          dateModified={article.dateModified}
          faqs={article.faqs}
        />
      )}
      {article.type === "howto" && (
        <HowToArticleJsonLd
          title={article.title}
          description={article.description}
          url={url}
          datePublished={article.datePublished}
          dateModified={article.dateModified}
          steps={article.steps}
        />
      )}
      {article.type === "support" && (
        <SupportArticleJsonLd
          title={article.title}
          description={article.description}
          url={url}
          datePublished={article.datePublished}
          dateModified={article.dateModified}
        />
      )}

      <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:py-16">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-foreground">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="hover:text-foreground">
            Blog
          </Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">{article.title}</span>
        </nav>

        {/* Header */}
        <header className="mb-10">
          <span
            className={`inline-block rounded-full px-3 py-1 text-xs font-medium capitalize ${
              article.type === "pillar"
                ? "bg-primary/10 text-primary"
                : article.type === "howto"
                  ? "bg-green-100 text-green-700"
                  : "bg-muted text-muted-foreground"
            }`}
          >
            {article.type}
          </span>
          <h1 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            {article.title}
          </h1>
          <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <time dateTime={article.datePublished}>
              {article.datePublished}
            </time>
          </div>
        </header>

        {/* Content */}
        <div className="prose prose-zinc max-w-none">
          {paragraphs.map((para, i) => {
            if (para.startsWith("## ")) {
              return (
                <h2 key={i} className="mt-10 text-2xl font-bold">
                  {para.replace("## ", "")}
                </h2>
              );
            }
            if (para.startsWith("### ")) {
              return (
                <h3 key={i} className="mt-6 text-xl font-semibold">
                  {para.replace("### ", "")}
                </h3>
              );
            }
            if (para.startsWith("- ")) {
              const items = para.split("\n").filter((l) => l.startsWith("- "));
              return (
                <ul key={i} className="mt-4 list-disc space-y-1 pl-6">
                  {items.map((item, j) => (
                    <li key={j}>{item.replace("- ", "")}</li>
                  ))}
                </ul>
              );
            }
            return (
              <p key={i} className="mt-4 leading-relaxed text-muted-foreground">
                {para}
              </p>
            );
          })}
        </div>

        {/* CTA Bar */}
        <div className="mt-14 rounded-2xl bg-muted p-8">
          <h3 className="text-xl font-semibold">
            Ready to create your own loop videos?
          </h3>
          <p className="mt-2 text-muted-foreground">
            Try LoopCanvas AI for free. 5 generations per day, no credit card
            required.
          </p>
          <Link
            href="/text-to-loop"
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Start Creating
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </article>
    </>
  );
}
