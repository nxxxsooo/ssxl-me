# ssxl.me — 施施小洛个人网站

## Overview

施施小洛（SSxL）的个人品牌网站。女性成长赛道，定位：作家、出版策划人、关系心理学内容创作者。Astro + Vercel，SSR via `@astrojs/vercel`。

**Live**: https://ssxl.me
**Repo**: https://github.com/nxxxsooo/ssxl-me
**Deploy**: Vercel (auto-deploy on push to `main`)
**关联项目**: `Tuning/ssxl/` — 内容运营（公众号/视频号素材、脚本）

## Architecture

- **Framework**: Astro 5.x + TypeScript
- **Styling**: Tailwind CSS (brand color: `brand-coral`)
- **Hosting**: Vercel (SSR adapter)
- **API**: `/api/consult` — 咨询表单提交 → 飞书机器人通知
- **Content**: Astro Content Collections (`src/content/`)

## Key Files

```
src/
├── pages/
│   ├── index.astro          # Homepage — article list
│   ├── about.astro          # About page — bio, services, consultation form, QR codes
│   ├── videos.astro         # Video page — curated video list + 视频号 QR
│   ├── tension.astro        # Story tension curve (standalone page)
│   └── posts/[id].astro     # Article detail page
├── components/
│   ├── Nav.astro            # Site navigation
│   ├── FollowCTA.astro      # Article footer — 公众号 QR code CTA
│   └── Layout.astro         # Base layout
├── content/                 # Astro content collections (blog posts, videos)
├── layouts/
│   └── Layout.astro         # HTML shell
api/
└── consult.ts               # Form submission → Feishu bot webhook
public/images/
├── wechat-qr.jpg            # 公众号二维码
├── channels-qr.jpg          # 视频号二维码
├── portrait.jpg             # About page portrait
└── covers/                  # Article cover images
```

## Patterns & Conventions

- Font: serif headings (font-serif), light body text (font-light)
- Color: `brand-coral` accent, `stone-*` neutrals
- Layout: `max-w-5xl` container, generous vertical spacing (`mb-24 md:mb-32`)
- Section headers: coral uppercase tracking-widest labels
- Cards: `border border-stone-200 rounded-lg p-6 hover:border-brand-coral`
- WeChat/视频号 cards in Get In Touch: click → QR modal popup (not external links)
- External platform links (微博/抖音/小红书/B站): direct `<a>` links
- Article footer CTA (`FollowCTA.astro`): only 公众号 QR (intentional — article readers → 公众号)
- Bottom CTA on about page: dual QR layout (公众号 + 视频号 side by side)

## Resolved Issues

- **QR modal for WeChat cards** (2026-03-18): Get In Touch 公众号/视频号 cards were dead `<div>`s with "微信搜索" text. Now click to show QR modal with backdrop blur, ESC/overlay close.
- **Douyin label rename** (bc65f6b): 抖音 cards renamed to 情感/读书号 to distinguish two accounts.
- **Feishu notification** (6014da1): Consultation form POST → `/api/consult` → Feishu bot webhook.
