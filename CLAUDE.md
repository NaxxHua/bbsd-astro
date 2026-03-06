# BBSD 网站复刻项目 - 项目上下文

## 项目概述
复刻 https://bbsd-cn.com/ (Framer制作) 为 Astro 静态站点，要求接近100%还原。

## Tech Stack
- **框架**: Astro v5 (SSG模式)
- **UI组件**: React (用于交互式组件和Framer Motion动画)
- **动画**: Framer Motion (React islands)
- **样式**: Tailwind CSS v4
- **i18n**: astro-i18n / 自定义 i18n (中英双语)
- **部署**: 待定 (Vercel/Netlify/Cloudflare Pages)

## 站点地图 (23个页面)
```
/ (首页)
/about-us
/market
/services
  /services/engineering
  /services/fabrication
  /services/procurement
  /services/commissioning
  /services/piping-spools-pre-fabrication
/engineering-services
  /engineering-services/e-i-engineering
  /engineering-services/mechanical-engineering
  /engineering-services/piping-engineering
  /engineering-services/structural-engineering
/projects
  /projects/projetcs (注意：原站拼写错误)
/news
  /news/bbsd-first-year-anniversary
  /news/our-company-signs-industry-university-research-strategic-cooperation-agreement-with-nantong-university
  /news/launches-iso-9000-quality-management-system-certification
  /news/successfully-holds-fire-safety-emergency-drill
/contact
/careers
```

## 设计系统

### 颜色
```
--orange-primary: #ed6e19 (主色调，CTA按钮)
--blue-dark: #0c4589 (二级色，标题)
--blue-light: #e6eefa (浅蓝背景sections)
--black: #1b1d1f (文字)
--white: #ffffff
--gray: #555, #7e7e7e (次要文字)
```

### 字体
- **主字体**: Figtree (400/500/600/700/900)
- **辅字体**: DM Sans, Inter, Instrument Sans
- **等宽**: Fragment Mono, Geist Mono

### 断点
```
Mobile: 390px
Tablet: 810px
Desktop: 1200px (max-width容器)
```

## 首页 Sections 结构 (从上到下)
1. **Header/Nav** - Logo + Nav(Home,About,Market,Services,Projects,News) + Phone + Contact CTA
2. **Hero** - 全屏背景视频 + "BBSD Your trusted engineering partner" + CTA按钮
3. **About Preview** - 暗色背景图片 + 公司简介文字
4. **Core Strengths** - 白底，左文字右图片，3个优势点(Engineering Excellence, Global-Local Integration, Reliable Project Delivery)
5. **Our Market** - 浅蓝底，3列卡片(OFFSHORE FPSO Modulars, Renewable Energy, Onshore Plant Modulars)
6. **Our Services** - 深黑渐变背景，5个服务卡片(带icon)
7. **CTA Banner** - "Need a professional solution?" + Contact按钮
8. **Latest News** - 白底，3列新闻卡片
9. **Get In Touch** - 深色背景横幅 + Contact按钮
10. **Footer** - Logo + 描述 + Rotterdam/Nantong地址 + 底部链接

## 固定浮动元素
- 左下角固定: "Contact us" (黑底) + "Join us" (白底) 两个按钮

## 关键素材 URLs (framerusercontent.com)

### 首页
- Logo: `images/VTy85VIyH4JRjHfFVaYvaJz7EFQ.png`
- Hero视频: `assets/9hrnL8wk0Xl8NB6KEorCiK14g.mp4`
- 背景图案: `images/f3nL13iNp1N7Pg6x37FzVgzg.png`
- 焊接工人图: `images/cHBEFOFu4uOGaaVI1w7hokeBv50.jpg`
- FPSO平台: `images/EVcvW3x2kB1EqZQDPYTZslrKizk.jpg`
- 风力发电: `images/rvly9LBDWvfpwnTkegbzwxt6QcY.jpg`
- 海上吊装: `images/YAYm1CX6mDfy2B2b5vxqoedCO0.jpg`
- 周年庆: `images/m0RAGI4TH5lYQgbnHNspr5OAeuQ.jpg`
- 签约仪式: `images/BEs3a4Ny9pKIQnCtaIjJevDAX8.jpg`
- 开幕典礼: `images/ScYwoHwthy0DTa7CkYalZX4cY.jpeg`
- 合作照片1: `images/PUU64Ou7QtWSRd1vILq9ejCIbY.jpg`
- 合作照片2: `images/G9oflMJTpGiquwTF7q4O8eG8Boo.jpg`

### Services页
- 服务主图: `images/d6pxvKFCe6Fmsl271hIv4PK0.jpg`
- 更多图片: 8GGaISF6, C9u26sxc, ZNc3hPek, eTkCLsIe, vEMQTdsr

### About页
- 团队合照(会议室)
- BBSD工服双人背影
- 海上平台夜景
- 团队成员照片(9人)
- ISO认证证书

### Contact页
- 会议演示照片
- 多张工作场景照片(滚动轮播)
- Google Maps嵌入

## 动画特征
- **文字reveal**: 大标题逐字渐入(如"Who We Are", "Our Market")
- **滚动触发**: sections淡入 + 上移
- **视频背景**: Hero区域自动播放循环视频
- **图片轮播**: Contact页横向自动滚动
- **Hover效果**: 卡片上浮阴影，按钮颜色过渡
- **固定浮动**: Contact us/Join us按钮始终固定左下

## 项目目录结构
```
bbsd-astro/
├── astro.config.mjs
├── package.json
├── tailwind.config.mjs
├── tsconfig.json
├── public/
│   ├── fonts/
│   ├── images/          # 所有素材图片
│   │   ├── home/
│   │   ├── about/
│   │   ├── services/
│   │   ├── market/
│   │   ├── projects/
│   │   ├── news/
│   │   └── contact/
│   ├── videos/
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── common/      # Header, Footer, FloatingButtons, SEO
│   │   ├── home/        # HeroSection, CoreStrengths, MarketCards, ServicesGrid, NewsPreview, CTABanner
│   │   ├── about/       # AboutHero, WhoWeAre, VisionMission, Values, Team, Certifications
│   │   ├── services/    # ServicesHero, ServiceCard, ServiceDetail
│   │   ├── market/
│   │   ├── projects/
│   │   ├── news/        # NewsCard, NewsDetail
│   │   ├── contact/     # ContactForm, MapEmbed, ImageCarousel
│   │   └── animations/  # ScrollReveal, TextReveal, FadeIn (React+Framer Motion)
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── about-us.astro
│   │   ├── market.astro
│   │   ├── services/
│   │   ├── engineering-services/
│   │   ├── projects/
│   │   ├── news/
│   │   ├── contact.astro
│   │   └── careers.astro
│   ├── i18n/
│   │   ├── en.json
│   │   ├── zh.json
│   │   └── utils.ts
│   ├── data/             # 内容数据(team, news, services等)
│   │   ├── team.ts
│   │   ├── services.ts
│   │   ├── news.ts
│   │   └── market.ts
│   └── styles/
│       └── global.css
└── CLAUDE.md
```

## 开发注意事项
- 所有图片从 framerusercontent.com 下载到 public/images/
- Astro 组件用 .astro，需要交互/动画的用 React + client:visible
- i18n 用 URL前缀方案: /en/... 和 /zh/... (或用locale切换)
- 新闻文章可用 Astro Content Collections
- 保持组件粒度适中，一个section一个组件

## Workflow
- Work incrementally (small refactors / single feature steps).
- After each incremental change:
  - Run `npx astro build` (or start dev server for preview) to verify no syntax/build errors.
  - Stage modified files (do NOT run `git commit`).
  - Suggest a Conventional Commit message: `feat:`, `fix:`, `refactor:`,
    `docs:`, `style:`, `test:`, `chore:`.
  - Explain what changed and why, then wait for user confirmation.
