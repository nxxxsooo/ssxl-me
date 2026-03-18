# SSxL Content Board

## Backlog

- [ ] `P2` 发布排期表（17天日历）
- [ ] `P2` 视频号脚本模板设计（口播 vs 文字动画）

## Planned

## In Progress

## Done

- [x] `P1` 批量转换 17 篇 docx → markdown @done(2026-03-10)
- [x] `P1` 公众号排版模板设计 — Style A (Warm & Elegant) @done(2026-03-10)
- [x] `P1` 封面图生成 — Source Han Serif SemiBold, 17张 @done(2026-03-11)
- [x] `P1` 17 篇文章格式化 — Style A refined HTML @done(2026-03-11)
- [x] `P1` 17 篇草稿推送到微信公众号草稿箱 @done(2026-03-11)

---

## Changelog

### 2026-03-18

- `feat` About 页 Get In Touch 公众号/视频号卡片点击弹出 QR 码 modal（纯 CSS/JS，支持 ESC/遮罩关闭）
- `feat` About 页底部 CTA 改为公众号+视频号双二维码并排布局
- `deploy` 1302d44 pushed → Vercel

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
