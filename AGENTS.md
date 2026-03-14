# SSxL 内容运营 (ssxl-mp)

## Overview

施施小洛（SSxL）女性成长赛道内容运营项目。Phase 0 养号阶段，双渠道日更（公众号 + 视频号）获客，做心理咨询变现。

**关联文档**: `Vault/Projects/personal/ssxl-product-analysis.md` — 产品化分析 & 路线图

## Content Source

- 17 篇 docx 长文（`公众号/1.docx` ~ `17.docx`）
- 主题：亲密关系、自我觉察、女性成长、情绪管理
- 风格：犀利洞察 + 实用建议，口语化但有深度，2000-3000 字/篇
- 来源：施施小洛原创

## Channels

| Channel | Format | Frequency | Status |
|---------|--------|-----------|--------|
| 公众号 | 图文长文 | 一天一篇 | 待启动 |
| 视频号 | 短视频（口播/文字动画） | 一天一条 | 待启动 |

## Workflow

### 公众号发布流程

1. docx → pandoc 转 markdown
2. AI 润色排版（标题、摘要、段落分割、引导语、CTA）
3. 通过 wechat-mp MCP 上传草稿
4. 人工审核 → 发布

### 视频号内容流程

1. 从长文提取 3-5 个核心金句/观点
2. 改写为 60-90 秒口播脚本（或文字动画脚本）
3. 人工录制/剪辑 → 发布

## Key Files

```
Tuning/ssxl-mp/
├── AGENTS.md          # This file
├── BOARD.md           # Publishing schedule & changelog
├── 公众号/             # Source docx files (1-17)
├── 公众号.zip          # Original archive
├── markdown/          # Converted markdown (generated)
├── scripts/           # Video scripts (generated)
└── published/         # Published content log
```

## Patterns & Conventions

- 文件名保持数字编号（1-17），对应原始 docx
- Markdown 文件命名：`{编号}-{简短标题}.md`
- 视频脚本命名：`{编号}-video-script.md`
- 发布记录在 BOARD.md changelog 中跟踪
