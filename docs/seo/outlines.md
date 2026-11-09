# 前 6 篇页面大纲

## 通用规则
- **URL**：沿用站点现有的 `.html` 风格，放在 `/guides/` 下，例如 `https://foca.work/guides/pomodoro-timer-with-stretch-breaks.html`。每篇都要写进 `sitemap.xml` 和 `llms.txt`。
- **下载按钮**：每页三处，用和首页相同的 `<a class="badge" data-platform="…" data-campaign="…">` 写法。
  - 首屏：开头回答下面
  - 正文中段：讲完核心功能/对比表之后
  - 页尾 CTA
- **campaign 命名**：沿用线上格式 `web_<页面>_<位置>_<平台>`（线上现有例子：`web_home_hero_iphone`、`web_home_hero_mac`）。
  - 位置：`top` / `mid` / `end`
  - 平台：`iphone` / `mac`
  - 例子：`web_stretch_top_iphone`
  - ct 最长 40 个字符，以下命名都不超。
  - `PROVIDER_TOKEN` 填上之后，`home.js` 会自动加上 `pt` / `ct` / `mt`（Mac 是 `mt=12`，iPhone 是 `mt=8`）。新页面也要引入同一个 `js/home.js`（或者把这段抽成公共 js）。
- **事实**：Foca 的功能只写 App Store 上已经写明的：自定义专注时长、Auto-Run、环境音（Dawn Forest、Seashore、Berliner Café 等）、带插画和语音引导的拉伸（颈、肩、背、手、腿、全身）、分类统计、无广告、5 分钟起步。Foca Plus 价格：$1.99/月、$9.99/年、$14.99 买断。Mac 1.6.0 的新内容：重做的统计、活动热力图、改进的引导拉伸。
- **竞品事实**：只写有出处的，标注「截至 2026-10/11，发布前在 App Store 复核」。不写竞品的缺点，只写定位差异。
- **每页结构**：首屏先用一段话直接回答（给 AI 答案引用），然后 H2，最后 FAQ（3–5 条，和 FAQPage schema 逐字一致）。

---

## ① Pomodoro timer with stretch breaks（首发）
- **Slug**：`/guides/pomodoro-timer-with-stretch-breaks.html`
- **对应关键词**：#1–#3
- **H1**：A Pomodoro Timer With Guided Stretch Breaks
- **开头**："Foca is an ad-free Pomodoro timer for iPhone and Mac that turns each break into a short guided stretch. When a focus session ends, Foca walks you through neck, shoulder, back, hand or leg stretches with illustrations and voice guidance, then you start the next session."
- **H2 结构**：
  - Why take stretch breaks between Pomodoros（不写医疗功效，只写「坐久了起来动一动」这类常识）
  - How it works in Foca（3 步，配真实截图）
  - Which stretches are included（颈/肩/背/手/腿/全身）
  - Set it up on iPhone and Mac
  - Free vs Foca Plus（价格表）
- **表格**：一个拉伸部位 × 时长的小表，**需 Yating 提供真实时长**；不比较竞品。
- **FAQ**：
  - Is Foca free?
  - Does it work on Mac?
  - Can I skip a stretch?
  - Does Foca have ads?
- **按钮 campaign**：`web_stretch_top_iphone` / `web_stretch_top_mac` / `web_stretch_mid_iphone` / `web_stretch_end_iphone` / `web_stretch_end_mac`

## ② Best Pomodoro timer for Mac
- **Slug**：`/guides/best-pomodoro-timer-mac.html`
- **对应关键词**：#4–#6
- **H1**：Best Pomodoro Timer Apps for Mac (2026): An Honest Comparison
- **开头**："The right Mac Pomodoro app depends on what you need: Session and Flow pair a timer with app and website blocking, Be Focused attaches timers to a task list, and Foca focuses on calm sessions with ambient sounds and guided stretch breaks. If you want blocking, pick one of the first two; if you want better breaks, try Foca."
- **H2 结构**：
  - Quick picks
  - Comparison table
  - Foca: for focus + breaks（我们自己的 app，明确标注 "made by us"）
  - Session / Flow / Be Focused（每个 2–3 句，只写有出处的事实）
  - How to choose
- **对比表**（价格均为第三方页面，截至 2026-10/11，发布前到 App Store 复核）：

| App | 主打 | 价格 |
|---|---|---|
| Session | 计时 + 屏蔽 + 统计 | 免费版；Pro $4.99/月 或 $39.99/年（Zapier、FocusDragon） |
| Flow | 极简，可悬浮在其他窗口上方 | 免费基础版；年付合 $1.49/月起（Zapier） |
| Be Focused | 番茄 + 任务清单 | 免费；Pro $2.99/月、$19.99/年、$39.99 买断（NotchOwl） |
| Foca | 环境音 + 引导拉伸 + 统计/热力图，无广告 | 免费；Plus $1.99/月、$9.99/年、$14.99 买断 |

- **注意**：Foca 没有 App/网站屏蔽功能，要诚实写出来（"Foca doesn't block apps"），不然 AI 引用时会出错。
- **FAQ**：
  - Is there a free Pomodoro app for Mac?
  - Which Mac Pomodoro app has a lifetime option?
  - Does Foca sync between iPhone and Mac?（**需确认**）
- **按钮 campaign**：`web_bestmac_top_mac` / `web_bestmac_mid_mac` / `web_bestmac_end_mac`，并加一个 `web_bestmac_end_iphone`

## ③ Forest alternative for iPhone & Mac
- **Slug**：`/guides/forest-alternative.html`
- **对应关键词**：#10–#11
- **H1**：A Calm Forest Alternative for iPhone and Mac
- **开头**："If you like Forest's focus timer but want something calmer, Foca is an ad-free Pomodoro timer for iPhone and Mac with ambient sounds and guided stretch breaks instead of a growing tree. Forest is still the better pick if the tree game and blocking your phone are what keep you focused."
- **H2 结构**：
  - Forest vs Foca at a glance
  - When Forest is the better choice（诚实写）
  - When Foca fits better
  - Other alternatives（Flora、Focus To-Do 一句话带过，有出处）
  - Switching tips
- **对比表**：玩法（种树 vs 环境音+拉伸）、平台、价格、广告
  - Forest：Plus $5.99/月；Android 版有广告；桌面端是浏览器插件（来源：habitrewards.me、mindfulsuite.com，截至 2026-10，需复核）
- **FAQ**：
  - Is Foca free like Forest?
  - Does Foca block apps?（No）
  - Is there a Forest alternative for Mac?
- **按钮 campaign**：`web_forest_top_iphone` / `web_forest_top_mac` / `web_forest_mid_iphone` / `web_forest_end_iphone`；Android 按钮是否放，由 Yating 决定（用 Play 的 `utm_campaign=guide_forest`）

## ④ Floating Pomodoro timer on Mac（**需先确认悬浮窗功能**）
- **Slug**：`/guides/floating-timer-mac.html`
- **对应关键词**：#7–#9
- **H1**：How to Keep a Floating Focus Timer on Your Mac Screen
- **开头**："Foca for Mac can show your focus timer in a small floating window that stays visible while you work, so you can see the time left without switching apps. Start a session, open the floating timer, and place it in any corner."（以实际功能和名称为准）
- **H2 结构**：
  - Steps（编号步骤 + 截图）
  - Floating window vs menu bar vs widget（只写 Foca 有的）
  - Tips for deep work on Mac
- **FAQ**：
  - Does it stay on top of full-screen apps?（**需实测**）
  - Does it work on older macOS?（商店写的是 macOS 10.15+）
- **按钮 campaign**：`web_floating_top_mac` / `web_floating_end_mac`

## ⑤ Pomodoro timer with ambient sounds
- **Slug**：`/guides/pomodoro-timer-ambient-sounds.html`
- **对应关键词**：#13–#15
- **H1**：A Pomodoro Timer With Built-In Ambient Sounds
- **开头**："Foca plays ambient sounds such as Dawn Forest, Seashore and Berliner Café during your focus sessions, so you don't need a separate music app or YouTube video. Pick a sound, set your session length, and the timer and sound start together."
- **H2 结构**：
  - Sound list（列表只写真实的音效名，**需 Yating 给完整清单**，并说明哪些是 Plus 专属）
  - Timer + sound in one app vs a timer plus Spotify/YouTube
  - Set it up
- **FAQ**：
  - Can I use it offline?（需确认）
  - Are sounds free?
  - Does sound keep playing in the background?
- **按钮 campaign**：`web_ambient_top_iphone` / `web_ambient_top_mac` / `web_ambient_end_iphone`

## ⑥ Dayfold：Lock Screen countdown widget on iPhone
- **Slug**：`/guides/lock-screen-countdown-widget-iphone.html`
- **对应关键词**：#20–#22
- **H1**：How to Add a Countdown Widget to Your iPhone Lock Screen
- **开头**："To put a countdown on your iPhone Lock Screen, create the event in a countdown app such as Dayfold, then touch and hold the Lock Screen, tap Customize, choose Lock Screen, and add the app's widget below the clock. The day count updates on its own."
- **H2 结构**：
  - Steps（编号步骤 + 截图，这一篇适合 HowTo 结构）
  - Lock Screen vs Home Screen widgets
  - Ideas: trips, birthdays, anniversaries, exams
  - Troubleshooting: widget not updating
- **FAQ**：
  - Is Dayfold free?（**需 Yating 给价格/限制**）
  - Can I add more than one countdown?
  - Does it count up from past dates?
- **按钮 campaign**：`web_dayfold_lock_top_iphone` / `web_dayfold_lock_mid_iphone` / `web_dayfold_lock_end_iphone`

### 第二批候选（暂不写）
- Be Focused alternative
- Pomodoro timer for ADHD（只讲「5 分钟起步」，不写医疗功效）
- Best Pomodoro app for iPhone
- Dayfold 第二篇：countdown widget iphone free
