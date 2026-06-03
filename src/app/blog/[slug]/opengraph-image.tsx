import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "LoopCanvas Blog Article";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/* Simple in-memory title lookup to avoid importing page.tsx edge incompatibility */
const titles: Record<string, string> = {
  "ai-loop-video-generator-guide": "Ultimate Guide to AI Loop Video Generators in 2026",
  "make-looping-video-spotify-canvas": "How to Make a Looping Video for Spotify Canvas with AI",
  "how-to-create-seamless-loop-video": "How to Create a Seamless Loop Video Fast with AI",
  "spotify-canvas-video-specs": "Complete Spotify Canvas Video Specs & Best Practices",
  "top-5-ai-looping-video-makers": "Top 5 AI Looping Video Makers Compared (2026)",
  "turn-album-art-into-looping-video": "How to Turn Album Art into a Looping Video with AI",
  "free-vs-paid-ai-loop-video-generators": "Free vs Paid AI Loop Video Generators (2026)",
  "loop-video-website-background": "How to Use AI Loop Videos for Website Background",
  "best-ai-loop-video-generators-social-media": "5 Best AI Loop Video Generators for Social Media",
  "musicians-ai-looping-videos": "How Musicians Use AI Looping Videos to Promote Music",
  "text-to-loop-vs-image-to-loop": "AI Loop Video Generator: Text-to-Loop vs Image-to-Loop",
  "seamless-loop-video-resolution-formats": "Complete Guide to Loop Video Resolution & Formats",
};

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const title = titles[slug] || "LoopCanvas Blog";

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          background: "linear-gradient(135deg, #0A0A0F 0%, #1a1a2e 100%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "4px",
            background: "linear-gradient(90deg, #7c3aed, #ec4899)",
          }}
        />
        <p
          style={{
            color: "#7c3aed",
            fontSize: "18px",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "2px",
            marginBottom: "20px",
          }}
        >
          LoopCanvas Blog
        </p>
        <h1
          style={{
            color: "#F8FAFC",
            fontSize: "48px",
            fontWeight: 700,
            textAlign: "center",
            lineHeight: 1.2,
            maxWidth: "900px",
          }}
        >
          {title}
        </h1>
        <p
          style={{
            color: "#94a3b8",
            fontSize: "20px",
            marginTop: "30px",
          }}
        >
          loopcanvas.video
        </p>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
