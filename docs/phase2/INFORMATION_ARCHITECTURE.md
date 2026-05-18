# INFORMATION_ARCHITECTURE.md — AI Loop Video Generator

> 基于 Gemini Round 1 骨架 (v2) → DeepSeek-V4 细化
> 站点域名: `https://loopcanvas.app`

---

## 1. URL 路由表

| 层级 | 路由 | 页面类型 | 目标关键词 | Schema 类型 | 内链指向 |
|------|------|---------|-----------|------------|---------|
| L1 | `/` | 工具首页 | ai loop video generator | WebSite, Organization, SoftwareApplication | /pricing, /gallery, /spotify-canvas-maker |
| L1 | `/spotify-canvas-maker` | 垂直场景着陆页 | loop video for spotify canvas | WebApplication, VideoObject, BreadcrumbList | /pricing, /, /gallery |
| L1 | `/pricing` | 定价页 | ai loop video generator pricing, free ai loop video | Product, Offer, BreadcrumbList | / (Try Free), /spotify-canvas-maker |
| L1 | `/gallery` | 视频画廊 | ai loop video examples, loop video gallery | CollectionPage, VideoObject, BreadcrumbList | / (Try this template), /spotify-canvas-maker |
| L1 | `/blog` | 博客列表 | N/A | CollectionPage, BreadcrumbList | 各博客文章 |
| L1 | `/privacy` | 法律页 | N/A | N/A | N/A |
| L1 | `/terms` | 法律页 | N/A | N/A | N/A |
| L2 | `/blog/ai-loop-video-generator-guide` | Cluster 1 支柱页 | ai loop video generator | Article, FAQPage, BreadcrumbList | / (try our loop video maker) |
| L2 | `/blog/how-to-create-seamless-loop-video` | Cluster 1 子话题 | seamless loop video generator | HowTo, VideoObject, Article, BreadcrumbList | /blog/ai-loop-video-generator-guide, / |
| L2 | `/blog/top-5-ai-looping-video-makers` | Cluster 1 子话题 | ai looping video maker | Article, BreadcrumbList | /blog/how-to-create-seamless-loop-video |
| L2 | `/blog/free-vs-paid-ai-loop-video-generators` | Cluster 1 子话题 | free ai loop generator | Article, BreadcrumbList | /pricing |
| L2 | `/blog/text-to-loop-vs-image-to-loop` | Cluster 1 子话题 | text to video loop | Article, BreadcrumbList | /gallery |
| L2 | `/blog/seamless-loop-video-resolution-formats` | Cluster 1 子话题 | loop video mp4 webm format | Article, BreadcrumbList | / |
| L2 | `/blog/make-looping-video-spotify-canvas` | Cluster 2 支柱页 | loop video for spotify canvas | HowTo, Article, FAQPage, BreadcrumbList | /spotify-canvas-maker |
| L2 | `/blog/spotify-canvas-video-specs` | Cluster 2 子话题 | spotify canvas video specs | Article, BreadcrumbList | /blog/make-looping-video-spotify-canvas |
| L2 | `/blog/turn-album-art-into-looping-video` | Cluster 2 子话题 | album art loop video | HowTo, Article, BreadcrumbList | /spotify-canvas-maker |
| L2 | `/blog/loop-video-website-background` | Cluster 3 子话题 | loop video for website background | HowTo, Article, BreadcrumbList | /blog/ai-loop-video-generator-guide |
| L2 | `/blog/best-ai-loop-video-generators-social-media` | Cluster 3 子话题 | ai loop video for tiktok, ai loop video for instagram | Article, BreadcrumbList | / |
| L2 | `/blog/musicians-ai-looping-videos` | Cluster 3 子话题 | music visualizer loop | Article, BreadcrumbList | /spotify-canvas-maker |

---

## 2. 页面层级树

```
/ (工具首页 — 主攻核心工具转化)
├── /spotify-canvas-maker (垂直场景着陆页 — KGR 0.04 低竞争高转化)
├── /pricing (付费转化闭环终点)
├── /gallery (视频画廊 — 样品展示 → 信任建立 → 转化)
├── /blog (博客频道 — 内容营销与长尾词截流)
│   ├── /blog/ai-loop-video-generator-guide (Cluster 1 Pillar)
│   ├── /blog/how-to-create-seamless-loop-video (Cluster 1 Support)
│   ├── /blog/top-5-ai-looping-video-makers (Cluster 1 Support)
│   ├── /blog/free-vs-paid-ai-loop-video-generators (Cluster 1 Support)
│   ├── /blog/text-to-loop-vs-image-to-loop (Cluster 1 Support)
│   ├── /blog/seamless-loop-video-resolution-formats (Cluster 1 Support)
│   ├── /blog/make-looping-video-spotify-canvas (Cluster 2 Pillar)
│   ├── /blog/spotify-canvas-video-specs (Cluster 2 Support)
│   ├── /blog/turn-album-art-into-looping-video (Cluster 2 Support)
│   ├── /blog/loop-video-website-background (Cluster 3 Support)
│   ├── /blog/best-ai-loop-video-generators-social-media (Cluster 3 Support)
│   └── /blog/musicians-ai-looping-videos (Cluster 3 Support)
├── /legal/privacy
└── /legal/terms
```

**页面总数**: 7 个 L1 页面 + 12 个 L2 博客 = 19 个可索引页面

---

## 3. 核心转化路径

### 路径 1: 场景化流量转化 (Spotify Canvas)

```
Google: "loop video for spotify canvas"
  → /spotify-canvas-maker (着陆)
    → "Create Canvas Now" CTA 点击
      → Web 交互生成器
        → 用户上传专辑封面
          → AI 生成 3秒 带水印 Loop 视频
            → 弹窗拦截: "Download HD Without Watermark"
              → 跳转 /pricing → Pro 付费转化
```

**目标转化率**: Landing page → Generator start: 40% → Complete generation: 60% → Pricing visit: 15% → Conversion: 5%

### 路径 2: 长尾内容流量转化 (HowTo)

```
Google: "seamless loop video generator"
  → /blog/how-to-create-seamless-loop-video (着陆)
    → 阅读教程中点击正文 CTA: "Try the Best AI Loop Maker"
      → / (工具首页)
        → 开始生成
          → 注册/付费拦截
```

**目标转化率**: Blog → Tool page: 20% → Generate: 50% → Conversion: 5%

### 路径 3: 视觉信任转化 (Gallery)

```
/ (顶部导航) → /gallery
  → 浏览精美循环视频示例
    → 点击 "Use this Style" / "Try this Prompt"
      → 携带预设参数跳回 / 快速生成
        → 注册/付费下载无水印版本
```

**目标转化率**: Gallery visit → Use template: 25% → Conversion: 8%

### 路径 4: 直接搜索品牌/工具词

```
Google: "ai loop video generator"
  → / (工具首页)
    → 直接输入 prompt / 上传图片
      → 生成带水印预览
        → 注册/付费拦截
```

**目标转化率**: Home → Generate: 50% → Conversion: 5%

---

## 4. 转化漏斗设计

```
     [流量层]
     SEO 内容集群 (12 博客)
     SERP 关键词覆盖 (20+ keywords)
     ↓
     [兴趣层]
     / (工具首页)  |  /spotify-canvas-maker
     文本输入 + 图片上传  |  Spotify 专属生成器
     ↓
     [体验层]
     免费生成 3 次/天 (720p + 水印)
     即时预览循环效果
     ↓
     [转化层]
     下载无水印 HD → 弹窗 → /pricing
     Pro $9.99/mo — 无限 HD + 商业授权
     Team $29.99/mo — 5 席位 + API
```

---

## 5. 页面类型 → Next.js 渲染策略映射

| 页面 | 渲染策略 | next.config 配置 | 原因 |
|------|---------|-----------------|------|
| `/` | ISR | `revalidate: 3600` | 工具页需要动态更新（生成次数、画廊精选），但可缓存 1h |
| `/spotify-canvas-maker` | ISR | `revalidate: 3600` | 垂直场景页，展示动态示例 |
| `/pricing` | SSG | 静态生成 | 定价不频繁变动 |
| `/gallery` | ISR | `revalidate: 3600` | 画廊内容周期性更新 |
| `/blog` | SSG | 静态生成 | 博客列表静态化 |
| `/blog/[slug]` | SSG | 构建时生成 | 文章内容不频繁变动 |
| `/legal/*` | SSG | 静态生成 | 法律页面几乎不变 |
| `/api/generate` | Edge Runtime | N/A | 低延迟生成请求 |
