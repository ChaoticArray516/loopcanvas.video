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

const posts = [
  {
    slug: "best-ai-loop-video-generator",
    title: "Best AI Loop Video Generator 2026",
    excerpt:
      "A comprehensive comparison of the top AI tools for creating seamless loop videos. Find the perfect generator for your needs.",
    date: "2026-05-15",
    tags: ["Comparison", "AI Tools"],
    type: "pillar",
  },
  {
    slug: "how-to-create-spotify-canvas",
    title: "How to Create Spotify Canvas Videos with AI",
    excerpt:
      "Step-by-step guide to creating stunning Spotify Canvas videos using AI. From prompt writing to final export.",
    date: "2026-05-10",
    tags: ["Tutorial", "Spotify"],
    type: "howto",
  },
  {
    slug: "ai-loop-videos-social-media",
    title: "AI Loop Videos for Social Media Marketing",
    excerpt:
      "Learn how brands and creators are using AI-generated loop videos to boost engagement on Instagram, TikTok, and more.",
    date: "2026-05-05",
    tags: ["Marketing", "Social Media"],
    type: "pillar",
  },
  {
    slug: "text-to-loop-vs-photo-to-loop",
    title: "Text-to-Loop vs Photo-to-Loop: Which Should You Use?",
    excerpt:
      "Understand the differences between text prompt and image-based loop generation to choose the right approach.",
    date: "2026-04-28",
    tags: ["Guide", "Tips"],
    type: "support",
  },
  {
    slug: "loop-video-formats-explained",
    title: "Loop Video Formats Explained",
    excerpt:
      "MP4, MOV, GIF — which format is best for your use case? A deep dive into loop video formats and when to use each.",
    date: "2026-04-20",
    tags: ["Technical", "Formats"],
    type: "support",
  },
  {
    slug: "spotify-canvas-size-requirements",
    title: "Spotify Canvas Size Requirements in 2026",
    excerpt:
      "The definitive guide to Spotify Canvas dimensions, file size limits, and best practices for 2026.",
    date: "2026-04-15",
    tags: ["Spotify", "Requirements"],
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
            <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
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
                className="group flex flex-col rounded-2xl border border-border/50 bg-card p-6 transition-colors hover:border-border"
              >
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h2 className="mt-4 text-xl font-semibold leading-tight group-hover:text-primary">
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
                    className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-primary/80"
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
