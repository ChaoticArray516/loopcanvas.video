# OpenRouter API — LoopCanvas AI 调用架构

> 生成依据: SEO_TECH_SPEC.md §2 + pipeline_1.md Phase 4a

## 架构概览

```
[Browser] → fetch("/api/generate") → [Next.js Route Handler]
                                         ↓
                                   creditGuard()
                                   (auth check + credit deduct)
                                         ↓
                                   OpenRouter API
                                   https://openrouter.ai/api/v1/chat/completions
                                         ↓
                            ┌────────────┼────────────┐
                            ↓            ↓            ↓
                          Primary    Fallback 1   Fallback 2
```

## 模型降级链 (5 个 Scene)

| Scene | Primary → Fallback 1 → Fallback 2 |
|-------|-----------------------------------|
| `text_line_art` | flux.2-klein-4b → seedream-4.5 → riverflow-v2-fast |
| `text_with_english` | gpt-image-1 → gemini-3.1-flash-image → gemini-2.5-flash-image |
| `photo_to_line` | gemini-2.5-flash-image → seedream-4.5 → flux.2-pro |
| `premium_complex` | flux.2-max → gemini-3-pro-image |
| `vector_style` | recraft-v4 → flux.2-max |

## 降级策略

- 402 (Payment Required) / 429 (Rate Limit) / 503 (Service Unavailable) → 指数退避 (`1000 * 2^attempt` ms) → 重试同模型
- 其他错误 → 跳过当前模型，切下一个
- 全部模型失败 → 返回 500 `"All fallback models failed"`

## 环境变量清单

| 变量 | 必需 | 说明 |
|------|------|------|
| `OPENROUTER_API_KEY` | ✅ | sk-or-v1-... 格式 |
| `OPENROUTER_HTTP_REFERER` | 否 | 默认 `https://loopcanvas.video` |
| `OPENROUTER_SITE_NAME` | 否 | 默认 `LoopCanvas AI` |

## API Routes

| Route | Method | Auth | 说明 |
|-------|--------|------|------|
| `/api/generate` | POST | creditGuard | text-to-loop 生成 |
| `/api/photo-to-line` | POST | creditGuard | image-to-loop 生成 |
| `/api/credit-status` | GET | Session | 返回 remaining/plan/resetAt |

## Vercel 部署注意事项

- **env var 写入**: 仅用 bash `printf 'value' | vercel env add KEY production --force`，禁用 PowerShell pipe（BOM 污染）
- **deploy 后验证**: `vercel env ls production` 数量对比 `.env.local`
- **首次部署后**: 提交 sitemap 到 Google Search Console

## 成本估算

基于 OpenRouter 定价 (2026-05):
- Free 用户: 3 次/天 × 30 天 = 90 次/月，约 $0.10–0.30/月
- Pro 用户: 上限 2000 次/月，约 $2–6/月
- 全量 1000 MAU 估算: ~$200–500/月
