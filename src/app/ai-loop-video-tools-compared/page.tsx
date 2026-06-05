import Link from "next/link";
import { ArrowRight, CheckCircle2, DollarSign, Shield, Zap, Download, Star } from "lucide-react";
import LandingPageJsonLd from "@/components/seo/LandingPageJsonLd";
import Breadcrumb from "@/components/ui/breadcrumb";
import type { Metadata } from "next";

export const dynamic = "force-static";
export const revalidate = 86400;

export const metadata: Metadata = {
  title: "免费与付费 AI 循环视频工具对比 (2026) | LoopCanvas",
  description:
    "2026 年主流 AI 循环视频工具完整对比评测：LoopCanvas、Runway、Pika、Kling、Clideo 等。含价格、功能、输出质量的逐项对比和 ROI 分析。",
  alternates: { canonical: "/ai-loop-video-tools-compared" },
  openGraph: {
    title: "免费与付费 AI 循环视频工具对比 (2026) | LoopCanvas",
    description: "2026 年主流 AI 循环视频工具完整对比评测。价格、功能、输出质量逐项对比。",
    url: "/ai-loop-video-tools-compared",
    type: "website",
  },
};

const tools = [
  {
    name: "LoopCanvas AI",
    tier: "免费 + Pro $9.99/月",
    rating: "⭐⭐⭐⭐⭐",
    highlights: "原生循环引擎、Spotify Canvas 预设、WebM+MP4 双格式、商业授权含 Pro",
    bestFor: "专注循环视频的专业创作者",
  },
  {
    name: "Runway Gen-3",
    tier: "免费 + 付费 $15/月起",
    rating: "⭐⭐⭐⭐",
    highlights: "电影级画质、高级镜头控制、通用视频生成、需手动匹配循环",
    bestFor: "追求最高画质的视频创作者",
  },
  {
    name: "Pika Labs",
    tier: "免费 + 付费 $8/月起",
    rating: "⭐⭐⭐½",
    highlights: "创意风格多样、社区协作功能、循环能力不稳定、输出偏艺术化",
    bestFor: "实验性、艺术风格的创作者",
  },
  {
    name: "Kling AI",
    tier: "订阅制",
    rating: "⭐⭐⭐½",
    highlights: "运动一致性强、适合动作类视频、1080p 输出、无原生循环优化",
    bestFor: "动作序列和运动类视频",
  },
  {
    name: "Clideo",
    tier: "免费基础功能",
    rating: "⭐⭐⭐",
    highlights: "浏览器内操作、无需注册、仅支持已有视频的循环编辑、不含 AI 生成",
    bestFor: "已有视频素材的快速循环处理",
  },
];

const faqs = [
  { q: "免费的 AI 循环视频工具有什么限制？", a: "免费版通常有三项限制：水印（输出视频带品牌标识）、低分辨率（720p 或更低）、每日生成次数上限（3-10 次）。另外，几乎所有免费版都禁止商业使用。如果你的作品涉及客户项目、品牌内容或商业变现，需要付费版的商业授权。" },
  { q: "付费版值不值得？", a: "取决于你的使用场景。如果你每周制作 5 个以上的循环视频，付费版的效率和时间节省就足够覆盖月费。一个独立网页设计师每月做 5 个客户网站的循环背景，用免费工具每次需要重新生成 3-5 次（30-45 分钟），用付费工具一次生成即可（5 分钟）。按 $50/小时的自由职业费率计算，月省 $150 的时间成本，远超 $9.99 月费。" },
  { q: "哪个工具性价比最高？", a: "LoopCanvas AI 的 Pro 方案（$9.99/月）提供无限生成、HD 输出、商业授权和专属循环引擎，性价比在目前的专用循环视频工具中最优。如果只需要通用视频（不限于循环），Runway Gen-3 的画质更好但价格更高且无原生循环功能。" },
];

export default function AILoopVideoToolsComparedPage() {
  return (
    <>
      <LandingPageJsonLd
        pagePath="/ai-loop-video-tools-compared"
        pageName="免费与付费 AI 循环视频工具对比"
        description="2026 年主流 AI 循环视频工具完整对比评测。含价格、功能、输出质量的逐项对比和 ROI 分析。"
        faqs={faqs.map((f) => ({ question: f.q, answer: f.a }))}
      />

      <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="hero-glow-primary" />
        <div className="relative z-10 mx-auto max-w-4xl">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "AI 循环视频工具对比" }]} />
          <div className="text-center">
            <h1 className="font-heading text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              免费与付费 AI 循环视频工具{" "}
              <span className="gradient-text">全方位对比</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              2026 年主流 AI 循环视频工具完整评测。LoopCanvas、Runway、Pika、Kling、Clideo
              逐项对比，帮你根据需求、预算和使用场景做出正确的选择。
            </p>
          </div>
        </div>
      </section>

      <section className="bg-muted/30 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-heading text-2xl font-bold sm:text-3xl">选择前的三个关键问题</h2>
          <p className="mt-4 text-muted-foreground">
            在比较具体工具之前，先明确你的需求。这比直接看价格表重要得多。
          </p>
          <div className="mt-6 space-y-4">
            <div className="rounded-xl border border-border/50 bg-card p-5">
              <h3 className="font-semibold">1. 你需要的是&ldquo;通用视频生成&rdquo;还是&ldquo;专用循环视频生成&rdquo;？</h3>
              <p className="mt-2 text-sm text-muted-foreground">通用工具（Runway、Pika）可以生成高质量视频，但不保证无缝循环。你需要事后编辑帧匹配合成。专用工具（LoopCanvas）在生成阶段就内置了循环优化。如果你 80% 的产出是循环视频，专用工具节省的手动调整时间是显著的。</p>
            </div>
            <div className="rounded-xl border border-border/50 bg-card p-5">
              <h3 className="font-semibold">2. 你的输出是否涉及商业用途？</h3>
              <p className="mt-2 text-sm text-muted-foreground">如果是，免费版通常不可用（带水印且无商业授权）。即使你愿意去掉水印，违反服务条款可能在法律上带来更多麻烦。商业用户必须走付费方案。</p>
            </div>
            <div className="rounded-xl border border-border/50 bg-card p-5">
              <h3 className="font-semibold">3. 你需要哪些输出规格？</h3>
              <p className="mt-2 text-sm text-muted-foreground">Spotify Canvas 需要 9:16 竖屏 1080x1920。网站背景需要 16:9 横屏。如果你需要同时覆盖多种规格，选择一个支持多格式预设的工具可以省去大量手动导出设置。</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center font-heading text-2xl font-bold sm:text-3xl">2026 年主流工具逐项对比</h2>
          <div className="mt-10 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-border/50">
                  <th className="py-3 pr-4 font-semibold">工具</th>
                  <th className="py-3 pr-4 font-semibold">价格</th>
                  <th className="py-3 pr-4 font-semibold">评分</th>
                  <th className="py-3 pr-4 font-semibold">核心优势</th>
                  <th className="py-3 font-semibold">最适用</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/30">
                {tools.map((tool, i) => (
                  <tr key={i} className={i === 0 ? "bg-primary/5" : ""}>
                    <td className="py-3 pr-4 font-semibold">{tool.name}</td>
                    <td className="py-3 pr-4">{tool.tier}</td>
                    <td className="py-3 pr-4">{tool.rating}</td>
                    <td className="py-3 pr-4 text-sm">{tool.highlights}</td>
                    <td className="py-3 text-sm">{tool.bestFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-muted/30 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center font-heading text-2xl font-bold sm:text-3xl">功能维度深度分析</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {[
              { icon: Zap, title: "生成速度", text: "LoopCanvas 和 Pika 在 10-30 秒内完成一次生成。Runway 的质量更高但耗时也更长（30-60 秒）。免费版用户在实际使用中可能需要排队 2-5 分钟。付费版带有优先队列。" },
              { icon: Star, title: "输出质量", text: "Runway 在画质和细节还原上领先。LoopCanvas 的专长是循环的平滑度——首尾帧的融合质量优于所有通用工具。Kling 的运动连贯性突出。Pika 的艺术风格最具多样性。" },
              { icon: DollarSign, title: "性价比", text: "LoopCanvas Pro（$9.99/月）在功能/价格比上最优，提供无限生成和商业授权。Runway 起步 $15/月但不含专用循环功能。Pika $8/月但循环不稳定。" },
              { icon: Shield, title: "商业授权", text: "LoopCanvas Pro 和 Runway 付费版包含完整商业授权。Pika 的商业授权政策与订阅层级挂钩。Clideo 免费版仅限个人使用。在使用任何工具生成商业内容前，务必检查许可条款。" },
              { icon: Download, title: "输出格式", text: "LoopCanvas 提供 WebM + MP4 双格式和 Spotify Canvas 预设。其他工具主要输出 MP4，需要手动转换格式和调整分辨率。对于需要多平台分发的内容，内置格式支持可以减少大量导出工作。" },
              { icon: CheckCircle2, title: "循环可靠性", text: "这是专用工具和通用工具最大的区别点。LoopCanvas 内置的循环引擎保证了每次输出的首尾帧对齐。Runway、Pika、Kling 都不提供此保证，需要事后在视频编辑软件中手动处理循环点。" },
            ].map((item) => (
              <div key={item.title} className="glass-card rounded-2xl p-6">
                <item.icon className="h-6 w-6 text-primary" />
                <h3 className="mt-4 font-heading text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-heading text-2xl font-bold sm:text-3xl">ROI 计算：付费工具的投入产出比</h2>
          <p className="mt-4 text-muted-foreground">
            以一个月度使用场景为例：一位自由职业网页设计师每月为 5 个客户网站创建循环视频背景。
          </p>
          <div className="mt-6 space-y-3 text-sm">
            <div className="flex justify-between rounded-lg bg-card p-3"><span>使用免费工具的总耗时（每次 30 分钟，含重生成）</span><span className="font-semibold">150 分钟/月</span></div>
            <div className="flex justify-between rounded-lg bg-card p-3"><span>使用付费工具的总耗时（每次 5 分钟，一次生成）</span><span className="font-semibold">25 分钟/月</span></div>
            <div className="flex justify-between rounded-lg bg-primary/10 p-3"><span>节省的时间</span><span className="font-semibold text-primary">125 分钟/月 ≈ 2 小时</span></div>
            <div className="flex justify-between rounded-lg bg-primary/10 p-3"><span>按 $50/小时费率的时间价值</span><span className="font-semibold text-primary">$104/月</span></div>
            <div className="flex justify-between rounded-lg bg-primary/10 p-3"><span>LoopCanvas Pro 月费</span><span className="font-semibold text-primary">$9.99/月</span></div>
            <div className="flex justify-between rounded-lg bg-primary/10 p-3 text-base"><span className="font-semibold">ROI</span><span className="font-semibold text-primary">~10x</span></div>
          </div>
        </div>
      </section>

      <section className="bg-muted/30 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-heading text-2xl font-bold sm:text-3xl">常见问题</h2>
          <div className="mt-10 space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-xl border border-border/50 bg-card p-5">
                <h3 className="font-semibold">{faq.q}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl rounded-3xl bg-gradient-to-br from-brand-600 to-brand-800 px-8 py-16 text-center">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-white">体验专用循环视频工具</h2>
          <p className="mx-auto mt-4 max-w-lg text-white/80">
            免费试用 LoopCanvas，每日 5 次生成。不需要信用卡。
          </p>
          <Link href="/text-to-loop" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-base font-semibold text-brand-700 transition-colors hover:bg-white/90">
            Try Text-to-Loop <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
