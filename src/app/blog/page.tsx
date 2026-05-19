import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import BlogListJsonLd from "@/components/seo/BlogListJsonLd";

export const metadata = {
  title: "Blog",
  description:
    "Tips, tutorials, and insights on AI loop video generation, Spotify Canvas creation, and seamless video looping techniques.",
  alternates: {
    canonical: "/blog",
  },
};

/* 12 blog posts aligned with CONTENT_CLUSTER_STRATEGY.md W1-W12 */
const posts = [
  {
    slug: "ai-loop-video-generator-guide",
    title: "Ultimate Guide to AI Loop Video Generators in 2026",
    excerpt:
      "Complete guide to the best AI loop video generators. Learn how to create seamless infinite loops for Spotify Canvas, websites, and social media.",
    date: "2026-05-19",
    tags: ["Guide", "AI Tools"],
    type: "pillar",
  },
  {
    slug: "make-looping-video-spotify-canvas",
    title: "How to Make a Looping Video for Spotify Canvas with AI",
    excerpt:
      "Step-by-step guide to creating stunning Spotify Canvas videos using AI. From prompt writing to final export.",
    date: "2026-05-26",
    tags: ["Tutorial", "Spotify"],
    type: "pillar",
  },
  {
    slug: "how-to-create-seamless-loop-video",
    title: "How to Create a Seamless Loop Video Fast with AI",
    excerpt:
      "Learn how to create perfectly seamless looping videos using AI in under 5 minutes. No editing skills required.",
    date: "2026-06-02",
    tags: ["Tutorial", "How To"],
    type: "howto",
  },
  {
    slug: "spotify-canvas-video-specs",
    title: "Complete Spotify Canvas Video Specs & Best Practices",
    excerpt:
      "The definitive guide to Spotify Canvas dimensions, file size limits, and best practices for 2026.",
    date: "2026-06-09",
    tags: ["Spotify", "Requirements"],
    type: "support",
  },
  {
    slug: "top-5-ai-looping-video-makers",
    title: "Top 5 AI Looping Video Makers Compared (2026)",
    excerpt:
      "A comprehensive comparison of the top AI tools for creating seamless loop videos in 2026.",
    date: "2026-06-16",
    tags: ["Comparison", "AI Tools"],
    type: "support",
  },
  {
    slug: "turn-album-art-into-looping-video",
    title: "How to Turn Album Art into a Looping Video with AI",
    excerpt:
      "Learn how to transform static album artwork into mesmerizing looping videos for Spotify Canvas and social media.",
    date: "2026-06-23",
    tags: ["Tutorial", "Spotify"],
    type: "howto",
  },
  {
    slug: "free-vs-paid-ai-loop-video-generators",
    title: "Free vs Paid AI Loop Video Generators (2026)",
    excerpt:
      "Comparing free and paid AI loop video generators. Which option is right for your needs and budget?",
    date: "2026-06-30",
    tags: ["Guide", "Pricing"],
    type: "support",
  },
  {
    slug: "loop-video-website-background",
    title: "How to Use AI Loop Videos for Website Background",
    excerpt:
      "A practical guide to using seamless loop videos as website backgrounds for maximum visual impact.",
    date: "2026-07-07",
    tags: ["Tutorial", "Web Design"],
    type: "howto",
  },
  {
    slug: "best-ai-loop-video-generators-social-media",
    title: "5 Best AI Loop Video Generators for Social Media",
    excerpt:
      "Compare the top AI loop video tools optimized for Instagram, TikTok, and other social platforms.",
    date: "2026-07-14",
    tags: ["Social Media", "Comparison"],
    type: "support",
  },
  {
    slug: "musicians-ai-looping-videos",
    title: "How Musicians Use AI Looping Videos to Promote Music",
    excerpt:
      "Discover how independent artists and labels are leveraging AI loop videos for music promotion.",
    date: "2026-07-21",
    tags: ["Music", "Marketing"],
    type: "support",
  },
  {
    slug: "text-to-loop-vs-image-to-loop",
    title: "AI Loop Video Generator: Text-to-Loop vs Image-to-Loop",
    excerpt:
      "Understand the differences between text prompt and image-based loop generation to choose the right approach.",
    date: "2026-07-28",
    tags: ["Guide", "Tips"],
    type: "support",
  },
  {
    slug: "seamless-loop-video-resolution-formats",
    title: "Complete Guide to Loop Video Resolution & Formats",
    excerpt:
      "Understanding video resolutions, aspect ratios, and file formats for optimal loop video output.",
    date: "2026-08-04",
    tags: ["Technical", "Formats"],
    type: "support",
  },
];

export default function BlogPage() {
  return (
    <>
      <BlogListJsonLd />

      <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl">
              Blog
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
              Tips, tutorials, and insights on AI loop video generation.
            </p>
          </div>

          {/* Post Grid */}
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="glass-card group flex flex-col rounded-2xl p-6"
              >
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-white/[0.06] px-2.5 py-0.5 text-xs font-medium text-muted-foreground border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <span className={`mt-3 inline-flex w-fit rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${
                  post.type === "pillar"
                    ? "bg-brand-500/15 text-brand-400 border border-brand-500/25"
                    : post.type === "howto"
                      ? "bg-green-500/15 text-green-400 border border-green-500/25"
                      : "bg-white/[0.06] text-muted-foreground border border-white/10"
                }`}>
                  {post.type}
                </span>

                <h2 className="mt-3 text-xl font-semibold leading-tight group-hover:text-brand-400 transition-colors">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>

                <p className="mt-2 flex-1 text-sm text-muted-foreground">
                  {post.excerpt}
                </p>

                <div className="mt-4 flex items-center justify-between">
                  <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Calendar className="h-3.5 w-3.5" />
                    {post.date}
                  </span>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1 text-sm font-medium text-brand-400 hover:text-brand-300"
                  >
                    Read
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
