import TextReveal from '../animations/TextReveal'
import ScrollReveal from '../animations/ScrollReveal'

const services = [
  {
    icon: '⚙️',
    title: 'Engineering Services',
    description:
      'Comprehensive multi-discipline engineering including piping, structural, mechanical, and E&I design.',
    href: '/services/engineering',
  },
  {
    icon: '🔧',
    title: 'Fabrication & Site Support',
    description:
      'Expert fabrication management and on-site support for complex modular construction projects.',
    href: '/services/fabrication',
  },
  {
    icon: '🚛',
    title: 'Procurement & Materials Supply',
    description:
      'Strategic procurement services ensuring quality materials delivered on time and within budget.',
    href: '/services/procurement',
  },
  {
    icon: '✓',
    title: 'Commissioning',
    description:
      'Professional commissioning services to ensure safe and efficient system startup and handover.',
    href: '/services/commissioning',
  },
  {
    icon: '🔩',
    title: 'Piping Spools Pre-fabrication',
    description:
      'High-quality piping spool fabrication with precision cutting, welding, and testing capabilities.',
    href: '/services/piping-spools-pre-fabrication',
  },
]

export default function ServicesGrid() {
  return (
    <section className="relative overflow-hidden bg-dark py-24">
      {/* Radial gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(12,69,137,0.25)_0%,_transparent_60%)]" />

      <div className="relative z-10 mx-auto max-w-[1200px] px-6">
        <TextReveal
          text="Our services"
          tag="h2"
          className="mb-12 text-center text-4xl font-bold text-white md:text-5xl"
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {/* First 4 cards */}
          {services.slice(0, 4).map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 0.1}>
              <a
                href={service.href}
                className="group flex h-full flex-col rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:border-white/25 hover:bg-white/10"
              >
                <span className="mb-4 text-3xl">{service.icon}</span>
                <h3 className="mb-2 text-base font-semibold text-white">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-white/60">
                  {service.description}
                </p>
              </a>
            </ScrollReveal>
          ))}
        </div>

        {/* 5th card centered */}
        <div className="mt-5 flex justify-center">
          <div className="w-full md:w-1/2 lg:w-1/4">
            <ScrollReveal delay={0.4}>
              <a
                href={services[4].href}
                className="group flex h-full flex-col rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:border-white/25 hover:bg-white/10"
              >
                <span className="mb-4 text-3xl">{services[4].icon}</span>
                <h3 className="mb-2 text-base font-semibold text-white">
                  {services[4].title}
                </h3>
                <p className="text-sm leading-relaxed text-white/60">
                  {services[4].description}
                </p>
              </a>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
