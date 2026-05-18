# LoopCanvas AI — Core Workspace

AI-powered seamless loop video generator. Turn text prompts or images into infinite looping videos for Spotify Canvas, website backgrounds, social media, and digital art.

**Domain**: `https://loopcanvas.video` | **Stack**: Next.js 16 (App Router) + React 19 + TypeScript strict + Tailwind CSS v4 + shadcn/ui (base-nova) + Supabase + OpenRouter

## Quick start

```bash
pnpm dev        # → http://localhost:3000
pnpm build      # production build (Turbopack, 32 routes)
pnpm lint       # ESLint
```

## Project structure

```
src/
├── app/                         # App Router (22 routes)
│   ├── layout.tsx               # Root layout: Inter + Playfair Display, GTM, metadata
│   ├── globals.css              # Tailwind v4 @theme inline tokens + light/dark
│   ├── page.tsx                 # Home — ISR 1h: Hero + Features + HowItWorks + Bottom CTA
│   ├── FeaturesSection.tsx      # Lazy-loaded feature cards (6 items)
│   ├── HowItWorks.tsx           # Lazy-loaded how-it-works section (3 steps)
│   ├── text-to-loop/page.tsx    # Text-to-loop tool (PromptInput)
│   ├── photo-to-loop/page.tsx   # Photo-to-loop tool (PhotoUpload)
│   ├── spotify-canvas-maker/    # Spotify Canvas landing — ISR 1h
│   ├── pricing/                 # 3-tier pricing (Free/Pro/Team)
│   ├── gallery/                 # 6-sample video gallery — ISR 1h
│   ├── blog/
│   │   ├── page.tsx             # Blog list (6 articles)
│   │   └── [slug]/page.tsx      # Article detail — SSG (3 types: pillar/howto/support)
│   ├── login/  signup/  profile/  checkout/  portal/
│   ├── legal/privacy/  legal/terms/
│   ├── auth/callback/  auth/confirm/
│   ├── robots.ts                # 6 AI crawler blocks (GPTBot, CCBot, ClaudeBot, etc.)
│   ├── sitemap.ts               # 7 L1 + 12 blog URLs
│   └── api/
│       ├── generate/route.ts    # POST: text-to-loop via OpenRouter + fallback chain
│       ├── photo-to-line/route.ts  # POST: image-to-loop with file validation
│       ├── credit-status/  auth/signout/  webhooks/creem/
│       └── generate/route.test.ts  # Smoke tests (4 cases)
├── components/
│   ├── seo/                     # 8 JSON-LD @graph components (Home/Spotify/Pricing/Gallery/Blog/Pillar/HowTo/Support)
│   ├── layout/                  # Header (desktop+mobile) + Footer (4 columns)
│   ├── VideoGenerator/          # PromptInput + PhotoUpload (state machine, real API)
│   └── ui/                      # shadcn base-nova Button + VideoHero (LCP optimized)
└── lib/
    ├── utils.ts                 # cn() helper
    ├── site-config.ts           # SITE_URL, SITE_NAME, SITE_DESCRIPTION
    └── openrouter.ts            # OpenRouter client: 5-scene fallback chain, exponential backoff
```

## Current phase

| Phase | Progress | Status |
|-------|----------|--------|
| Phase 1 — 竞品调研 | 100% | ✅ |
| Phase 2 — 技术文档 | 100% | ✅ |
| Phase 3a — 项目初始化 | 100% | ✅ 10/10 |
| Phase 3b — SEO 组件 | 100% | ✅ 14/14 |
| Phase 3c — 页面模板 | 100% | ✅ 14/14 |
| Phase 3d — 性能优化 | 100% | ✅ 5/5 |
| Phase 3e — CI/CD | 71% | ✅ 5/7 (pending Vercel deploy) |
| Phase 4a — OpenRouter API | 90% | ✅ 9/10 (pending API key) |
| Phase 4b — Gallery 样品 | 0% | ⏳ |
| Phase 4c — Creem 支付 | 0% | ⏳ |
| **Total** | **57/93 (61%)** | |

Full task list: `../prompts/dev_plan/sop/to-do-list/MASTER_SOP.md`

## Key features

- **Text-to-Loop**: enter a prompt → AI generates a seamless looping video
- **Photo-to-Loop**: upload an image → AI animates it into a loop
- **Spotify Canvas Maker**: 9:16 vertical format, 3–8 second loops
- **8 JSON-LD @graph** structured data components for rich SERP results
- **robots.txt** with 6 AI crawler blocks (GPTBot, CCBot, ClaudeBot, anthropic-ai, PerplexityBot, Google-Extended)
- **ISR + SSG** rendering strategy for optimal SEO and performance
- **CI/CD**: GitHub Actions pipeline (Lint → Build → Lighthouse → Preview Deploy → Production Deploy)
- **OpenRouter** with 5-scene model fallback chain and exponential backoff retry
