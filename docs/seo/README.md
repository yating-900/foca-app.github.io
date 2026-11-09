# foca.work SEO/GEO 导流方案（待 Yating 挑）

> 只是方案：不改网站、不发 PR 上线页面、不注册任何外链站。调研日期：2026-11-09（上海时间）。
> 打法：Starter Story（Vaultaire）思路，一页只回答一个具体搜索问题，正文里直接放下载按钮。重点做 Foca，Dayfold 只做 1–2 篇。不做多语言、不做内容农场、不买链接。

## 文件
| 文件 | 内容 |
|---|---|
| `keywords.md` | 22 个英文搜索意图：意图类型、难度、对应 app、数据来源 |
| `outlines.md` | 前 6 篇页面大纲（slug、H1、开头直接回答、H2、对比表/FAQ、按钮位置、campaign） |
| `geo-checklist.md` | llms.txt 样例、FAQ/HowTo schema 建议、Foca Mac 单独页的建议 |

## 先说一个现状问题（发页面之前要先修）
线上的下载按钮写了 `data-campaign`（例如 `web_home_hero_iphone`），但 `js/home.js` 里 `PROVIDER_TOKEN = ""` 是空的，所以脚本**不会**给 App Store 链接追加 `pt=…&ct=…&mt=…`。
- 现在能看到的：GA4 里的 `store_click` 点击事件（带 campaign 名）。
- 现在看不到的：App Store Connect → 来源 → Campaigns 里的网站下载数。
- 修法：Yating 在 ASC「App Analytics → Sources → Campaigns → Generate a Campaign Link」里拿到 provider token（就是链接里 `pt=` 的值），填进 `PROVIDER_TOKEN`。这个值本来就会出现在公开链接里，不算密钥。不填的话，后面新页面带来多少下载都没法核实。

## 推荐顺序
| 顺序 | 做什么 | 原因 |
|---|---|---|
| 0 | 填 `PROVIDER_TOKEN`，并确认 Google Search Console 已验证 | 先能量化，再加页面 |
| 1 | 指南页 ① Pomodoro timer with stretch breaks | 竞争最低、最贴 Foca 差异点；搜索结果里 Foca 的 App Store 页已经露出过 |
| 2 | Foca Mac 单独页 `/mac.html`（见 geo-checklist.md） | Mac 1.6.0 刚上线；Mac 相关的联想词多；Mac 商店页现在还是 iPhone 竖图 |
| 3 | 指南页 ② Best Pomodoro timer for Mac | 量大但竞争高，靠 Mac 页加内链来撑 |
| 4 | 指南页 ③ Forest alternative（iPhone & Mac） | 对比意图、转化高；只写可以核实的事实 |
| 5 | 指南页 ④ 悬浮计时器（Mac） / ⑤ 带环境音的 Pomodoro | 长尾词，竞争中低 |
| 6 | Dayfold：⑥ Lock Screen countdown widget on iPhone | Dayfold 只做这一篇，如果有效再加第二篇 |

节奏：每周 1–2 页。每页发布 4 周后看 GSC 的展示/点击，加上 ASC campaign 下载数，再决定要不要继续这条线。不做批量灌页。

## 需要 Yating 决定
1. **provider token**：她去 ASC 拿 `pt` 值（或者授权我登录 ASC 去看）。
2. **Mac 功能核实**：悬浮计时窗口、菜单栏计时、Mac 小组件、iPhone 小组件/Live Activity 各有没有？没有的功能不写，对应的关键词也不做（`keywords.md` 里已经标成「需确认」）。
3. **页面里放不放 Android 下载**：现在首页和 llms.txt 都写了 Google Play。指南页默认只放 App Store；Android 只在「Forest alternative」这类跨平台页面放。
4. **能不能点名竞品、写价格**：我建议写，但只写第三方或 App Store 上能核实的事实，并标注核实日期。不想点名的话就改成泛称（“订阅制的大型计时器”）。
5. **截图素材**：指南页要用 Foca 的真实截图（尤其是 Mac）。designbot 正在做的 Mac 首图方向，能不能复用到网页上？
6. **前 6 篇里先批哪几篇**：默认按上面的顺序。

## 红线（照旧）
不付费买链接，不做批量 AI 灌页，不用她的账号代发，不改 DNS。所有页面都先给 Yating 审，她批准后才上线。
