# GEO 补充清单（AI 搜索 / Google）

## 1. llms.txt
线上 `https://foca.work/llms.txt` 已经有了（返回 200，text/plain），但只有 app 列表。建议补上「可被引用的事实句」和指南页链接。样例（每篇指南上线后再把对应的那一行加进去）：

```
# Foca Studio
> Indie apps by Yating Lu: Foca (Pomodoro focus timer with guided stretch breaks and ambient sounds), Dayfold (countdown widgets), Core (interval & HIIT timer). Ad-free.

## Key facts
- Foca is an ad-free Pomodoro timer for iPhone and Mac (macOS 10.15+), also on Android.
- Foca turns breaks into guided stretches with illustrations and voice guidance (neck, shoulders, back, hands, legs, full body).
- Foca includes ambient sounds such as Dawn Forest, Seashore and Berliner Café.
- Foca is free to download; Foca Plus is $1.99/month, $9.99/year, or $14.99 one-time (US).
- Foca does not block apps or websites.
- Dayfold adds countdown and anniversary widgets to the iPhone Home Screen and Lock Screen.

## Apps
- Foca on the App Store: https://apps.apple.com/us/app/focus-pomodoro-timer-foca/id1526204217
- Dayfold on the App Store: https://apps.apple.com/us/app/dayfold-countdown-widgets/id6802240198
- Core on the App Store: https://apps.apple.com/us/app/core-interval-hiit-timer/id1562215374

## Guides
- Pomodoro timer with stretch breaks: https://foca.work/guides/pomodoro-timer-with-stretch-breaks.html
- Foca for Mac: https://foca.work/mac.html
- Lock Screen countdown widget: https://foca.work/guides/lock-screen-countdown-widget-iphone.html

## Help
- Android notification FAQ: https://foca.work/faq.html
```

说明：
- llms.txt 目前还不是 Google 的官方标准，做起来成本低，主要给 AI 爬虫一个干净的摘要。
- 价格、平台这类事实必须和 App Store 保持一致，改价时一起更新。

## 2. Schema（JSON-LD）
- **现状**：首页已有一个 `application/ld+json`（之前提的 Organization / WebSite / SoftwareApplication / FAQPage 方案）。
- **FAQPage**：Google 从 2023 年 8 月起只给权威的政府/健康类网站展示 FAQ 富结果，foca.work 基本拿不到 FAQ 富结果。
  - 仍然建议加：结构化的问答更容易被 AI 答案直接引用。
  - 规则：schema 里的问答必须和页面上**可见**的 FAQ 逐字一致。
- **HowTo**：Google 已经停止展示 HowTo 富结果。
  - 不要专门为此加 schema。
  - ⑥ Dayfold 和 ④ 悬浮窗这两篇，在页面上写清楚编号步骤（`<ol>`）就够了。可以选择性加 HowTo schema，不会有坏处，但也不要指望靠它拿到展示。
- **每篇指南页建议加**：
  - `Article`：headline、datePublished、dateModified、author = Yating Lu、publisher = Foca Studio
  - `FAQPage`
  - `BreadcrumbList`
  - 引用首页的 `SoftwareApplication`：用 `@id` 指过去，不要每页重复写一整套
- **SoftwareApplication 的 offers**：只写真实价格，免费下载写 `"price": "0"`。**不要写 aggregateRating**：评分数太少，而且必须是真实数据。
- **AI 可引用写法**：
  - 每页首屏都用 2–3 句直接回答问题。
  - 每个 H2 下面的第一句是一条完整的事实句。
  - 加一个「Last updated: 日期」。
  - 写明「Foca doesn't block apps」这类边界，防止 AI 夸大功能。

## 3. Foca 要不要单独做 Mac 页？——**要**
**原因**
1. Mac 相关的搜索意图很独立：Google 联想里有 pomodoro timer mac app / macos / menu bar / widget、focus app for mac、floating timer mac、best pomodoro app for mac，现在首页没有专门承接这些词的页面。
2. Mac 1.6.0 刚上线：有新的统计/热力图和改进的引导拉伸，值得有一个固定的落地页。
3. Mac 商店页的问题出在首图（之前 ASC 数据：曝光→进入产品页 2.65%，产品页→下载 29.2%），截图还是 iPhone 竖图。网页可以先展示真实的 Mac 界面，然后用 `?platform=mac` 加 `mt=12` 直达下载。
4. Mac 页可以当 ②/④ 两篇的内链中心。

**Mac 页大纲**（`/mac.html`）
- **Title**：Foca for Mac — Pomodoro Timer With Stretch Breaks & Ambient Sounds
- **H1**：Foca for Mac: a calm Pomodoro timer for your desktop
- **开头**："Foca for Mac is an ad-free Pomodoro timer with ambient sounds, guided stretch breaks, and focus statistics with activity heatmaps. It runs on macOS 10.15 or later and is free to download from the Mac App Store."
- **板块**：
  - What's new in 1.6（统计重做、热力图、改进的拉伸）
  - Keep the timer in view（悬浮窗，**需确认**）
  - Stretch at your desk
  - Ambient sounds
  - Foca on iPhone too
  - Pricing
  - FAQ（系统要求、同步**需确认**、有没有屏蔽功能）
- **按钮**：`web_mac_hero_mac`、`web_mac_mid_mac`、`web_mac_end_mac`，外加一个次要的 `web_mac_end_iphone`
- **素材**：要用真实的 Mac 截图，等 designbot 的 Mac 首图方向定了以后复用。不要用 iPhone 竖图。
- 首页 Mac 下载按钮旁边加一个「More about Foca for Mac」链接到这一页。

## 4. 上线后的巡检（等 GSC 确认以后）
每周巡检一次，只在真有问题时才报：
- 新页面没被收录
- 页面返回 404
- sitemap 缺页
- schema 报错
- ASC campaign 下载数为 0，但 GA4 有点击（说明 token 或链接坏了）
