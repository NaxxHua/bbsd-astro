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
    <section className="flex flex-col items-center justify-center overflow-hidden bg-blue-light px-5 py-20 md:px-[50px] lg:py-[125px]">
      <div className="flex w-full max-w-[1200px] flex-col gap-[75px]">
        {/* Title row */}
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-[100px]">
          <div className="flex-1">
            <TextReveal
              text="Our Market"
              zh="我们的市场"
              tag="h2"
              className="text-[36px] font-semibold leading-[1.15] tracking-[-0.04em] text-blue-dark md:text-[44px] lg:text-[55px] lg:leading-[63.25px] lg:tracking-[-2.2px]"
            />
          </div>
          <div className="flex-1">
            <ScrollReveal>
              <p className="text-base font-normal tracking-[-0.02em] text-blue-dark lg:text-[18px] lg:leading-[30.6px] lg:tracking-[-0.36px]">
                <T en="Where We Make an Impact." zh="我们创造价值的领域。" />
              </p>
            </ScrollReveal>
          </div>
        </div>

        {/* Cards row */}
        <div className="flex flex-col gap-[30px] lg:flex-row">
          {markets.map((market, i) => (
            <div key={market.title} className="flex-1">
              <ScrollReveal delay={i * 0.15}>
                <div className="flex w-full flex-col overflow-hidden rounded-[15px] bg-white lg:h-[563px]">
                  <img
                    src={url(market.image)}
                    alt={market.title}
                    loading="lazy"
                    className="h-[352px] w-full shrink-0 object-cover"
                  />
                  <div className="flex flex-1 flex-col gap-[10px] p-[30px]">
                    <h4 className="text-[20px] font-semibold leading-[32px] tracking-[-0.4px] text-black">
                      <T en={market.title} zh={market.titleZh} />
                    </h4>
                    <p className="text-base font-normal leading-[27.2px] tracking-[-0.32px] text-gray">
                      <T en={market.description} zh={market.descriptionZh} />
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
