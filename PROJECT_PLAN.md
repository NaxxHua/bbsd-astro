# BBSD 网站复刻 - 项目计划

> 原站: https://bbsd-cn.com/ (Framer)
> 目标: Astro + React + Framer Motion + Tailwind CSS，中英双语，接近100%还原

---

## Phase 1: 项目初始化 & 素材准备

### 1.1 初始化 Astro 项目
```bash
npm create astro@latest bbsd-astro -- --template minimal
cd bbsd-astro
npx astro add react tailwind
npm install framer-motion
```

### 1.2 下载所有素材
从 `framerusercontent.com` 下载所有图片和视频到 `public/` 目录。

**首页素材:**
| 文件 | URL路径 | 用途 |
|------|---------|------|
| logo.png | `images/VTy85VIyH4JRjHfFVaYvaJz7EFQ.png` | BBSD Logo |
| hero-video.mp4 | `assets/9hrnL8wk0Xl8NB6KEorCiK14g.mp4` | Hero背景视频 |
| hero-pattern.png | `images/f3nL13iNp1N7Pg6x37FzVgzg.png` | 背景图案 |
| welder.jpg | `images/cHBEFOFu4uOGaaVI1w7hokeBv50.jpg` | Core Strengths配图 |
| fpso-platform.jpg | `images/EVcvW3x2kB1EqZQDPYTZslrKizk.jpg` | Market-FPSO |
| wind-energy.jpg | `images/rvly9LBDWvfpwnTkegbzwxt6QcY.jpg` | Market-风能 |
| offshore-crane.jpg | `images/YAYm1CX6mDfy2B2b5vxqoedCO0.jpg` | Market-岸上模块 |
| anniversary.jpg | `images/m0RAGI4TH5lYQgbnHNspr5OAeuQ.jpg` | News-周年庆 |
| signing.jpg | `images/BEs3a4Ny9pKIQnCtaIjJevDAX8.jpg` | News-签约 |
| ceremony.jpeg | `images/ScYwoHwthy0DTa7CkYalZX4cY.jpeg` | News-ISO认证 |

**Services页素材:**
| 文件 | URL路径 |
|------|---------|
| services-hero.jpg | `images/d6pxvKFCe6Fmsl271hIv4PK0.jpg` |
| service-1.jpg | `images/8GGaISF6YyVKEjV138nAyLegs.jpg` |
| service-2.jpg | `images/C9u26sxcnzAURae4mjvnizde6s.jpg` |
| service-3.jpg | `images/ZNc3hPekrBNwNkb7zVZsvO0keM.jpg` |
| service-4.jpg | `images/eTkCLsIejqoVHRU7F0xfsUXhnE.jpg` |
| service-5.jpg | `images/vEMQTdsrlxwqJ4vJz1AIoVJQg.jpg` |

> **注**: About/Contact/其他子页面的素材需要在开发对应页面时再从浏览器提取

### 1.3 配置字体
下载或通过 Google Fonts 引入:
- Figtree (400,500,600,700,900) - 主字体
- DM Sans
- Inter
- Instrument Sans

### 1.4 配置 Tailwind 主题
```js
// tailwind.config.mjs 中自定义:
colors: {
  orange: { primary: '#ed6e19', hover: '#ff8000' },
  blue: { dark: '#0c4589', light: '#e6eefa', link: '#1d65d1' },
  dark: '#1b1d1f',
}
fontFamily: {
  sans: ['Figtree', 'sans-serif'],
  dm: ['DM Sans', 'sans-serif'],
}
```

---

## Phase 2: 公共组件开发

### 2.1 BaseLayout.astro
- [x] HTML结构 + meta tags + SEO
- [x] Google Fonts 引入
- [x] 全局CSS (global.css)
- [ ] i18n context provider

### 2.2 Header 组件
- [x] Logo (链接到首页)
- [x] 导航菜单: Home, About, Market, Services, Projects, News
- [x] 电话号码: (86) 15927327738
- [x] Contact CTA按钮 (橙色)
- [x] 移动端汉堡菜单 (需React交互)
- [x] 当前页面高亮
- [x] 深色背景(半透明/实色根据页面)

### 2.3 Footer 组件
- [x] Logo + 公司描述
- [x] Rotterdam办公室地址 + Google Maps链接
- [x] Nantong办公室地址 + Google Maps链接
- [x] 底部版权 + 快捷链接(Home, About, Contact, News)

### 2.4 FloatingButtons 组件
- [x] "Contact us" 黑色按钮 (星号icon)
- [x] "Join us" 白色按钮
- [x] 固定定位: left:20px, bottom:94px
- [x] z-index足够高

### 2.5 GetInTouchBanner 组件 (多页面复用)
- [x] 深色渐变背景
- [x] "Get In Touch With Us" 标题
- [x] Contact 橙色按钮
- [x] 文字逐字reveal动画

### 2.6 动画组件 (React + Framer Motion)
- [x] `ScrollReveal.tsx` - 滚动触发淡入+上移
- [x] `TextReveal.tsx` - 文字逐字/逐词渐入
- [x] `FadeIn.tsx` - 简单淡入
- [x] `SlideIn.tsx` - 滑入(左/右/上/下)

---

## Phase 3: 首页开发 (index.astro)

### 3.1 HeroSection
- [x] 全屏视频背景 (autoplay, loop, muted)
- [x] 暗色叠加层
- [x] "BBSD" + "Your trusted engineering partner" 大标题
- [x] "BBSD Innovative · Energy Services" 副标题
- [x] "Explore our services" 橙色CTA按钮
- [x] 入场动画

### 3.2 AboutPreview
- [x] 全宽工厂/工地背景图片
- [x] "↗ About us" 小标签
- [x] 大段公司简介文字 (白色，带渐入)
- [x] 暗色叠加层

### 3.3 CoreStrengths
- [x] 白色背景
- [x] "Our Core Strengths" 大标题
- [x] 3个优势点(蓝色勾icon + 标题 + 描述)
  - Engineering Excellence
  - Global-Local Integration
  - Reliable Project Delivery
- [x] 右侧大图(焊接工人) + "Learn more about us →" 链接
- [x] 图片圆角

### 3.4 MarketCards
- [x] 浅蓝(#e6eefa)背景
- [x] "Our Market" 蓝色标题 (文字reveal动画)
- [x] 3列等宽卡片:
  - OFFSHORE FPSO Modulars + 图 + 描述
  - Renewable Energy + 图 + 描述
  - Onshore Plant Modulars + 图 + 描述
- [x] 卡片白底圆角，hover效果

### 3.5 ServicesGrid
- [x] 深黑渐变背景 (radial-gradient)
- [x] "Our services" 白色标题
- [x] 4+1 服务卡片 (半透明边框):
  - ⚙️ Engineering Services
  - 🔧 Fabrication & Site Support
  - 🚛 Procurement & Materials Supply
  - ✓ Commissioning
  - 🔩 Piping Spools Pre-fabrication
- [x] 每个卡片: icon + 标题 + 描述
- [x] 卡片hover效果

### 3.6 CTABanner
- [x] 深色背景延续
- [x] "Need a professional solution?" 文字
- [x] "Contact Us" 橙色按钮

### 3.7 NewsPreview
- [x] 白色背景
- [x] "Latest News" 大标题 (有滚动触发的reveal)
- [x] 描述文字
- [x] 3列新闻卡片:
  - 图片 + 日期 + 标题 + "Read more →"
- [x] 链接到详情页

---

## Phase 4: About Us 页面

### 4.1 AboutHero
- [x] 全屏团队+平台背景图
- [x] "About Us" 大标题
- [x] 描述文字

### 4.2 Timeline / Year
- [x] "2025" 大数字
- [x] 时间线或成立年份展示

### 4.3 WhoWeAre
- [x] "Who We Are" 文字reveal标题
- [x] 团队合照(会议室)
- [x] 公司介绍段落

### 4.4 VisionMissionValues
- [x] BBSD Vision + 图片 (工人背影)
- [x] BBSD Mission + 图片 (海上平台)
- [x] BBSD Values: Safety, Quality, Efficiency, Integrity

### 4.5 Team Section
- [x] "Meet the team" 标题
- [x] 团队成员卡片 (9人): 照片 + 姓名 + 职位
  - Jack Lu, Yin Yuanxin, Zhu Lin, Carol Zhou, Cici Zhu, Stella Zhang, Yang Junmin, Katrina Pu, Wang Ying

### 4.6 ISO Certifications
- [x] "Our ISO Certifications" 标题
- [x] "Ensuring Quality, Safety, and Environmental Responsibility"
- [x] 证书图片展示

---

## Phase 5: Services 页面

### 5.1 Services 主页
- [x] Hero: 工厂脚手架背景 + "Services" 标题
- [x] 5个服务分类展示 (与首页类似但更详细)
- [x] 每个服务链接到子页面

### 5.2 Services 子页面 (5个)
- [x] /services/engineering
- [x] /services/fabrication
- [x] /services/procurement
- [x] /services/commissioning
- [x] /services/piping-spools-pre-fabrication
- [x] 每个页面: Hero + 详细描述 + 图片 + 相关服务链接

---

## Phase 6: 其他页面

### 6.1 Market 页面
- [ ] Hero + "Market" 标题
- [ ] 市场分类详情

### 6.2 Engineering Services 页面
- [ ] 主页 + 4个子页面
- [ ] E&I Engineering / Mechanical / Piping / Structural

### 6.3 Projects 页面
- [ ] 项目展示页
- [ ] 项目详情页

### 6.4 News 页面
- [ ] 新闻列表页
- [ ] 4篇新闻详情页 (Content Collections)

### 6.5 Contact 页面
- [ ] Hero (会议演示背景)
- [ ] "Let's get in touch" 标题
- [ ] 联系表单 (Name, Email, Phone, Message)
- [ ] 图片轮播 (工作场景)
- [ ] Google Maps嵌入
- [ ] 地址信息

### 6.6 Careers 页面
- [ ] 招聘信息展示

---

## Phase 7: i18n 国际化

### 7.1 语言切换方案
- [ ] URL前缀: `/en/...` 和 `/zh/...`
- [ ] 默认语言: 英文 (根据原站)
- [ ] 语言切换按钮 (Header中)

### 7.2 翻译文件
- [ ] `src/i18n/en.json` - 所有英文文案
- [ ] `src/i18n/zh.json` - 所有中文文案
- [ ] `src/i18n/utils.ts` - i18n工具函数

---

## Phase 8: 动画 & 打磨

### 8.1 滚动动画
- [ ] 所有section的ScrollReveal接入
- [ ] 文字reveal效果 (大标题)
- [ ] 图片懒加载 + 淡入

### 8.2 页面过渡
- [ ] Astro View Transitions (可选)
- [ ] 页面切换平滑过渡

### 8.3 响应式适配
- [ ] Desktop (1200px+)
- [ ] Tablet (810px-1199px)
- [ ] Mobile (< 810px)
- [ ] 移动端汉堡菜单
- [ ] 图片响应式

---

## Phase 9: 优化 & 部署

### 9.1 性能优化
- [ ] 图片优化 (WebP, 压缩)
- [ ] 字体子集化
- [ ] 视频压缩 / 懒加载
- [ ] Lighthouse 90+ 分

### 9.2 SEO
- [ ] Meta tags (title, description, og:image)
- [ ] sitemap.xml
- [ ] robots.txt
- [ ] 结构化数据

### 9.3 部署
- [ ] 选择平台 (Vercel/Netlify/Cloudflare Pages)
- [ ] CI/CD 配置
- [ ] 域名绑定

---

## 开发优先级建议

| 优先级 | 任务 | 预估 |
|--------|------|------|
| P0 | Phase 1 + Phase 2 | 项目骨架 |
| P0 | Phase 3 首页 | 核心页面 |
| P1 | Phase 4 About | 重要页面 |
| P1 | Phase 5 Services | 重要页面 |
| P1 | Phase 6.5 Contact | 重要页面 |
| P2 | Phase 6 其他页面 | 次要页面 |
| P2 | Phase 7 i18n | 双语支持 |
| P3 | Phase 8 动画打磨 | 还原度提升 |
| P3 | Phase 9 优化部署 | 上线准备 |

---

## 素材下载脚本
```bash
# 在 bbsd-astro/public/ 目录下运行
mkdir -p images/{home,about,services,market,projects,news,contact} videos

# Logo
curl -o images/logo.png "https://framerusercontent.com/images/VTy85VIyH4JRjHfFVaYvaJz7EFQ.png"

# Hero视频
curl -o videos/hero.mp4 "https://framerusercontent.com/assets/9hrnL8wk0Xl8NB6KEorCiK14g.mp4"

# 首页图片
curl -o images/home/hero-pattern.png "https://framerusercontent.com/images/f3nL13iNp1N7Pg6x37FzVgzg.png"
curl -o images/home/welder.jpg "https://framerusercontent.com/images/cHBEFOFu4uOGaaVI1w7hokeBv50.jpg"
curl -o images/market/fpso.jpg "https://framerusercontent.com/images/EVcvW3x2kB1EqZQDPYTZslrKizk.jpg"
curl -o images/market/wind.jpg "https://framerusercontent.com/images/rvly9LBDWvfpwnTkegbzwxt6QcY.jpg"
curl -o images/market/onshore.jpg "https://framerusercontent.com/images/YAYm1CX6mDfy2B2b5vxqoedCO0.jpg"
curl -o images/news/anniversary.jpg "https://framerusercontent.com/images/m0RAGI4TH5lYQgbnHNspr5OAeuQ.jpg"
curl -o images/news/signing.jpg "https://framerusercontent.com/images/BEs3a4Ny9pKIQnCtaIjJevDAX8.jpg"
curl -o images/news/iso.jpeg "https://framerusercontent.com/images/ScYwoHwthy0DTa7CkYalZX4cY.jpeg"
curl -o images/news/photo1.jpg "https://framerusercontent.com/images/PUU64Ou7QtWSRd1vILq9ejCIbY.jpg"
curl -o images/news/photo2.jpg "https://framerusercontent.com/images/G9oflMJTpGiquwTF7q4O8eG8Boo.jpg"

# Services页图片
curl -o images/services/hero.jpg "https://framerusercontent.com/images/d6pxvKFCe6Fmsl271hIv4PK0.jpg"
curl -o images/services/s1.jpg "https://framerusercontent.com/images/8GGaISF6YyVKEjV138nAyLegs.jpg"
curl -o images/services/s2.jpg "https://framerusercontent.com/images/C9u26sxcnzAURae4mjvnizde6s.jpg"
curl -o images/services/s3.jpg "https://framerusercontent.com/images/ZNc3hPekrBNwNkb7zVZsvO0keM.jpg"
curl -o images/services/s4.jpg "https://framerusercontent.com/images/eTkCLsIejqoVHRU7F0xfsUXhnE.jpg"
curl -o images/services/s5.jpg "https://framerusercontent.com/images/vEMQTdsrlxwqJ4vJz1AIoVJQg.jpg"
```

> **重要**: About、Contact等页面的素材需要打开对应页面后，通过浏览器DevTools或脚本进一步提取。每个子页面开发时再补充。
