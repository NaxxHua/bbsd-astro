import TextReveal from '../animations/TextReveal'
import ScrollReveal from '../animations/ScrollReveal'
import { url } from '../../utils/url'

const markets = [
  {
    title: 'OFFSHORE FPSO Modulars',
    image: '/images/home/fpso-platform.jpg',
    description:
      'Driving the future of energy with expertise in offshore wind, hydrogen, and oil & gas, delivering safe, efficient, and sustainable solutions.',
  },
  {
    title: 'Renewable Energy',
    image: '/images/home/wind-energy.jpg',
    description:
      'Building stronger cities through reliable engineering for bridges, pipelines, and essential urban utilities, designed for safety and long-term resilience.',
  },
  {
    title: 'Onshore Plant Modulars',
    image: '/images/home/offshore-crane.jpg',
    description:
      'Your trusted partner for cross-border projects, combining local expertise and compliance to ensure seamless execution between China and Europe.',
  },
]

export default function MarketCards() {
  return (
    <section className="bg-blue-light py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-[1200px] px-5 md:px-6">
        <div className="mb-10 flex flex-col gap-3 md:mb-14 md:flex-row md:items-end md:justify-between lg:mb-16">
          <TextReveal
            text="Our Market"
            tag="h2"
            className="text-3xl font-bold text-blue-dark md:text-4xl lg:text-5xl"
          />
          <ScrollReveal>
            <p className="text-sm text-gray md:text-base">Where We Make an Impact.</p>
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
                    className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105 md:h-56"
                  />
                </div>
                <div className="p-5 md:p-6">
                  <h3 className="mb-2 text-base font-bold text-dark md:mb-3 md:text-lg">
                    {market.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-gray md:text-sm">
                    {market.description}
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
