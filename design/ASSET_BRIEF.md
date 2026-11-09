# 截图待补清单（2026-11-09 更新，优先看这一节）

网站已上线（main 分支）。下面是还缺的或要替换的素材。规格统一：**iPhone 真机截图原图（1206×2622 或同代机型），不带营销文字和设备边框，深色/浅色跟随 App 本身**；放到 `design/assets-incoming/`，按文件名命名。

## Foca（首页 index.html）
| 文件名 | 画面 | 替换 |
|---|---|---|
| foca-ios-break.png | 休息倒计时（蓝色 Take a break） | images/shot-ios-break.webp（现在是旧图放大） |
| foca-ios-stats.png | 统计页顶部（Summary + Focus Time 柱状图） | images/shot-ios-stats.webp（旧图） |
| foca-ios-distribution.png | 统计页 Task Distribution 饼图 | images/shot-ios-distribution.webp（旧图） |
| foca-mac-timer.png | Mac 主计时窗口，⌘⇧4 + 空格截窗口 | 首屏 Mac+iPhone 合成图（images/foca-dual-mac-iphone.webp 只有 1080px） |
| foca-video.mp4（可选） | 20–30 秒介绍视频，16:9，≤8MB | 首页视频位（目前隐藏） |

## Dayfold（dayfold.html）
App Store 上有 7 张预览图：01-home、02-widgets、03-lock-screen、04-style、05-retro-lcd、06-neon、07-ticket。最好直接从 App Store Connect 导出这批原图，或按同样内容在真机截图：
| 文件名 | 画面 | 用在 |
|---|---|---|
| dayfold-lockscreen.png | 锁屏上的 Dayfold 小组件（圆形/矩形） | Widgets 段 |
| dayfold-widgets-medium.png | 主屏幕中号小组件 | Widgets 段 |
| dayfold-style-retro-lcd.png / -neon.png / -ticket.png | 三种卡片样式的大卡片 | Card styles 段 |
主屏截图请避开 Dock 里的第三方 App 图标（或允许我们裁掉）。

## Core（core.html）
| 文件名 | 画面 | 替换 |
|---|---|---|
| core-history.png | 历史页（Workout History：Total/Count/Today + 周趋势） | images/shot-core-trend.webp（现在是模拟器截图，底部标签图标和真机不一致） |
| core-editor.png（可选） | 编辑训练（Work / Rest / Sets） | 备用 |
| core-done.png（可选） | 训练完成页（Well Done） | 备用 |

## 社交推荐（首页 Loved by users and creators）
- iKsuraj 视频的一帧截图（https://youtu.be/h5YkKT6EGAM?t=68），替换 images/foca-video-cover-2.webp（现在是用 Foca 截图拼的）
- @earlmalaki、@studywithlanny 两条帖子的直达链接（现在链到主页）

---

# foca.work 改版 · 截图与视频素材需求

这份文档写给负责制作素材的人（或 AI）。改版方向是 A3「Night Focus」：深色背景（#0B0B0C）、Foca 杏色强调色（#F4C59B）、衬线标题。所有素材都要放进这个深色页面里，请按下面的规格准备。

## 通用要求

- **只拍真实界面，只拍已上线的功能。** 以 App Store 当前公开版本为准（Foca iOS 1.5.0，以及 Mac 和 Android 的当前线上版本）。1.6.0 的统计、热力图、导出等新功能**正式发布之前不要拍**。Core 的 Watch 版、Foca 的跨端同步也不要拍。
- **不要营销文字，不要设备边框。** 交付干净的界面截图，设备边框和排版由网页来做。App Store 上那种带标题文字的宣传图不能直接用。
- **深色模式。** 如果 App 支持深色模式，统一用深色模式截图。
- **界面语言用英文。** 网站是英文的。
- **示例数据要真实可信。** 不要出现 "Test"、"asdf" 或 lorem ipsum，也不要出现真实的个人信息（真实姓名、邮箱、通知内容）。可以用这类分类名：Work、Study、Reading、Writing。
- **iPhone 状态栏要干净。** 时间 9:41、满格信号、满电、不显示其他通知。也可以直接把状态栏裁掉。
- **格式。** 截图交付 PNG 原图，网页上线时会转成 WebP。需要透明背景的会单独注明。

## 一、Foca（主力，优先级最高）

### 1. 首屏合成图：Mac + iPhone
- 文件名：`foca-hero-mac-iphone.png`
- 内容：MacBook 和 iPhone 同时运行 Foca，都停在计时界面，正在专注中。
- 规格：**透明背景**，宽度至少 2400px，设备之间不要有投影以外的背景。
- 现在网站用的 `images/foca-dual-mac-iphone.webp` 只有 1080px，清晰度不够，这张用来替换它。

### 2. iPhone 截图（原始分辨率 1290×2796，或其他 6.7/6.9 寸机型原图）
| 文件名 | 画面 | 用在网页哪里 |
|---|---|---|
| `foca-ios-timer.png` | 计时进行中：分类 "Work"，剩余约 18:42，圆环走了一部分 | 01 · Focus |
| `foca-ios-sounds.png` | 白噪音选择面板打开，选中一个（比如 Forest） | 01 · Focus |
| `foca-ios-stretch.png` | 拉伸引导进行中（比如 Neck），插画清楚可见 | 02 · Break |
| `foca-ios-stats.png` | 统计页，有一周的示例数据，柱子高低错落 | 03 · Review |
| `foca-ios-categories.png` | 专注分类列表，4～5 个带颜色的分类 | 备用 |
| `foca-ios-settings.png` | 计时设置（专注时长、休息时长、Auto-Run） | 备用 |

### 3. Mac 截图
- 截**窗口**，不截整个桌面：在 macOS 上用 ⌘⇧4 再按空格点选窗口，会得到带阴影的透明背景 PNG。
- Retina 原图（2x）。

| 文件名 | 画面 |
|---|---|
| `foca-mac-timer.png` | 主计时窗口，专注进行中 |
| `foca-mac-stats.png` | 统计页（只拍当前线上版本已有的统计内容） |
| `foca-mac-stretch.png` | 拉伸引导界面（如果 Mac 版有） |
| `foca-mac-menubar.png` | 菜单栏计时（如果 Mac 版有这个功能；没有就跳过） |

### 4. Android 截图（可选，1 张）
- `foca-android-timer.png`：计时界面，用于说明“Android 也能用”。用原生分辨率即可。

## 二、Foca 介绍视频

用在首屏设备图下方的「Watch Foca in 30 seconds」区域。

- **主视频** `foca-video.mp4`
  - 16:9，1920×1080，30fps，时长 20～30 秒
  - H.264 编码，文件 **≤ 8MB**（网页加载要快）
  - **静音也能看懂**：网页会静音自动播放，关键信息不要只靠声音表达；如果要配字幕，用英文短句
  - 背景用深色，和网页 #0B0B0C 接近，首尾能自然衔接
- **封面图** `foca-video-poster.png`：1920×1080，视频的第一帧或最有代表性的一帧
- **分镜建议**：
  1. 0–6 秒：在 Mac 上开始一次专注，圆环开始走
  2. 6–12 秒：选择白噪音（Forest / Tide）
  3. 12–20 秒：专注结束，切到 iPhone 上的拉伸引导
  4. 20–27 秒：统计页，看一周的专注记录
  5. 27–30 秒：Foca 图标 + "Focus that feels calm."
- **首屏循环短片（可选）** `foca-loop.mp4`：6～8 秒，只拍计时圆环在走，首尾无缝循环，≤ 2MB。

如果 App Store Connect 里已经有 App Preview 视频，可以直接提供原文件，我们再剪成上面的规格。

## 三、Dayfold（iPhone）

| 文件名 | 画面 |
|---|---|
| `dayfold-moments.png` | Moment 卡片列表，3～4 个不同风格的卡片（生日、纪念日、旅行倒数） |
| `dayfold-widgets.png` | 主屏幕上放着 Dayfold 小组件（大中小各一个），壁纸简洁 |
| `dayfold-lockscreen.png` | 锁屏小组件 |

示例日期请用虚构的名字和事件，比如 "Mom's birthday"、"Tokyo trip"。

## 四、Core（iPhone）

拍 App Store **当前线上版本**。原生版 1.1 如果还没正式发布，就拍线上的旧版本。

| 文件名 | 画面 |
|---|---|
| `core-timer.png` | 训练进行中：Work 阶段，显示第几轮、剩余时间 |
| `core-setup.png` | 训练设置：Work / Rest / Rounds |
| `core-history.png` | 训练历史记录 |

## 交付方式

- 把所有文件放进这个仓库的 `design/assets-incoming/` 文件夹，文件名按上面的表格命名。
- 某一项拍不了（比如功能不存在），在下面的清单里注明原因，不要用其他画面凑数。

## 交付清单

- [ ] foca-hero-mac-iphone.png
- [ ] foca-ios-timer.png
- [ ] foca-ios-sounds.png
- [ ] foca-ios-stretch.png
- [ ] foca-ios-stats.png
- [ ] foca-ios-categories.png（备用）
- [ ] foca-ios-settings.png（备用）
- [ ] foca-mac-timer.png
- [ ] foca-mac-stats.png
- [ ] foca-mac-stretch.png（如有）
- [ ] foca-mac-menubar.png（如有）
- [ ] foca-android-timer.png（可选）
- [ ] foca-video.mp4 + foca-video-poster.png
- [ ] foca-loop.mp4（可选）
- [ ] dayfold-moments.png
- [ ] dayfold-widgets.png
- [ ] dayfold-lockscreen.png
- [ ] core-timer.png
- [ ] core-setup.png
- [ ] core-history.png
