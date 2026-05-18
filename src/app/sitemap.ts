import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString().split("T")[0];

  // Static L1 pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/spotify-canvas-maker`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/pricing`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/gallery`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/legal/privacy`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/legal/terms`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.3,
    },
  ];

  // Dynamic blog posts (12 articles)
  const blogPosts = [
    {
      slug: "best-ai-loop-video-generator",
      priority: 0.7,
    },
    {
      slug: "how-to-create-spotify-canvas",
      priority: 0.7,
    },
    {
      slug: "ai-loop-videos-social-media",
      priority: 0.7,
    },
    {
      slug: "text-to-loop-vs-photo-to-loop",
      priority: 0.6,
    },
    {
      slug: "loop-video-formats-explained",
      priority: 0.6,
    },
    {
      slug: "spotify-canvas-size-requirements",
      priority: 0.7,
    },
    {
      slug: "ai-video-generator-commercial-license",
      priority: 0.6,
    },
    {
      slug: "loop-video-editing-tips",
      priority: 0.6,
    },
    {
      slug: "website-background-loop-videos",
      priority: 0.6,
    },
    {
      slug: "instagram-loop-video-ideas",
      priority: 0.6,
    },
    {
      slug: "tiktok-loop-video-trends",
      priority: 0.6,
    },
    {
      slug: "loop-video-file-optimization",
      priority: 0.5,
    },
  ];

  const blogUrls: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: post.priority,
  }));

  return [...staticPages, ...blogUrls];
}
