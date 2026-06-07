const _raw =
  process.env.NEXT_PUBLIC_SITE_URL || "https://loopcanvas.video";
export const SITE_URL = _raw.replace(/\/$/, "");

export const SITE_NAME = "LoopCanvas AI";

export const SITE_DESCRIPTION =
  "Free AI loop video generator. Create mesmerizing seamless loop videos from text prompts or images. Perfect for Spotify Canvas, website backgrounds, and social media. Try our AI video generator for free.";
