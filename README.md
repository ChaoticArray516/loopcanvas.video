# LoopCanvas AI — Core Workspace

AI-powered seamless loop video generator. Turn text prompts or images into infinite looping videos for Spotify Canvas, website backgrounds, social media, and digital art.

**Domain**: `https://loopcanvas.app`
**Stack**: Next.js 16 (App Router) + React 19 + TypeScript strict + Tailwind CSS v4 + shadcn/ui (base-nova) + Supabase + OpenRouter

## Quick start

```bash
pnpm dev        # → http://localhost:3000
pnpm build      # production build
pnpm lint       # ESLint
```

## Project structure

```
src/
├── app/                    # App Router (19 routes)
│   ├── layout.tsx          # Root layout (fonts, metadata)
│   ├── page.tsx            # Home — AI loop video generator
│   ├── globals.css         # Tailwind v4 @theme inline tokens + light/dark
│   ├── spotify-canvas-maker/page.tsx
│   ├── pricing/page.tsx
│   ├── gallery/page.tsx
│   ├── blog/
│   │   ├── page.tsx        # Blog list
│   │   └── [slug]/page.tsx # Article detail
│   ├── login/page.tsx
│   ├── signup/page.tsx
│   ├── profile/page.tsx
│   ├── checkout/route.ts
│   ├── portal/route.ts
│   ├── legal/
│   │   ├── privacy/page.tsx
│   │   └── terms/page.tsx
│   ├── auth/
│   │   ├── callback/route.ts
│   │   └── confirm/route.ts
│   └── api/
│       ├── generate/route.ts
│       ├── photo-to-line/route.ts
│       ├── credit-status/route.ts
│       ├── auth/signout/route.ts
│       └── webhooks/creem/route.ts
├── components/
│   └── ui/button.tsx       # shadcn base-nova Button
└── lib/
    ├── utils.ts            # cn() helper
    └── site-config.ts      # SITE_URL, SITE_NAME, SITE_DESCRIPTION
```

## Current phase

**Phase 3a — Project Init** is substantially complete (9/10 tasks). All routes scaffolded, dependencies installed, Tailwind v4 + shadcn configured, design tokens in place.

**Next up**: Phase 3b — SEO components (JSON-LD, robots.ts, sitemap.ts, font config, metadata).

Full task list and progress tracked in `../prompts/dev_plan/sop/to-do-list/MASTER_SOP.md`.
