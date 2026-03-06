import TextReveal from '../animations/TextReveal'
import ScrollReveal from '../animations/ScrollReveal'

const markets = [
  {
    title: 'OFFSHORE FPSO Modulars',
    image: '/images/home/fpso-platform.jpg',
    description:
      'We provide comprehensive engineering and fabrication services for FPSO topside modules, supporting the global offshore oil and gas industry.',
  },
  {
    title: 'Renewable Energy',
    image: '/images/home/wind-energy.jpg',
    description:
      'From offshore wind foundations to onshore renewable facilities, we deliver sustainable energy solutions with engineering excellence.',
  },
  {
    title: 'Onshore Plant Modulars',
    image: '/images/home/offshore-crane.jpg',
    description:
      'We specialize in modular construction for onshore petrochemical, LNG, and industrial plants, optimizing project schedules and costs.',
  },
]

export default function MarketCards() {
  return (
    <section className="bg-blue-light py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <TextReveal
          text="Our Market"
          tag="h2"
          className="mb-12 text-center text-4xl font-bold text-blue-dark md:text-5xl"
        />

        <div className="grid gap-8 md:grid-cols-3">
          {markets.map((market, i) => (
            <ScrollReveal key={market.title} delay={i * 0.15}>
              <div className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow hover:shadow-lg">
                <div className="overflow-hidden">
                  <img
                    src={market.image}
                    alt={market.title}
                    className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-lg font-bold text-dark">
                    {market.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray">
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
