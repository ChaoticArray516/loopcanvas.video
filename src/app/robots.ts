import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site-config";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
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
          "/*?*",
        ],
      },
      { userAgent: "GPTBot", disallow: "/" },
      { userAgent: "CCBot", disallow: "/" },
      { userAgent: "ClaudeBot", disallow: "/" },
      { userAgent: "anthropic-ai", disallow: "/" },
      { userAgent: "PerplexityBot", disallow: "/" },
      {
        userAgent: "Google-Extended",
        allow: "/",
        disallow: ["/gallery/", "/api/"],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
