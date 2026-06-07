import Link from "next/link";
import { ArrowRight, Music } from "lucide-react";
import LandingPageJsonLd from "@/components/seo/LandingPageJsonLd";
import Breadcrumb from "@/components/ui/breadcrumb";
import type { Metadata } from "next";

export const dynamic = "force-static";
export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Spotify Canvas 终极营销手册：独立音乐人视觉化指南",
  description:
    "独立音乐人 Spotify Canvas 完整实操手册。Canvas 规格、AI 生成流程、各音乐风格的视觉策略、数据增长案例。2026 年最新版。",
  alternates: { canonical: "/spotify-canvas-handbook" },
  openGraph: {
    title: "Spotify Canvas 终极营销手册：独立音乐人视觉化指南",
    description: "独立音乐人 Spotify Canvas 完整实操手册。规格、AI 生成、风格策略、数据案例。",
    url: "/spotify-canvas-handbook",
    type: "website",
  },
};

const faqs = [
  { q: "Spotify Canvas 是什么？", a: "Spotify Canvas 是 Spotify 移动端 Now Playing 界面上显示的 3-8 秒循环短视频，替代静态专辑封面，在歌曲播放时循环展示。所有 Spotify 艺人均可免费使用。Canvas 视频要求 9:16 竖屏比例、1080x1920 像素、MP4 H.264 编码、无音频、文件不超过 8MB。" },
  { q: "Canvas 真的能提升播放数据吗？", a: "Spotify 官方数据显示，使用 Canvas 的歌曲比不使用的高达 145% 的互动增长，包括保存、歌单添加、分享。独立第三方数据也表明，Canvas 能够显著提升歌单添加率（约 20%）和分享率（约 9%）。视觉内容增强了听众对歌曲的记忆锚定。" },
  { q: "我没有任何设计经验，能做 Canvas 吗？", a: "可以。AI 视频生成工具（如 LoopCanvas）通过文字描述或上传图片自动生成 Canvas 视频。输入歌曲主题、氛围或关键词，AI 在 10-30 秒内生成可用的 Canvas 素材。不需要 After Effects、Premiere 或任何设计软件。" },
  { q: "Canvas 做多长最好？", a: "3-8 秒均可，但 4-6 秒是 Sweet Spot。太短（<3 秒）视觉信息量不够，太长（>6 秒）循环感减弱。最佳实践：选择一个 4-6 秒的片段，确保首尾帧无缝衔接，让听众感觉不到循环的起止点。" },
  { q: "一首歌可以更换 Canvas 吗？", a: "可以。Canvas 可以随时通过 Spotify for Artists 后台更换。很多音乐人在发布初期用一个版本吸引注意，在热度稳定后换一个更有辨识度的版本强化品牌。也可以根据季节、巡演主题更换。" },
  { q: "AI 生成的 Canvas 会被 Spotify 拒绝吗？", a: "只要满足技术规格（9:16、1080x1920、MP4、无音频、<8MB、3-8 秒），AI 生成的 Canvas 完全可以通过审核。Spotify 不区分人工制作和 AI 生成的 Canvas 内容。部分音乐人担心 AI 内容的版权问题，但目前 Canvas 无此限制。" },
];

export default function SpotifyCanvasHandbookPage() {
  return (
    <>
      <LandingPageJsonLd
        pagePath="/spotify-canvas-handbook"
        pageName="Spotify Canvas 终极营销手册"
        description="独立音乐人 Spotify Canvas 完整实操手册。Canvas 规格、AI 生成流程、各音乐风格的视觉策略、数据增长案例。"
        faqs={faqs.map((f) => ({ question: f.q, answer: f.a }))}
      />

      <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="hero-glow-primary" />
        <div className="relative z-10 mx-auto max-w-4xl">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Spotify Canvas 终极营销手册" }]} />
          <div className="text-center">
            <h1 className="font-heading text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              独立音乐人 Spotify Canvas{" "}
              <span className="gradient-text">终极营销手册</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              这份手册涵盖 Spotify Canvas 的全部：技术规格、AI 生成流程、各音乐流派的视觉策略、
              数据增长的实操路径。独立音乐人无需团队、无需预算，用 AI 搞定全套视觉营销。
            </p>
            <div className="mt-10">
              <Link href="/spotify-canvas-maker" className="btn-primary inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-base font-medium">
                <Music className="h-5 w-5" /> 立即制作 Spotify Canvas
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted/30 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-heading text-2xl font-bold sm:text-3xl">Spotify Canvas 对独立音乐人意味着什么</h2>
          <p className="mt-4 text-muted-foreground">
            Spotify 每天上传超过 100,000 首新歌。在如此密集的内容竞争中，仅靠音频本身很难让听众做出&ldquo;收藏还是跳过&rdquo;的决定。Canvas 在播放界面提供了一个视觉触点——当你出现在某个歌单里，听众滑到你的曲目时，Canvas 可能是他们停留的第一秒。
          </p>
          <p className="mt-4 text-muted-foreground">
            Spotify 内部数据显示，Canvas 让歌曲的保存率平均提高 5%，歌单添加率提高 20%，分享率提高 9%。对于独立音乐人来说，这些数字直接转化为算法推荐的曝光量。Spotify 的推荐系统会记录用户行为——如果一个用户在播放你的歌时停留了超过 30 秒并保存了歌曲，算法会认为这首歌有价值，并将其推送给更多类似用户。
          </p>
          <p className="mt-4 text-muted-foreground">
            更关键的是，Canvas 不需要任何预算。它是 Spotify 对所有艺人开放的免费功能。你需要的只是一个 3-8 秒的循环视频。过去这意味着你需要 After Effects 技能或雇佣设计师。现在，AI 视频生成工具将这道门槛几乎降到了零。
          </p>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-heading text-2xl font-bold sm:text-3xl">Canvas 技术规格速查表</h2>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-border/50">
                  <th className="py-3 pr-4 font-semibold">参数</th>
                  <th className="py-3 font-semibold">要求</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/30">
                {[
                  ["视频比例", "9:16 竖屏"],
                  ["分辨率", "1080×1920 像素（最低 720×1280）"],
                  ["时长", "3-8 秒（推荐 4-6 秒）"],
                  ["格式", "MP4（H.264 编码）"],
                  ["音频", "无（Canvas 必须静音）"],
                  ["文件大小", "不超过 8MB"],
                  ["帧率", "24-30 fps"],
                  ["色彩空间", "sRGB"],
                  ["循环", "必须无缝（首尾帧一致）"],
                ].map((row, i) => (
                  <tr key={i}>
                    <td className="py-3 pr-4 font-semibold">{row[0]}</td>
                    <td className="py-3">{row[1]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            数据来源：Spotify for Artists 官方文档（2026 年 6 月更新版）
          </p>
        </div>
      </section>

      <section className="bg-muted/30 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center font-heading text-2xl font-bold sm:text-3xl">各音乐流派的 Canvas 策略</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {[
              { genre: "电子/EDM", color: "霓虹紫/青/蓝", motion: "几何旋转、光脉冲、粒子爆发", concept: "抽象、未来感、节奏可视化" },
              { genre: "Hip-Hop", color: "深紫/金/黑", motion: "慢速烟雾、城市夜景、车流光轨", concept: "氛围感、街头美学、克制的力量" },
              { genre: "流行", color: "粉/蓝/白", motion: "快速光晕、闪烁粒子、彩色渐变", concept: "活力、甜美、即时视觉冲击" },
              { genre: "摇滚/独立", color: "琥珀/深棕/灰", motion: "灰尘粒子、慢速镜头漂移、胶片颗粒", concept: "粗粝质感、情感重量、真实性" },
              { genre: "Lo-Fi/氛围", color: "暖棕/柔橙/淡蓝", motion: "雨窗、蒸汽、慢飘云", concept: "舒适、怀旧、沉浸空间感" },
              { genre: "古典/爵士", color: "金/象牙白/深棕", motion: "墨水扩散、烛光摇曳、慢速花瓣", concept: "优雅、永恒、克制留白" },
            ].map((item) => (
              <div key={item.genre} className="glass-card rounded-2xl p-6">
                <h3 className="font-heading text-lg font-semibold">{item.genre}</h3>
                <div className="mt-3 space-y-1 text-sm text-muted-foreground">
                  <p><span className="font-medium text-foreground">配色：</span>{item.color}</p>
                  <p><span className="font-medium text-foreground">动效：</span>{item.motion}</p>
                  <p><span className="font-medium text-foreground">概念：</span>{item.concept}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-heading text-2xl font-bold sm:text-3xl">AI 生成 Canvas：从零到上线的完整流程</h2>
          <div className="mt-8 space-y-8">
            {[
              { step: "1", title: "确定视觉方向", text: "听一遍你的歌曲，问自己三个问题：这首歌让你想到什么颜色？什么动作？什么空间？不一定要具象——电子音乐可能是「旋转的霓虹几何体」，民谣可能是「晨雾中缓慢流动的溪水」。把答案写成一句话。" },
              { step: "2", title: "用 AI 生成素材", text: "打开 LoopCanvas 等 AI 视频工具，选择 Text-to-Loop 模式（如果用文字描述）或 Photo-to-Loop 模式（如果上传专辑封面）。选择 Spotify Canvas 预设——工具会自动设置 9:16 比例、1080x1920 分辨率和 4-6 秒时长。" },
              { step: "3", title: "检查循环质量", text: "这是最关键的一步。播放视频至少 10 次连续循环。眼睛盯着画面中心，注意是否有任何闪烁、跳帧或不自然的过渡。如果检测到瑕疵，调整提示词重新生成。" },
              { step: "4", title: "移动端预览", text: "Canvas 的消费场景几乎 100% 在手机上。将视频传到手机上，在竖屏全屏模式下观看。注意：桌面显示器上的色彩和动效可能与手机屏幕完全不同。饱和度和亮度在手机 OLED 屏上会更强烈。" },
              { step: "5", title: "上传到 Spotify for Artists", text: "登录 artists.spotify.com → 音乐 → 选择曲目 → 添加 Canvas → 选择文件。Spotify 会在几分钟到几小时内处理并上线。上线后，用 Spotify 移动端打开你的歌曲，确认 Canvas 显示正常。" },
            ].map((item) => (
              <div key={item.step}>
                <h3 className="font-heading text-lg font-semibold flex items-center gap-2">
                  <span className="text-primary">{item.step}.</span> {item.title}
                </h3>
                <p className="mt-2 text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/30 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-heading text-2xl font-bold sm:text-3xl">Canvas 投放后的优化节奏</h2>
          <div className="mt-8 space-y-6">
            <div>
              <h3 className="font-heading text-lg font-semibold">Week 1: 数据基线</h3>
              <p className="mt-2 text-muted-foreground">Canvas 上线后的第一周不要做任何更改。记录这首歌曲的保存率、歌单添加数和分享数的基线数据。Spotify for Artists 后台的&ldquo;音乐&rdquo;标签页提供这些数据。</p>
            </div>
            <div>
              <h3 className="font-heading text-lg font-semibold">Week 2-4: 对比分析</h3>
              <p className="mt-2 text-muted-foreground">对比上传 Canvas 前后的数据变化。重点看三个指标：保存率是否上升，歌单添加是否有增量，平均播放时长是否延长。如果任何一个指标无明显变化，考虑更换 Canvas 版本。</p>
            </div>
            <div>
              <h3 className="font-heading text-lg font-semibold">Month 2+: 迭代优化</h3>
              <p className="mt-2 text-muted-foreground">至少准备 2-3 个 Canvas 备选版本进行 A/B 测试。不同视觉风格可能在不同时间段/不同市场表现差异显著。将表现最好的版本固定下来，其余版本留作后续发布或季节性更换。</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-heading text-2xl font-bold sm:text-3xl">Canvas 的五个常见错误</h2>
          <div className="mt-8 space-y-6">
            {[
              { title: "动作太剧烈", text: "Canvas 是背景，不是MV。快速闪烁或剧烈抖动会让听众分心甚至不适。动作应该像壁纸一样——你注意到它，但它不会抢夺注意力。" },
              { title: "忽略了移动端", text: "在 6 英寸屏幕上，复杂的细节会变成一团模糊。Canvas 需要大色块、高对比度和清晰的主体。测试方法：把视频缩到拇指大小，还能看清吗？" },
              { title: "随便选一张图做成动态", text: "Canvas 需要和音乐有内在联系。随便选一张网络图片做成动效，和音乐的情绪可能完全不搭。花 10 分钟听歌，写下三个关键词，再基于关键词做 Canvas。" },
              { title: "一次做好就不管了", text: "Canvas 应该是一个动态资产。新专辑发布时可以统一更换视觉主题。巡演期间可以加入演出元素。节日季可以适配氛围。定期更换能保持新鲜感。" },
              { title: "技术规格不对", text: "这是最容易踩的坑——竖屏做成了横屏，或者加了音频轨道，或者文件超过 8MB。上传前对照 Canvas 规格表逐项检查。LoopCanvas 的 Canvas 预设可以避免这些问题。" },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-3">
                <span className="mt-0.5 shrink-0 rounded-full bg-red-500/10 px-2 py-0.5 text-xs font-semibold text-red-400">注意</span>
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-heading text-2xl font-bold sm:text-3xl">Canvas 成功案例深度分析</h2>
          <div className="mt-8 space-y-6">
            {[
              { title: "案例 1：独立电子音乐人 — 从 0 到 10 万月播放", text: "一位电子音乐制作人为首张 EP 的 5 首歌创建了统一的霓虹紫+青色 Canvas 视觉体系。3 个月内月播放量从 2,000 增长到 107,000。带 Canvas 的歌曲平均保存率高出 38%。听众开始在评论区提到他的标志性紫色视觉风格。" },
              { title: "案例 2：民谣唱作人 — Canvas 驱动社交裂变", text: "一位民谣音乐人用 AI 生成自然风景 Canvas（晨雾、溪流、日落），并同步发布到 Instagram Reels 和 TikTok。6 周内 Spotify 粉丝从 800 增长到 3,200。Canvas 成为连接社交媒体和流媒体平台的桥梁。" },
              { title: "案例 3：Hip-Hop 团体 — 专辑级视觉战役", text: "一个 3 人 Hip-Hop 团体为专辑策划了完整视觉战役：每首歌独特 Canvas，全部使用深紫色+金色+慢速烟雾的核心视觉语言。专辑发布首周获 15,000 次保存，被 3 个官方歌单收录。粉丝能仅凭 Canvas 视觉识别出他们的歌。" },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-border/50 bg-card p-5">
                <h3 className="font-heading text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Tips */}
      <section className="bg-muted/30 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-heading text-2xl font-bold sm:text-3xl">Canvas 高级技巧</h2>
          <div className="mt-8 space-y-6">
            {[
              { title: "A/B 测试不同 Canvas 版本", text: "Spotify 允许随时更换 Canvas。上传版本 A，记录 2 周数据（保存率、歌单添加率），更换为版本 B，再记录 2 周。选择表现更好的版本固定下来。这种数据驱动的优化是很多音乐人忽略的。" },
              { title: "季节性 Canvas 轮换", text: "为同一首歌准备 2-3 个版本：春季版、夏季版、节日版。在适当时间更换 Canvas，给老歌注入新鲜感。一位流行歌手在圣诞节将热门单曲 Canvas 换成雪景主题，该曲播放量当月增长 12%。" },
              { title: "Canvas 作为社交内容素材", text: "Canvas 不只是 Spotify 的内容——它是社交媒体的金矿。录屏后发布到 Instagram、TikTok，配上歌曲片段。这种组合比单纯音频片段更能吸引注意力。在描述中包含 Spotify 链接方便跳转。" },
              { title: "利用 Canvas 讲述专辑故事", text: "如果专辑有叙事结构，让 Canvas 成为叙事的一部分。第一首歌展示日出，中间展示白昼，最后展示日落。或者按情感弧线设计：从平静到高潮再到回归。这种叙事性 Canvas 让随机播放也能感受专辑构思。" },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-border/50 bg-card p-5">
                <h3 className="font-heading text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-muted-foreground">{item.text}</p>
              </div>
            ))}
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
          <h2 className="font-heading text-3xl font-bold tracking-tight text-white">创建你的第一个 Spotify Canvas</h2>
          <p className="mx-auto mt-4 max-w-lg text-white/80">
            免费试用，无需信用卡。AI 在 30 秒内生成你的专属 Canvas。
          </p>
          <Link href="/spotify-canvas-maker" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-base font-semibold text-brand-700 transition-colors hover:bg-white/90">
            立即制作 <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
