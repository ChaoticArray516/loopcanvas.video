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
  ctaTarget: string;
  ctaText: string;
}

/* ═══════════════════════════════════════════════════════════════
   12 articles aligned with CONTENT_CLUSTER_STRATEGY.md
   W1-W12 dates, slugs, H1s, types, and CTA targets
   ═══════════════════════════════════════════════════════════════ */

const articles: Article[] = [
  // ── W1 Pillar C1 ──────────────────────────────────────────
  {
    slug: "ai-loop-video-generator-guide",
    title: "Ultimate Guide to AI Loop Video Generators in 2026",
    description:
      "Complete guide to the best AI loop video generators. Learn how to create seamless infinite loops for Spotify Canvas, websites, and social media.",
    type: "pillar",
    datePublished: "2026-05-19",
    ctaTarget: "/",
    ctaText: "Try our loop video maker",
    content: `
An AI loop video generator is a tool that uses artificial intelligence to create seamless, infinitely repeating videos from text prompts or images. These videos are perfect for Spotify Canvas, website backgrounds, social media content, and digital art installations.

## How AI Loop Video Generators Work

Modern AI loop video generators use diffusion models and neural networks to create videos where the first and last frames match perfectly. The process involves generating a video sequence and then applying frame-matching algorithms to ensure a seamless transition.

## Key Features to Look For

- **Seamless loop optimization**: The AI should guarantee matching start and end frames
- **Multiple input modes**: Both text prompts and image uploads
- **HD export quality**: At least 1080p resolution for professional use
- **Commercial licensing**: Important for professional creators and agencies
- **Spotify Canvas format support**: 9:16 vertical format, 3-8 seconds

## Top Use Cases

AI loop videos are used across many industries. Musicians use them for [Spotify Canvas](/blog/make-looping-video-spotify-canvas), web designers use them as [background videos](/blog/loop-video-website-background), and social media creators use them for Instagram Reels and TikTok content.

For step-by-step instructions, read our guide on [how to create a seamless loop video](/blog/how-to-create-seamless-loop-video). If you are looking for the easiest way to get started, try our [AI loop video generator](/) and create your first loop in under 30 seconds.
    `,
    faqs: [
      {
        question: "What is an AI loop video generator?",
        answer: "An AI loop video generator uses artificial intelligence to create short videos that play back in a seamless, continuous loop without any visible jumps or cuts between the end and start frames.",
      },
      {
        question: "How do I create a seamless loop video with AI?",
        answer: "Use an AI loop video generator like LoopCanvas AI. Simply describe your scene with a text prompt, or upload an image. The AI generates a video with guaranteed seamless start/end frame matching.",
      },
      {
        question: "What are AI loop videos used for?",
        answer: "AI loop videos are used for Spotify Canvas, website hero backgrounds, social media content (TikTok, Instagram Reels), digital art, music visualizations, and digital signage.",
      },
      {
        question: "Are AI-generated loop videos free to use commercially?",
        answer: "It depends on the generator. LoopCanvas AI's Pro plan ($9.99/month) includes a full commercial license, allowing you to use generated loops in commercial projects.",
      },
    ],
  },
  // ── W2 Pillar C2 ──────────────────────────────────────────
  {
    slug: "make-looping-video-spotify-canvas",
    title: "How to Make a Looping Video for Spotify Canvas with AI",
    description:
      "Step-by-step guide to creating stunning Spotify Canvas videos using AI technology. From prompt writing to final export.",
    type: "pillar",
    datePublished: "2026-05-26",
    ctaTarget: "/spotify-canvas-maker",
    ctaText: "Spotify Canvas generator",
    content: `
Spotify Canvas is a powerful feature that lets artists add 3-8 second looping videos to their tracks. In this guide, we'll show you how to create professional Canvas videos using AI.

## Why Spotify Canvas Matters

Spotify Canvas videos increase track engagement by up to 145% and help artists stand out in the crowded streaming landscape. A well-crafted Canvas video creates a visual identity that fans remember. Learn the [official Spotify Canvas video specs](/blog/spotify-canvas-video-specs) to ensure your uploads meet all requirements.

## Step 1: Plan Your Canvas

Before generating, think about the mood of your track. The Canvas should complement the music, not distract from it. Consider the genre, energy level, and color palette that matches your album art.

## Step 2: Choose Your Generation Method

LoopCanvas AI offers two approaches. **Text-to-Loop** lets you describe the scene you want. **Photo-to-Loop** allows you to upload an image and let AI animate it into a seamless loop. For album artwork, our [album art to looping video](/blog/turn-album-art-into-looping-video) guide shows exactly how to transform static images into motion.

## Step 3: Generate and Export

Generate your video and review the loop. Export in the correct format (MP4, 9:16, 3-8 seconds) and upload through Spotify for Artists.

Ready to create your own Canvas? Use our [Spotify Canvas generator](/spotify-canvas-maker) to get started in seconds.
    `,
    faqs: [
      {
        question: "What are the Spotify Canvas requirements?",
        answer: "Spotify Canvas requires MP4 or MOV format, 9:16 vertical aspect ratio, 3-8 second duration, and a file size under 8MB. The video must loop seamlessly.",
      },
      {
        question: "Can I use any image for Spotify Canvas?",
        answer: "Yes, you can upload album art, personal photos, or any image. The AI will animate it into a looping video optimized for Spotify's format.",
      },
      {
        question: "How long should a Spotify Canvas video be?",
        answer: "Spotify recommends 3-8 seconds for Canvas videos. Shorter loops (3-5 seconds) tend to perform best as they repeat more frequently during playback.",
      },
      {
        question: "Does Spotify Canvas improve streams?",
        answer: "Yes, studies show that tracks with Canvas videos see up to 145% increase in engagement, including saves, playlist adds, and shares.",
      },
    ],
  },
  // ── W3 HowTo C1 ───────────────────────────────────────────
  {
    slug: "how-to-create-seamless-loop-video",
    title: "How to Create a Seamless Loop Video Fast with AI",
    description:
      "Step-by-step guide to creating a perfectly seamless looping video using AI in under 5 minutes. No editing skills required.",
    type: "howto",
    datePublished: "2026-06-02",
    ctaTarget: "/",
    ctaText: "Create a seamless loop",
    content: `
Creating a seamless loop video used to require complex video editing skills. With an [AI loop video generator](/blog/ai-loop-video-generator-guide), you can now create perfect loops in minutes without any technical expertise.

## Understanding Seamless Loops

A seamless loop video plays infinitely without any visible jump between the end and the beginning. The key is ensuring the first and last frames are visually identical or blend together naturally.

## Best Practices for Loop Videos

For the best results, use prompts that describe continuous motion like "gentle ocean waves," "flowing particles," or "rotating abstract shapes." Avoid scenes with distinct beginnings and endings.
    `,
    steps: [
      {
        name: "Describe your loop video",
        text: "Type a description of the scene you want to loop. Use words like 'gentle', 'flowing', 'continuous motion', 'seamless loop' for best results.",
      },
      {
        name: "Choose your settings",
        text: "Select video duration (3-8 seconds), aspect ratio (1:1, 9:16, or 16:9), and motion style. For Spotify Canvas, choose 9:16 and 5-8 second duration.",
      },
      {
        name: "Generate the loop",
        text: "Click 'Generate' and the AI creates your seamless loop video in under 30 seconds. LoopCanvas AI automatically matches the first and last frames.",
      },
      {
        name: "Preview and download",
        text: "Preview the loop to verify seamlessness. Click 'Download' to save as MP4 or WebM. Pro users can download in 1080p HD without watermark.",
      },
    ],
  },
  // ── W4 Support C2 ─────────────────────────────────────────
  {
    slug: "spotify-canvas-video-specs",
    title: "Complete Spotify Canvas Video Specs & Best Practices",
    description:
      "The definitive guide to Spotify Canvas dimensions, file size limits, and best practices for 2026.",
    type: "support",
    datePublished: "2026-06-09",
    ctaTarget: "/spotify-canvas-maker",
    ctaText: "Make Spotify Canvas",
    content: `
## Official Requirements

Spotify Canvas has specific technical requirements that must be met for successful upload:

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

## Common Mistakes to Avoid

Many artists fail to get their Canvas approved because of format issues. Always export in the correct aspect ratio and keep file sizes under 8MB. If you need help [making a looping video](/blog/make-looping-video-spotify-canvas) for Spotify, our guide covers everything.
    `,
  },
  // ── W5 Support C1 ─────────────────────────────────────────
  {
    slug: "top-5-ai-looping-video-makers",
    title: "Top 5 AI Looping Video Makers Compared (2026)",
    description:
      "A comprehensive comparison of the top AI tools for creating seamless loop videos in 2026.",
    type: "support",
    datePublished: "2026-06-16",
    ctaTarget: "/",
    ctaText: "Try the best AI loop maker",
    content: `
## 1. LoopCanvas AI

LoopCanvas AI stands out as the most user-friendly option, offering both text-to-loop and photo-to-loop generation. With its Spotify Canvas optimization feature, it's the go-to choice for musicians and artists. Pricing: Free tier + Pro at $9.99/month.

## 2. Runway Gen-3

Runway's Gen-3 model offers impressive video generation capabilities with high fidelity outputs. However, it lacks dedicated loop optimization features. Pricing: Starts at $15/month.

## 3. Pika Labs

Pika Labs excels at creative video generation but requires more technical expertise to achieve seamless loops. Pricing: Free tier + paid plans.

## 4. Kling AI

Kling AI produces high-quality videos with good motion consistency. Loop optimization is available but limited. Pricing: Subscription-based.

## 5. Luma Dream Machine

Luma offers impressive visual quality but lacks specific loop optimization tools. Best for general video generation rather than dedicated loops.

For the easiest way to create seamless loop videos, read our [ultimate guide to AI loop video generators](/blog/ai-loop-video-generator-guide) or try LoopCanvas AI for the most streamlined experience with guaranteed loop quality.
    `,
  },
  // ── W6 HowTo C2 ───────────────────────────────────────────
  {
    slug: "turn-album-art-into-looping-video",
    title: "How to Turn Album Art into a Looping Video with AI",
    description:
      "Learn how to transform static album artwork into mesmerizing looping videos for Spotify Canvas and social media.",
    type: "howto",
    datePublished: "2026-06-23",
    ctaTarget: "/spotify-canvas-maker",
    ctaText: "Try Photo-to-Loop",
    content: `
Static album art is a missed opportunity. Using a [Spotify Canvas maker](/blog/make-looping-video-spotify-canvas), you can bring your artwork to life with subtle motion, particle effects, and seamless looping.

## Why Animate Album Art?

Animated album art captures attention on streaming platforms and social media. A looping video based on your album art creates visual consistency across all platforms while adding dynamic energy to your music.

## Choosing the Right Image

High-resolution images work best. Album art with clear focal points, gradients, or abstract elements tends to produce the most visually appealing loop videos.

Our [Spotify canvas maker](/spotify-canvas-maker) can transform any album cover into a professional looping video in seconds.
    `,
    steps: [
      {
        name: "Upload your album art",
        text: "Choose a high-resolution image (JPG, PNG, or WEBP). The AI works best with images that have clear visual elements and good contrast.",
      },
      {
        name: "Describe the motion style",
        text: "Add a prompt describing how you want the image to animate. Example: 'gentle particle effects flowing across the image, warm ambient glow'.",
      },
      {
        name: "Generate the loop",
        text: "Click Generate and the AI will create a seamless looping video based on your image. The process takes 10-30 seconds.",
      },
      {
        name: "Export for Spotify",
        text: "Download the MP4 in 9:16 format and upload directly to Spotify for Artists. The video is optimized for Canvas specifications.",
      },
    ],
  },
  // ── W7 Support C1 ─────────────────────────────────────────
  {
    slug: "free-vs-paid-ai-loop-video-generators",
    title: "Free vs Paid AI Loop Video Generators (2026)",
    description:
      "Comparing free and paid AI loop video generators. Which option is right for your needs and budget?",
    type: "support",
    datePublished: "2026-06-30",
    ctaTarget: "/pricing",
    ctaText: "Check pricing",
    content: `
## Free AI Loop Video Generators

Free tools offer a great way to experiment with [AI loop video generation](/blog/ai-loop-video-generator-guide). Most free tiers include basic text-to-video capabilities with watermarked exports and limited daily generations.

**Pros:** No cost, good for experimentation, no commitment
**Cons:** Watermarked exports, limited generations, lower resolution, no commercial license

## Paid AI Loop Video Generators

Paid plans unlock the full potential of AI loop generation. Professional creators and businesses should consider a paid plan for commercial use.

**Pros:** HD exports, no watermarks, commercial license, more generations, priority processing
**Cons:** Monthly subscription cost

## When to Upgrade

If you're creating content for clients, building a brand on Spotify, or need high-resolution exports, a paid plan is essential. Check our [pricing](/pricing) to see which plan fits your needs.
    `,
  },
  // ── W8 HowTo C3 ───────────────────────────────────────────
  {
    slug: "loop-video-website-background",
    title: "How to Use AI Loop Videos for Website Background",
    description:
      "A practical guide to using seamless loop videos as website backgrounds for maximum visual impact.",
    type: "howto",
    datePublished: "2026-07-07",
    ctaTarget: "/",
    ctaText: "Create a loop",
    content: `
Loop videos make stunning website backgrounds that load fast and create immersive experiences. Unlike heavy video files, loop videos are short, lightweight, and endlessly repeating. Learn more in our [complete guide to AI loop video generators](/blog/ai-loop-video-generator-guide).

## Why Use Loop Videos on Websites?

A well-chosen loop background can increase time-on-page by up to 30%. The key is subtlety — the video should enhance the content without distracting from it.

## Technical Considerations

For website backgrounds, use 1920x1080 resolution (16:9), keep file sizes under 5MB, and use the WebM format when possible for better compression. Always provide a static fallback for users who prefer reduced motion.

For technical details, see our [AI loop video generator guide](/blog/ai-loop-video-generator-guide).
    `,
    steps: [
      {
        name: "Generate your background loop",
        text: "Create a subtle, non-distracting loop video. Abstract patterns, nature scenes, and soft gradients work best for backgrounds.",
      },
      {
        name: "Optimize for web",
        text: "Export in 1920x1080 resolution. Use WebM format for best compression. Keep the file under 5MB for fast loading.",
      },
      {
        name: "Add to your website",
        text: "Use the HTML5 video tag with autoplay, muted, and loop attributes. Add a poster image for faster initial load.",
      },
      {
        name: "Test performance",
        text: "Verify the video loads quickly and doesn't impact Core Web Vitals. Consider lazy loading for below-the-fold sections.",
      },
    ],
  },
  // ── W9 Support C3 ─────────────────────────────────────────
  {
    slug: "best-ai-loop-video-generators-social-media",
    title: "5 Best AI Loop Video Generators for Social Media",
    description:
      "Compare the top AI loop video tools optimized for Instagram, TikTok, and other social platforms.",
    type: "support",
    datePublished: "2026-07-14",
    ctaTarget: "/",
    ctaText: "Create a loop",
    content: `
Social media thrives on engaging visuals, and [AI loop videos](/blog/ai-loop-video-generator-guide) are inherently captivating. When a video loops seamlessly, viewers naturally watch it multiple times, boosting engagement metrics.

## Platform-Specific Recommendations

**Instagram Reels:** 9:16 vertical format, 3-15 second loops with bold visual impact.
**TikTok:** Short 3-5 second loops perform best. Sync with trending sounds for maximum reach.
**Twitter/X:** GIF-style loops work well in feeds. Keep file sizes under 5MB.

## What Makes a Great Social Media Loop?

The best social media loops have immediate visual impact, match platform aspect ratios, and create a hypnotic effect that stops the scroll. Abstract motion, particle effects, and nature scenes tend to perform best. For more tips, see our guide on [how to create a seamless loop video](/blog/how-to-create-seamless-loop-video).

Ready to [create a loop](/) for your social media? LoopCanvas AI generates platform-optimized videos in seconds.
    `,
  },
  // ── W10 Support C3 ────────────────────────────────────────
  {
    slug: "musicians-ai-looping-videos",
    title: "How Musicians Use AI Looping Videos to Promote Music",
    description:
      "Discover how independent artists and labels are leveraging AI loop videos for music promotion.",
    type: "support",
    datePublished: "2026-07-21",
    ctaTarget: "/spotify-canvas-maker",
    ctaText: "Make Spotify Canvas",
    content: `
## The Power of Visual Music Promotion

In the streaming era, visual content is essential for music promotion. [AI loop videos](/blog/ai-loop-video-generator-guide) give musicians an affordable way to create professional visuals without hiring videographers.

## Spotify Canvas Strategy

Artists who use Spotify Canvas see up to 145% more engagement. A well-crafted Canvas video creates a memorable visual identity that fans associate with your music.

## Beyond Spotify

Loop videos also work great for Instagram Stories, TikTok backgrounds, and website hero sections. One loop video can be repurposed across multiple platforms.

Start creating your own [Spotify Canvas](/spotify-canvas-maker) today and give your tracks the visual edge they deserve.
    `,
  },
  // ── W11 Support C1 ────────────────────────────────────────
  {
    slug: "text-to-loop-vs-image-to-loop",
    title: "AI Loop Video Generator: Text-to-Loop vs Image-to-Loop",
    description:
      "Understand the differences between text prompt and image-based loop generation to choose the right approach.",
    type: "support",
    datePublished: "2026-07-28",
    ctaTarget: "/",
    ctaText: "Try both modes",
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

## Which Should You Choose?

Use text-to-loop when you want to create something entirely new. Use photo-to-loop when you have existing visuals you want to bring to life. Both modes produce [seamless looping videos](/blog/how-to-create-seamless-loop-video) using the same underlying AI technology. Read our [complete guide to AI loop video generators](/blog/ai-loop-video-generator-guide) to understand all the options.

See [loop video examples](/gallery) to get inspired and choose the right approach for your project.
    `,
  },
  // ── W12 Support C1 ────────────────────────────────────────
  {
    slug: "seamless-loop-video-resolution-formats",
    title: "Complete Guide to Loop Video Resolution & Formats",
    description:
      "Understanding video resolutions, aspect ratios, and file formats for optimal loop video output.",
    type: "support",
    datePublished: "2026-08-04",
    ctaTarget: "/",
    ctaText: "Create a seamless loop",
    content: `
## Common Resolutions

**1080p (1920x1080):** Standard HD, perfect for website backgrounds and most platforms.
**1080x1920 (9:16):** Vertical HD, required for Spotify Canvas and mobile-first content.
**720p (1280x720):** Lower HD, good for faster loading on websites.
**4K (3840x2160):** Ultra HD, best for large displays and professional use.

## Aspect Ratios Explained

- **16:9** — Standard widescreen, ideal for websites and YouTube
- **9:16** — Vertical mobile format, required for Spotify Canvas
- **1:1** — Square format, great for Instagram posts
- **4:5** — Portrait format, popular for Instagram feed

## File Formats

**MP4 (H.264):** Universal compatibility, good compression. Best for most use cases.
**WebM:** Superior compression for web use. Smaller file sizes with comparable quality.
**MOV:** Professional format with less compression. Best for post-production workflows.

For more context on choosing the right setup, see our [complete guide to AI loop video generators](/blog/ai-loop-video-generator-guide). Ready to [create a seamless loop](/) in your preferred format? LoopCanvas AI supports all major resolutions and aspect ratios.
    `,
  },
];

/* ═══════════════════════════════════════════════════════════════
   Page exports
   ═══════════════════════════════════════════════════════════════ */

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
                ? "bg-brand-500/15 text-brand-400 border border-brand-500/25"
                : article.type === "howto"
                  ? "bg-green-500/15 text-green-400 border border-green-500/25"
                  : "bg-white/[0.06] text-muted-foreground border border-white/10"
            }`}
          >
            {article.type}
          </span>
          <h1 className="mt-4 font-heading text-3xl font-bold tracking-tight sm:text-4xl">
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
        <div className="prose prose-invert max-w-none">
          {paragraphs.map((para, i) => {
            if (para.startsWith("## ")) {
              return (
                <h2 key={i} className="mt-10 text-2xl font-bold text-foreground">
                  {para.replace("## ", "")}
                </h2>
              );
            }
            if (para.startsWith("### ")) {
              return (
                <h3 key={i} className="mt-6 text-xl font-semibold text-foreground">
                  {para.replace("### ", "")}
                </h3>
              );
            }
            if (para.startsWith("- ")) {
              const items = para.split("\n").filter((l) => l.startsWith("- "));
              return (
                <ul key={i} className="mt-4 list-disc space-y-1 pl-6 text-muted-foreground">
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
        <div className="mt-14 rounded-2xl bg-gradient-to-br from-brand-500/10 to-pink-500/10 border border-white/[0.06] p-8">
          <h3 className="text-xl font-semibold text-foreground">
            Ready to create your own loop videos?
          </h3>
          <p className="mt-2 text-muted-foreground">
            Try LoopCanvas AI for free. 5 generations per day, no credit card
            required.
          </p>
          <Link
            href={article.ctaTarget}
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            {article.ctaText}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </article>
    </>
  );
}
