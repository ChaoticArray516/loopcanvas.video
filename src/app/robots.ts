import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Default: allow all standard crawlers
      {
        userAgent: "*",
        allow: [
          "/",
          "/spotify-canvas-maker",
          "/pricing",
          "/gallery",
          "/blog",
          "/legal/privacy",
          "/legal/terms",
        ],
        disallow: [
          "/api/",
          "/auth/",
          "/checkout",
          "/portal",
          "/profile",
          "/_next/",
          "/cgi-bin/",
          "/*?*", // query params
        ],
      },
      // AI crawlers: full disallow
      {
        userAgent: "GPTBot",
        disallow: "/",
      },
      {
        userAgent: "CCBot",
        disallow: "/",
      },
      {
        userAgent: "ClaudeBot",
        disallow: "/",
      },
      {
        userAgent: "anthropic-ai",
        disallow: "/",
      },
      {
        userAgent: "PerplexityBot",
        disallow: "/",
      },
      // Google-Extended: limited disallow
      {
        userAgent: "Google-Extended",
        allow: "/",
        disallow: ["/gallery/", "/api/"],
      },
    ],
    sitemap: "https://loopcanvas.video/sitemap.xml",
    host: "https://loopcanvas.video",
  };
}
