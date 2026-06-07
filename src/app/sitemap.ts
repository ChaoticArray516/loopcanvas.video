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
    { slug: "best-ai-loop-video-generator-spotify-canvas", lastModified: "2026-08-11" },
    { slug: "free-ai-loop-video-generator-no-watermark", lastModified: "2026-08-18" },
  ];
}

export default function sitemap(): MetadataRoute.Sitemap {
  const launch = new Date("2026-05-18");
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/text-to-loop`,
      lastModified: launch,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/photo-to-loop`,
      lastModified: launch,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/spotify-canvas-maker`,
      lastModified: now,
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
    // SEO landing pages (Phase 6)
    {
      url: `${SITE_URL}/loop-video-generator`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/ai-loop-video`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/ai-loop-video-generator`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/seamless-loop-video`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/text-to-video`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/photo-to-video`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/website-background-video`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/ai-video-generator`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/free-loop-video-maker`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/loop-video-for-social-media`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    // Phase 2 landing pages
    {
      url: `${SITE_URL}/loop-video-for-websites`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/loop-video-for-instagram`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/loop-video-for-tiktok`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/ai-video-background-generator`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/short-loop-video-maker`,
      lastModified: now,
      changeFrequency: "monthly",
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
    // Phase 7 SEO pages (2026-06-05)
    { url: `${SITE_URL}/ultimate-guide-ai-loop-video`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/spotify-canvas-handbook`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/seamless-loop-technical-guide`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/how-ai-loop-video-works`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/ai-loop-video-applications`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/ai-loop-video-tools-compared`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/loop-video-vs-traditional`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/spotify-canvas-vs-lyric-video`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/album-art-motion-design`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/music-visual-content-guide`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/social-media-loop-trends-2026`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/ai-video-presentation-background`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/loop-video-ad-creative`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/loop-video-digital-art-nft`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/loop-video-ecommerce-product`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/loop-video-for-music-album-release`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/loop-video-music-visualizer`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/loop-video-wedding-event`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/music-festival-loop-video`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/online-course-loop-background`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/twitch-stream-loop-overlay`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
  ];

  const blogPages: MetadataRoute.Sitemap = getBlogPosts().map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.lastModified),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...blogPages];
}
