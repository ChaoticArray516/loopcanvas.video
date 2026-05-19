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
          "/gallery/*",
          "/blog/",
          "/blog/*",
          "/legal/",
          "/legal/*",
        ],
        disallow: [
          "/api/",
          "/api/*",
          "/auth/",
          "/auth/*",
          "/checkout/",
          "/checkout/*",
          "/portal/",
          "/portal/*",
          "/profile/",
          "/profile/*",
          "/dashboard/",
          "/dashboard/*",
          "/account/",
          "/account/*",
          "/result/",
          "/result/*",
          "/_next/",
          "/cgi-bin/",
          "/*?ref=",
          "/*?utm_",
          "/*?token=",
        ],
      },
      // AI training crawlers — deny all
      { userAgent: "GPTBot", disallow: "/" },
      { userAgent: "CCBot", disallow: "/" },
      { userAgent: "ClaudeBot", disallow: "/" },
      { userAgent: "anthropic-ai", disallow: "/" },
      { userAgent: "PerplexityBot", disallow: "/" },
      // Google-Extended (Gemini training) — selective
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
