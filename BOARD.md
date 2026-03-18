# SSxL Content Board

## Backlog



## Planned

## In Progress

## Done

- [x] `P1` 接入 Umami 网站分析 @done(2026-03-18)
- [x] `P1` 批量转换 17 篇 docx → markdown @done(2026-03-10)
- [x] `P1` 公众号排版模板设计 — Style A (Warm & Elegant) @done(2026-03-10)
- [x] `P1` 封面图生成 — Source Han Serif SemiBold, 17张 @done(2026-03-11)
- [x] `P1` 17 篇文章格式化 — Style A refined HTML @done(2026-03-11)
- [x] `P1` 17 篇草稿推送到微信公众号草稿箱 @done(2026-03-11)

---

## Changelog

### 2026-03-18

- `feat` Umami analytics 接入 — Website ID `4330b828-291d-48d7-af3e-6986503385c5`，tracking script in Layout.astro (bfeaaa3)
- `fix` 咨询表单 API 修复 — 双重 bug：Vercel US 无法访问 feishu.cn → larksuite.com；Vercel env var 过期 → 硬编码。表单/Bitable/飞书通知全部恢复 (7c052d2)
- `fix` About 页 Get In Touch 公众号/视频号卡片移除"点击查看二维码"提示文字，保留点击弹出 QR 功能 (c0009bd)
- `feat` About 页 Get In Touch 公众号/视频号卡片点击弹出 QR 码 modal（纯 CSS/JS，支持 ESC/遮罩关闭）
- `feat` About 页底部 CTA 改为公众号+视频号双二维码并排布局
- `feat` Videos 页完整重写 — 去掉无用日期列，hashtag → tag 徽章，视频计数+抖音标签，QR 移到列表下方，tag 过滤器，渐变缩略图，移动端播放图标
- `fix` Tag 过滤 JS 子串匹配 bug（includes → split+includes 精确匹配）
- `chore` 18 个视频 .md 文件添加 tags 字段
- `deploy` d6dc07d + 5cab93b pushed → Vercel
- `feat` 新建 /published 作品页 — 《惊奇勿语》书封+详情+出版信息+淘宝/豆瓣/知乎按钮 + 知乎盐选专栏卡片 (dd4542e)
- `feat` Nav 导航新增"作品"入口
- `feat` About 页 Career 写作 block 添加《惊奇勿语》+ "查看全部作品"链接
- `deploy` dd4542e pushed → Vercel
- `fix` 咨询通知改为飞书群聊 — 施施小洛加入飞书企业，通知从 1v1 DM 改为群聊「ssxl.me 咨询通知」，Bitable 权限授予群聊成员 (7cea0d8)

### 2026-03-11

- `feat` 封面脚本重写 v2 — Source Han Serif SemiBold 字体，双线边框+珊瑚色装饰，900×383px
- `feat` 文章格式化脚本 — markdown → Style A inline HTML，自动分段、引用块、高亮卡片、CTA
- `deploy` 17 篇文章 + 17 张封面全部推送到施施小洛公众号草稿箱 (17/17 OK)
- `fix` 微信 API IP 白名单更新 112.36.207.57（开发者平台，非旧版 mp.weixin.qq.com）

### 2026-03-10

- `chore` 项目初始化 — AGENTS.md + BOARD.md
- `feat` 17 篇 docx → markdown 转换
- `feat` 4 种排版风格模板 (A/B/C/D) + 测试草稿推送
- `feat` Style A refined 模板（去除 flex，生产可用）

- `deploy` 重新推送 12 篇未发布的草稿 (1,3,7-10,12-17) 到公众号草稿箱 (使用 V2 字体封面)

- `feat` 提取第二批 docx (18-29)，生成 V2 封面
- `feat` 重构 format-articles.py 脚本：同时生成公众号 HTML 草稿 和 Astro 格式网站文章
- `feat` 更新网站 global.css 引入第一批的 Style A 高级样式（引言卡片、序号角标、珊瑚色块等）
- `deploy` 第二批 12 篇文章已推送微信公众号草稿箱（带 ssxl.me 网站原文链接）
- `deploy` 网站代码推送到 GitHub，触发 Vercel 部署包含第二批文章的全新网站。

- `feat` 生成缺失的 7 张网站封面 (2048x880)，使用 ComfyUI + Flux Dev 模型
