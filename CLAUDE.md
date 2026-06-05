# CLAUDE.md — LoopCanvas AI Core Workspace

> **自动加载**：Claude Code 在 `core/` 下执行任何操作前会先读取此文件。
> **上级覆盖**：`../../CLAUDE.md`（meta-workspace 级）在子树外生效；本文件在 `core/` 内优先。

---

## 项目身份

- **名称**：LoopCanvas AI
- **生产 URL**：<https://loopcanvas.video>
- **GitHub**：<https://github.com/ChaoticArray516/loopcanvas.video.git>
- **栈**：Next.js 16 App Router（Turbopack）+ TypeScript strict + Tailwind v3 + Supabase + Creem 支付
- **包管理器**：`pnpm`（lockfile v9，部署用 `--frozen-lockfile`）
- **CI/CD**：GitHub Actions → `pnpm lint` → Vercel auto-deploy（master 分支触发）

---

## 渲染架构 — 强制规则（来源：`action/quickopa/tecth_arch/`）

### 五层约束体系（`web_arch_render.md`）

| 层级 | 约束 | 要求 |
|:--:|------|------|
| L1 | 文件结构约定 | `app/`（页面）、`components/`（UI）、`lib/`（数据） |
| L2-R1 | 默认 Server Component | 所有页面默认为 SC，仅在需要交互时使用 `"use client"` |
| L2-R2 | metadata 必须服务端生成 | 用 `export metadata` 或 `generateMetadata()`，禁止 `useEffect` 改 title |
| L2-R3 | 动态路由预生成 | `blog/[slug]` 等必须实现 `generateStaticParams()` |
| L2-R4 | 关键内容在 HTML 源码 | `curl` 验证 H1 + title 在 HTML 中可见 |
| L2-R5 | 内链用 `<Link>` | 禁止裸 `<a>`，全部使用 `next/link` |
| L3 | Agent System Prompt | **本文件即为 L3 承载**（CLAUDE.md） |
| L4 | 自动验证检查表 | 提交前 `pnpm lint` + `npx tsc --noEmit` |
| L5 | ESLint 规则锁定 | 当前 eslint.config.mjs 已配置 `no-restricted-syntax` 禁止 client-side fetch |

### 九项强制规则（`agent-web-ops-prompt.md`）

1. ✅ 默认 Server Component
2. ✅ metadata 服务端生成
3. ✅ 动态路由 `generateStaticParams`
4. ✅ 数据服务端 await
5. ✅ `"use client"` 仅用于交互
6. ✅ JSON-LD 服务端内联
7. ✅ 内链用 `<Link>`
8. ⚠️ 图片优化（当前 `next/image` 覆盖不完整，gallery 仍用 `<img>`）
9. ✅ sitemap + robots 完整

### SEO 需求分级

| 等级 | 页面类型 | 渲染模式 | 示例 |
|:--:|------|---------|------|
| **A 级** | 首页、博客、落地页、SEO 专题页 | SSG / ISR | `/`, `/blog/[slug]`, `/ai-loop-video` 等 |
| **B 级** | 用户个人主页 | SSR | `/profile` |
| **C 级** | 登录、注册、结账 | CSR | `/login`, `/signup`, `/checkout` |

---

## 常用命令

```bash
pnpm dev            # 本地开发（Turbopack，端口 3000）
pnpm build          # 生产构建
pnpm lint           # ESLint 检查（提交前必须执行，0 errors）
npx tsc --noEmit    # TypeScript 类型检查（0 errors）
```

---

## 文件修改规则（Windows 环境）

### 绝对禁止
- ❌ PowerShell `Get-Content` / `Set-Content` 修改 `.tsx/.ts` 文件
- ❌ `[System.IO.File]::WriteAllText()` 编码不可靠
- ❌ PowerShell `echo "value" | npx vercel env add`（引入 UTF-16 BOM）

### 必须使用
- ✅ Node.js `fs.readFileSync` + `fs.writeFileSync`（UTF-8 安全）
- ✅ Bash `printf 'value' | npx vercel env add` 推环境变量
- ✅ 批量修改 → 单文件金丝雀先验 → `git diff` 肉眼确认 → 扩展

> 详见 `action/quickopa/guide/experience/` 目录下四份排障文档。

---

## 部署流程

```bash
# 1. 本地预检（必须）
pnpm lint          # 必须 0 errors
npx tsc --noEmit   # 必须 0 errors

# 2. 提交 + 推送
git add . && git commit -m "..." && git push origin master

# 3. Vercel 生产部署
npx vercel --prod --yes --token $env:VERCEL_TOKEN
```

---

## 历史重构标签

| 标签 | 指向 | 说明 |
|------|------|------|
| `restructured-20260605` | `77d2ecf` | Phase 4/6/7/9 全部完成，lint 零错误 |
| `unstructured-20260605` | `bc0d958` | Phase 4.3 内链审计基线 |

---

## 关键文件索引

| 文件 | 用途 |
|------|------|
| `src/components/ui/breadcrumb.tsx` | 可复用视觉面包屑组件 |
| `src/lib/site-config.ts` | `SITE_URL` 定义（自动去除尾部斜杠） |
| `src/app/sitemap.ts` | 动态站点地图（56 条目） |
| `src/components/seo/` | JSON-LD Schema 组件库（11 个组件） |
| `eslint.config.mjs` | ESLint 平面配置（含 `no-restricted-syntax` 规则） |
| `next.config.ts` | CSP + Headers 配置 + 图片 remotePatterns |

---

## 关联文档

- `../../CLAUDE.md` — meta-workspace 级指引
- `../../action/quickopa/guide/deploy/Vercel CLI 终端操作指南.md` — Vercel 部署手册 (v2.0)
- `../../action/quickopa/guide/experience/README.md` — 部署故障诊断经验知识体系索引
- `../../action/quickopa/tecth_arch/agent-web-ops-prompt.md` — Agent SEO 修改九项强制规则
- `../../action/quickopa/tecth_arch/web_arch_render.md` — 五层渲染架构约束
- `prompts/dev_plan/sop/opa-exe/OPA_MASTER_TODO.md` — OPA 任务清单

---

**文档版本**: v1.0 | **创建日期**: 2026-06-05 | **作者**: Claude (督察书记)
