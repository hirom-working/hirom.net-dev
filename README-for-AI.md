# hirom.net-dev

## System
- purpose: Astro ブログテーマ「MultiTerm」の開発・ショーケース
- type: webapp
- lang: TypeScript, Astro 5.x, npm
- deploy: npm パッケージ / デモサイト
- repo: /Users/hirom/Projects/hirom.net-dev/（stelcodes/multiterm-astro fork）

## Architecture
- Shiki テーマ統合（59+テーマ、Dark/Light/Auto + Multiple Theme Mode）
- GitHub 統合: Giscus コメント、GitHub Activity カレンダー
- Markdown 拡張: Admonitions, TOC (sticky), KaTeX, MDX, 読み取り時間
- SEO: RSS Feed, Sitemap, OG Image 自動生成（Satori）
- Tailwind v4

## Key Paths
| パス | 内容 |
|------|------|
| src/site.config.ts | テーマ設定一元管理 |

## Operations
| 操作 | コマンド |
|------|---------|
| 依存インストール | `npm install` |
| 開発サーバー | `npm run dev` |
| ビルド | `npm run build` |
| プレビュー | `npm run preview` |

## Current State
- テーマプロジェクト（実装例）
