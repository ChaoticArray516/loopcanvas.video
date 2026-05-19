import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site-config";

function getBlogPosts(): { slug: string; lastModified: string }[] {
  return [
    { slug: "ai-loop-video-generator-guide", lastModified: "2026-05-19" },
    { slug: "make-looping-video-spotify-canvas", lastModified: "2026-05-26" },
    { slug: "how-to-create-seamless-loop-video", lastModified: "2026-06-02" },
    { slug: "spotify-canvas-video-specs", lastModified: "2026-06-09" },
    { slug: "top-5-ai-looping-video-makers", lastModified: "2026-06-16" },
    { slug: "turn-album-art-into-looping-video", lastModified: "2026-06-23" },
    { slug: "free-vs-paid-ai-loop-video-generators", lastModified: "2026-06-30" },
    { slug: "loop-video-website-background", lastModified: "2026-07-07" },
    { slug: "best-ai-loop-video-generators-social-media", lastModified: "2026-07-14" },
    { slug: "musicians-ai-looping-videos", lastModified: "2026-07-21" },
    { slug: "text-to-loop-vs-image-to-loop", lastModified: "2026-07-28" },
    { slug: "seamless-loop-video-resolution-formats", lastModified: "2026-08-04" },
  ];
}

export default function sitemap(): MetadataRoute.Sitemap {
  const launch = new Date("2026-05-18");

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: launch,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/spotify-canvas-maker`,
      lastModified: launch,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/pricing`,
      lastModified: launch,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/gallery`,
      lastModified: launch,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: launch,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/legal/terms`,
      lastModified: launch,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/legal/privacy`,
      lastModified: launch,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  const blogPages: MetadataRoute.Sitemap = getBlogPosts().map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.lastModified),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...blogPages];
}
