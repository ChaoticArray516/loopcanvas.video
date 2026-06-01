#!/usr/bin/env node
/**
 * LoopCanvas AI — 样品视频批量生成脚本
 *
 * 使用 SiliconFlow Wan2.2-T2V-A14B 模型离线生成 12 个样品循环视频，
 * 保存到 public/samples/ 供 Gallery 页面和 Hero 区域使用。
 *
 * 用法:
 *   SILICONFLOW_API_KEY=sk-xxx node test/scripts/generate-samples.mjs
 *   # 或
 *   node test/scripts/generate-samples.mjs --key sk-xxx
 *
 * 输出:
 *   public/samples/
 *     nature-ocean-1.mp4
 *     nature-forest-1.mp4
 *     ... (共 12 个)
 *
 * 成本: ~$0.29 × 12 = ~$3.48 USD
 */

import { existsSync, createWriteStream } from "fs";
import { mkdir } from "fs/promises";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "../..");
const OUTPUT_DIR = join(ROOT, "public/samples");

// ─── 配置 ─────────────────────────────────────

const API_BASE = "https://api.siliconflow.cn/v1";
const SUBMIT_URL = `${API_BASE}/video/submit`;
const STATUS_URL = `${API_BASE}/video/status`;

const POLL = {
  initialDelayMs: 8_000,
  intervalMs: 5_000,
  maxAttempts: 60,
};

const COST_PER_VIDEO = 0.29; // USD

// 12 个样品视频配置
const SAMPLES = [
  // ── 自然场景 (6个) ──
  {
    filename: "nature-ocean-1.mp4",
    prompt:
      "Gentle ocean waves lapping against a sandy beach at golden hour, seamless looping motion, soft sunlight reflecting on water surface, peaceful and calming atmosphere, cinematic quality",
    seed: 42,
  },
  {
    filename: "nature-forest-1.mp4",
    prompt:
      "Sunlight filtering through dense green forest canopy, particles of dust floating in sunbeams, gentle breeze rustling leaves, seamless loop, serene woodland atmosphere",
    seed: 43,
  },
  {
    filename: "nature-sunset-1.mp4",
    prompt:
      "Dramatic sunset over a calm lake with mountain silhouettes, orange and purple sky reflecting on still water, clouds slowly drifting, seamless looping video",
    seed: 44,
  },
  {
    filename: "nature-rain-1.mp4",
    prompt:
      "Gentle rain falling on a window with blurred city lights bokeh outside, water droplets sliding down glass, cozy indoor atmosphere, seamless loop, cinematic mood",
    seed: 45,
  },
  {
    filename: "nature-snow-1.mp4",
    prompt:
      "Soft snowflakes falling in a quiet winter forest, bare tree branches covered in fresh snow, gentle snowfall motion, peaceful white landscape, seamless looping",
    seed: 46,
  },
  {
    filename: "nature-flowers-1.mp4",
    prompt:
      "Colorful wildflowers swaying gently in a meadow with butterflies fluttering around, soft spring sunlight, vibrant petals moving in breeze, seamless loop, dreamy atmosphere",
    seed: 47,
  },

  // ── 抽象艺术 (6个) ──
  {
    filename: "abstract-particle-1.mp4",
    prompt:
      "Glowing particles flowing in abstract spiral patterns against deep black background, neon blue and purple light trails, smooth continuous motion, futuristic digital art, seamless loop",
    seed: 100,
  },
  {
    filename: "abstract-neon-1.mp4",
    prompt:
      "Vibrant neon geometric shapes morphing and transforming on dark background, pink and cyan light rays intersecting, cyberpunk aesthetic, smooth transitions, seamless looping video",
    seed: 101,
  },
  {
    filename: "abstract-ink-1.mp4",
    prompt:
      "Colorful ink drops diffusing in water creating organic flowing patterns, purple and gold mixing in slow motion, abstract fluid art, mesmerizing continuous motion, seamless loop",
    seed: 102,
  },
  {
    filename: "abstract-geometric-1.mp4",
    prompt:
      "Minimalist geometric patterns rotating and tessellating, white lines on dark gradient background, clean modern design, hypnotic repetitive motion, seamless looping animation",
    seed: 103,
  },
  {
    filename: "abstract-fluid-1.mp4",
    prompt:
      "Smooth liquid metal surface with iridescent rainbow reflections, organic waves flowing across chrome texture, futuristic and elegant, continuous morphing motion, seamless loop",
    seed: 104,
  },
  {
    filename: "abstract-crystal-1.mp4",
    prompt:
      "Faceted crystal prisms refracting light into rainbow spectrum, slowly rotating and sparkling, dark background with dramatic lighting, magical and ethereal, seamless looping",
    seed: 105,
  },
];

// ─── 工具函数 ─────────────────────────────────

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function log(message) {
  const ts = new Date().toISOString().slice(11, 19);
  console.log(`[${ts}] ${message}`);
}

function getApiKey() {
  const envKey = process.env.SILICONFLOW_API_KEY;
  const cliKey = process.argv.includes("--key")
    ? process.argv[process.argv.indexOf("--key") + 1]
    : null;
  const key = cliKey || envKey;
  if (!key) {
    console.error(
      "❌ 错误: 请设置 SILICONFLOW_API_KEY 环境变量或使用 --key 参数"
    );
    console.error("   示例: SILICONFLOW_API_KEY=sk-xxx node test/scripts/generate-samples.mjs");
    process.exit(1);
  }
  return key;
}

// ─── API 调用 ─────────────────────────────────

async function submitJob(prompt, seed, apiKey) {
  const res = await fetch(SUBMIT_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "Wan-AI/Wan2.2-T2V-A14B",
      prompt,
      image_size: "720x1280",
      seed,
    }),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Submit failed [${res.status}]: ${text}`);
  }

  const data = await res.json();
  if (!data.requestId) {
    throw new Error("Submit response missing requestId");
  }
  return data.requestId;
}

async function checkStatus(requestId, apiKey) {
  const res = await fetch(STATUS_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ requestId }),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Status check failed [${res.status}]: ${text}`);
  }

  return res.json();
}

async function downloadVideo(url, filepath) {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Download failed [${res.status}]`);
  }

  await mkdir(dirname(filepath), { recursive: true });

  const fileStream = createWriteStream(filepath);
  const reader = res.body.getReader();

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    fileStream.write(Buffer.from(value));
  }

  fileStream.end();
  return new Promise((resolve, reject) => {
    fileStream.on("finish", resolve);
    fileStream.on("error", reject);
  });
}

// ─── 核心生成流程 ─────────────────────────────

async function generateOne(sample, apiKey, index, total) {
  const { filename, prompt, seed } = sample;
  const filepath = join(OUTPUT_DIR, filename);

  log(`[${index + 1}/${total}] 🎬 ${filename}`);
  log(`        Prompt: ${prompt.slice(0, 60)}...`);

  // 1. 提交任务
  const requestId = await submitJob(prompt, seed, apiKey);
  log(`        RequestId: ${requestId}`);

  // 2. 初始等待
  await sleep(POLL.initialDelayMs);

  // 3. 轮询状态
  for (let attempt = 1; attempt <= POLL.maxAttempts; attempt++) {
    const status = await checkStatus(requestId, apiKey);

    switch (status.status) {
      case "Succeed": {
        const videoUrl = status.results?.videos?.[0]?.url;
        if (!videoUrl) {
          throw new Error("Succeed but no video URL");
        }
        log(`        ✅ 生成成功 (${attempt} 次轮询)`);

        // 4. 下载视频
        log(`        ⬇️  下载中...`);
        await downloadVideo(videoUrl, filepath);
        log(`        💾 已保存: ${filename}`);
        return { filename, success: true, url: videoUrl };
      }

      case "Failed": {
        throw new Error(
          `Generation failed: ${status.reason || "unknown"}`
        );
      }

      case "InQueue":
      case "InProgress": {
        process.stdout.write(
          `\r        ⏳ 轮询中... ${attempt}/${POLL.maxAttempts} (${status.status})`
        );
        await sleep(POLL.intervalMs);
        break;
      }

      default: {
        throw new Error(`Unknown status: ${status.status}`);
      }
    }
  }

  throw new Error(`Timeout after ${POLL.maxAttempts} attempts`);
}

// ─── 主流程 ───────────────────────────────────

async function main() {
  console.log("=".repeat(60));
  console.log("LoopCanvas AI — 样品视频批量生成脚本");
  console.log("=".repeat(60));

  const apiKey = getApiKey();

  // 确保输出目录存在
  await mkdir(OUTPUT_DIR, { recursive: true });
  log(`输出目录: ${OUTPUT_DIR}`);

  // 过滤已存在的文件（支持断点续传）
  const todo = SAMPLES.filter((s) => {
    const exists = existsSync(join(OUTPUT_DIR, s.filename));
    if (exists) {
      log(`⏭️  跳过（已存在）: ${s.filename}`);
    }
    return !exists;
  });

  if (todo.length === 0) {
    console.log("\n✅ 所有样品视频已存在，无需生成。");
    return;
  }

  const skipped = SAMPLES.length - todo.length;
  const totalCost = todo.length * COST_PER_VIDEO;

  console.log(`\n📊 计划生成: ${todo.length} 个视频`);
  if (skipped > 0) console.log(`   跳过（已存在）: ${skipped} 个`);
  console.log(`   预计成本: ~$${totalCost.toFixed(2)} USD (~¥${(totalCost * 7.25).toFixed(2)} CNY)`);
  console.log(`   预计时间: ~${todo.length * 2}-${todo.length * 3} 分钟\n`);

  const results = { success: [], failed: [] };

  for (let i = 0; i < todo.length; i++) {
    console.log("-".repeat(60));
    try {
      const result = await generateOne(todo[i], apiKey, i, todo.length);
      results.success.push(result);
    } catch (err) {
      log(`❌ 失败: ${err.message}`);
      results.failed.push({ filename: todo[i].filename, error: err.message });
    }
    console.log();
  }

  // ─── 汇总 ───────────────────────────────────
  console.log("=".repeat(60));
  console.log("📋 生成报告");
  console.log("=".repeat(60));
  console.log(`✅ 成功: ${results.success.length}/${todo.length}`);
  if (results.failed.length > 0) {
    console.log(`❌ 失败: ${results.failed.length}`);
    for (const f of results.failed) {
      console.log(`   - ${f.filename}: ${f.error}`);
    }
  }
  if (skipped > 0) {
    console.log(`⏭️  跳过（已存在）: ${skipped}`);
  }
  console.log("=".repeat(60));

  // 非零退出码如果任何失败
  if (results.failed.length > 0) {
    process.exit(1);
  }
}

main().catch((err) => {
  console.error("💥 脚本异常:", err);
  process.exit(1);
});
