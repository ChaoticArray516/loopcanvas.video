import Link from "next/link";
import { ArrowRight, Lightbulb, Music, Globe, Share2, Paintbrush, Store, Presentation, Gamepad2 } from "lucide-react";
import LandingPageJsonLd from "@/components/seo/LandingPageJsonLd";
import Breadcrumb from "@/components/ui/breadcrumb";
import type { Metadata } from "next";

export const dynamic = "force-static";
export const revalidate = 86400;

export const metadata: Metadata = {
  title: "AI 循环视频的 10 个创意应用场景",
  description:
    "AI 循环视频在音乐、电商、网页设计、教育、数字艺术等 10 个领域的具体应用案例。每个场景附带实操建议和技术规格。",
  alternates: { canonical: "/ai-loop-video-applications" },
  openGraph: {
    title: "AI 循环视频的 10 个创意应用场景",
    description: "AI 循环视频在音乐、电商、网页设计等 10 个领域的具体应用案例和技术规格。",
    url: "/ai-loop-video-applications",
    type: "website",
  },
};

const scenes = [
  { icon: Music, title: "Spotify Canvas 音乐可视化", text: "流媒体时代，歌曲的视觉伴随体验直接影响播放时长和保存率。Canvas 让独立音乐人用极低成本（一次 AI 生成，永久使用）获得唱片公司级的视觉包装。实操建议：为每首单曲创建专属 Canvas，保持同一张专辑内的色彩一致性建立视觉品牌。规格：9:16、4-6 秒、1080x1920、无音频。" },
  { icon: Globe, title: "网站 Hero 背景", text: "全屏循环视频作为网站首屏背景可将页面停留时间提升 20-30%。适合 SaaS 产品首页、设计师作品集、品牌官网。实操建议：选择抽象渐变或慢速自然场景，文件压缩到 3MB 以内，WebM 格式，添加 poster 图片和 prefers-reduced-motion 查询。避免高对比度图案和快速运动。" },
  { icon: Share2, title: "社交媒体内容引擎", text: "各平台算法对循环视频高度友好。TikTok 的 3 秒循环被重复观看 10 次会记录为 30 秒观看时长，触发算法强推。Instagram Reels 同理。实操建议：一次生成多个变体，按 9:16（TikTok/Reels）、1:1（Instagram Feed）、16:9（YouTube）分发。" },
  { icon: Store, title: "电商产品 360° 展示", text: "将静态产品图片转为缓慢旋转或细节流动的循环视频。服饰的布纹质感、电子产品的光泽变化、家居的材纹细节都能通过微动效传达。实操建议：上传高质量产品白底图，选择 Photo-to-Loop 模式，动画强度保持 15-25% 避免失真。电商平台通常支持 MP4 上传。" },
  { icon: Paintbrush, title: "数字艺术与 NFT", text: "AI 循环视频正成为数字艺术新媒介。艺术家用它拓展静态作品的边界——画中的水流动、天空的云漂移、人物的发丝飘动。实操建议：从高质量原作扫描开始（至少 300 DPI），Photo-to-Loop 保留原作风格，NFT 平台如 Foundation 和 SuperRare 支持 MP4 格式。" },
  { icon: Presentation, title: "演示文稿与 Keynote", text: "在商业计划书和行业演讲中加入微动效背景，视觉专业度立刻提升一个层级。实操建议：每页选择同一色系的循环背景保持整体感，动效速度设置极慢（如缓慢飘移的粒子），避免抢夺文字内容的注意力。16:9 比例与投影仪最佳兼容。" },
  { icon: Gamepad2, title: "游戏素材与动态壁纸", text: "独立游戏开发者用 AI 循环视频生成菜单背景、加载画面和过场动画。手机动态壁纸也是热门应用——用户将抽象的循环视频设为锁屏。实操建议：游戏素材匹配整体美术风格（像素风、写实、扁平），动态壁纸建议 1080x1920 竖屏。" },
  { icon: Lightbulb, title: "活动视觉与舞台背景", text: "线下活动、演唱会、会议舞台的 LED 背景墙越来越多使用 AI 生成内容。实操建议：生成高分辨率（至少 1080p）的循环视频，导出 15-60 秒的长循环版本适配不同节目时长，暗色系背景在 LED 屏上显示效果最佳。" },
  { icon: Globe, title: "数字标牌与店铺屏显", text: "零售店、餐厅、酒店大堂的竖屏显示需要不间断播放的视觉内容。循环视频天生适配这个场景——永远不需要手动重启或加载。实操建议：导出最高分辨率（4K），选择品牌主色调，添加品牌 Logo 水印。" },
  { icon: Share2, title: "在线教育与课程背景", text: "录播课程、直播教学、在线分享中，纯色背景枯燥，实景背景分散注意力。微动效抽象背景是最好的解决方案。实操建议：选择极简的渐变或几何微动效（如缓慢旋转的渐变圆环），色彩柔和，运动幅度极小。" },
];

const faqs = [
  { q: "不同场景的循环视频规格一样吗？", a: "不一样。每个平台有自己的最佳规格：Spotify Canvas 需要 1080x1920 竖屏 3-8 秒，网站背景推荐 1920x1080 横屏 3-10 秒，Instagram Reels 用 1080x1920 竖屏 3-15 秒，TikTok 用 1080x1920 竖屏 3-5 秒。LoopCanvas 提供每个平台的预设，无需手动设置。" },
  { q: "我可以同一个循环视频用在多个场景吗？", a: "可以，但需要调整分辨率和比例。一个 16:9 的网站背景不能直接用作 Spotify Canvas（需要 9:16）。建议生成时选择最高分辨率，然后用视频编辑工具裁剪为各平台所需的尺寸。或者在 AI 工具中选择多格式批量导出。" },
  { q: "哪些场景需要商业授权？", a: "任何涉及商业用途的场景——客户网站、电商产品、广告投放、品牌社交媒体、商业演示——都需要商业授权。免费版通常只允许个人、非商业使用。LoopCanvas Pro 提供全商业授权。" },
];

export default function AILoopVideoApplicationsPage() {
  return (
    <>
      <LandingPageJsonLd
        pagePath="/ai-loop-video-applications"
        pageName="AI 循环视频的 10 个创意应用场景"
        description="AI 循环视频在音乐、电商、网页设计、教育、数字艺术等 10 个领域的具体应用案例。"
        faqs={faqs.map((f) => ({ question: f.q, answer: f.a }))}
      />

      <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="hero-glow-primary" />
        <div className="relative z-10 mx-auto max-w-4xl">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "AI 循环视频的 10 个创意应用场景" }]} />
          <div className="text-center">
            <h1 className="font-heading text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              AI 循环视频的{" "}
              <span className="gradient-text">10 个创意应用场景</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              从音乐可视化到电商展示，从数字艺术到舞台背景。每个场景附带实操建议和技术规格，
              让你在 5 分钟内找到适合自己的用法。
            </p>
          </div>
        </div>
      </section>

      {scenes.map((scene, i) => (
        <section key={i} className={`px-4 py-12 sm:px-6 lg:px-8 ${i % 2 === 1 ? "bg-muted/30" : ""}`}>
          <div className="mx-auto max-w-3xl">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-border/50 bg-card">
                <scene.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium text-primary">场景 {i < 9 ? `0${i + 1}` : i + 1}</p>
                <h2 className="mt-1 font-heading text-xl font-bold">{scene.title}</h2>
                <p className="mt-3 text-muted-foreground">{scene.text}</p>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Decision Framework */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-heading text-2xl font-bold sm:text-3xl">场景选择决策框架</h2>
          <div className="mt-8 space-y-6">
            {[
              { title: "音乐创作者 → 从 Spotify Canvas 开始", text: "投入产出比最高的起点。免费、30 秒生成、直接影响流媒体数据。从最热门的 3 首歌开始，建立统一视觉品牌，然后扩展到整张专辑。" },
              { title: "品牌/企业 → 从网站背景开始", text: "将静态首页转变为动态品牌体验。选择与品牌色匹配的抽象渐变，生成一次即可永久使用。通常可以看到 20-30% 的页面停留时间提升。" },
              { title: "内容创作者 → 从社交媒体开始", text: "3-5 秒循环被重复观看 10 次等于 30-50 秒观看时长，算法将其解读为高质量内容。从你最擅长的内容领域开始，批量生成 5-10 个循环测试受众偏好。" },
              { title: "电商卖家 → 从产品展示开始", text: "选择 3-5 个最畅销产品生成展示循环。A/B 测试显示带视频的产品页转化率提升 30-80%，退货率降低 25%。从视觉上最能受益的品类开始。" },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-border/50 bg-card p-5">
                <h3 className="font-heading text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Repurposing */}
      <section className="bg-muted/30 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-heading text-2xl font-bold sm:text-3xl">跨场景内容复用策略</h2>
          <p className="mt-4 text-muted-foreground">
            最高效的 loop video 策略不是为每个场景单独创作，而是建立一个核心视觉资产库，根据不同平台需求进行适配。生成时选择最高分辨率（如 1920x1920 正方形），然后分别裁剪为 9:16（竖屏社交）、16:9（横屏网站/演示）和 1:1（方形电商）。这样一次创作，多平台分发，最大化视觉资产的价值。
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead><tr className="border-b border-border/50"><th className="py-3 pr-4 font-semibold">核心素材</th><th className="py-3 pr-4 font-semibold">平台 1</th><th className="py-3 pr-4 font-semibold">平台 2</th><th className="py-3 pr-4 font-semibold">平台 3</th><th className="py-3 font-semibold">平台 4</th></tr></thead>
              <tbody className="divide-y divide-border/30">
                {[["1080p 主循环","Spotify Canvas","Instagram Reels","网站背景","YouTube Shorts"],["产品动画","电商产品页","社交媒体广告","邮件营销","数字标牌"],["品牌背景","网站 Hero","演示文稿","Zoom 背景","活动投影"],["音乐可视化","Spotify Canvas","TikTok","演出背景","MV 片段"]].map((row,i)=>(<tr key={i}>{row.map((cell,j)=>(<td key={j} className={j===0?'font-semibold py-3 pr-4':'py-3 pr-4'}>{cell}</td>))}</tr>))}
              </tbody>
            </table>
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
          <h2 className="font-heading text-3xl font-bold tracking-tight text-white">开始你的第一个 AI 循环视频</h2>
          <p className="mx-auto mt-4 max-w-lg text-white/80">
            免费试用，每日 5 次生成。不需要信用卡。
          </p>
          <Link href="/text-to-loop" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-base font-semibold text-brand-700 transition-colors hover:bg-white/90">
            Try Text-to-Loop <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
