import TextReveal from '../animations/TextReveal'
import ScrollReveal from '../animations/ScrollReveal'
import T from '../../i18n/T'
import { url } from '../../utils/url'

const markets = [
  {
    title: 'OFFSHORE FPSO Modulars',
    titleZh: '海上 FPSO 模块',
    image: '/images/home/offshore-crane.jpg',
    description:
      'Driving the future of energy with expertise in offshore wind, hydrogen, and oil & gas, delivering safe, efficient, and sustainable solutions.',
    descriptionZh:
      '凭借在海上风电、氢能及油气领域的专业能力引领能源未来，提供安全、高效、可持续的解决方案。',
  },
  {
    title: 'Renewable Energy',
    titleZh: '可再生能源',
    image: '/images/home/market-renewable.jpg',
    description:
      'Building stronger cities through reliable engineering for bridges, pipelines, and essential urban utilities, designed for safety and long-term resilience.',
    descriptionZh:
      '通过为桥梁、管道及关键城市基础设施提供可靠工程，打造更坚固的城市，兼顾安全性与长期韧性。',
  },
  {
    title: 'Onshore Plant Modulars',
    titleZh: '陆上工厂模块',
    image: '/images/home/market-onshore.jpg',
    description:
      'Your trusted partner for cross-border projects, combining local expertise and compliance to ensure seamless execution between China and Europe.',
    descriptionZh:
      '作为跨境项目值得信赖的合作伙伴，融合本地专业能力与合规保障，确保中欧之间项目无缝执行。',
  },
]

export default function MarketCards() {
  return (
    <section className="bg-blue-light py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-[1200px] px-5 md:px-6">
        <div className="mb-10 flex flex-col gap-3 md:mb-14 md:flex-row md:items-end md:justify-between lg:mb-16">
          <TextReveal
            text="Our Market"
            zh="我们的市场"
            tag="h2"
            className="text-3xl font-bold text-blue-dark md:text-4xl lg:text-5xl"
          />
          <ScrollReveal>
            <p className="text-sm text-gray md:text-base">
              <T en="Where We Make an Impact." zh="我们创造价值的领域。" />
            </p>
          </ScrollReveal>
        </div>

        <div className="grid gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
          {markets.map((market, i) => (
            <ScrollReveal key={market.title} delay={i * 0.15}>
              <div className="group overflow-hidden rounded-xl bg-white shadow-sm transition-shadow hover:shadow-lg md:rounded-2xl">
                <div className="overflow-hidden">
                  <img
                    src={url(market.image)}
                    alt={market.title}
                    loading="lazy"
                    className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105 md:h-56"
                  />
                </div>
                <div className="p-5 md:p-6">
                  <h3 className="mb-2 text-base font-bold text-dark md:mb-3 md:text-lg">
                    <T en={market.title} zh={market.titleZh} />
                  </h3>
                  <p className="text-xs leading-relaxed text-gray md:text-sm">
                    <T en={market.description} zh={market.descriptionZh} />
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
