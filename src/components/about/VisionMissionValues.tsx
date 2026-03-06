import TextReveal from '../animations/TextReveal'
import ScrollReveal from '../animations/ScrollReveal'

const values = [
  { title: 'Safety', icon: '🛡️' },
  { title: 'Quality', icon: '✦' },
  { title: 'Efficiency', icon: '⚡' },
  { title: 'Integrity', icon: '🤝' },
]

export default function VisionMissionValues() {
  return (
    <section className="bg-blue-light py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        {/* Vision */}
        <div className="mb-20 grid items-center gap-12 lg:grid-cols-2">
          <ScrollReveal>
            <img
              src="/images/about/collab-2.jpg"
              alt="BBSD team at work"
              className="w-full rounded-2xl object-cover"
            />
          </ScrollReveal>
          <div>
            <TextReveal
              text="BBSD Vision"
              tag="h2"
              className="mb-6 text-3xl font-bold text-blue-dark md:text-4xl"
            />
            <ScrollReveal delay={0.2}>
              <p className="text-base leading-relaxed text-gray">
                To be a widely trusted partner for global offshore engineering
                projects, fueling project success with exceptional expertise.
              </p>
            </ScrollReveal>
          </div>
        </div>

        {/* Mission */}
        <div className="mb-20 grid items-center gap-12 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <TextReveal
              text="BBSD Mission"
              tag="h2"
              className="mb-6 text-3xl font-bold text-blue-dark md:text-4xl"
            />
            <ScrollReveal delay={0.2}>
              <p className="text-base leading-relaxed text-gray">
                To provide global EPC clients with outstanding, reliable, and
                cost-effective design, procurement, and engineering management
                services, ensuring every project is delivered on schedule, safely,
                and with guaranteed quality and quantity.
              </p>
            </ScrollReveal>
          </div>
          <ScrollReveal className="order-1 lg:order-2">
            <img
              src="/images/home/fpso-platform.jpg"
              alt="Offshore platform"
              className="w-full rounded-2xl object-cover"
            />
          </ScrollReveal>
        </div>

        {/* Values */}
        <div>
          <TextReveal
            text="BBSD Values"
            tag="h2"
            className="mb-8 text-center text-3xl font-bold text-blue-dark md:text-4xl"
          />
          <ScrollReveal delay={0.2}>
            <ul className="mx-auto max-w-2xl space-y-3 text-base leading-relaxed text-gray">
              <li>• Safety first, integrity as the cornerstone.</li>
              <li>• Excellence and professionalism, reliable delivery.</li>
              <li>• Global expertise, local execution.</li>
            </ul>
          </ScrollReveal>

          <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">
            {values.map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 0.1}>
                <div className="flex flex-col items-center rounded-xl bg-white p-6 shadow-sm">
                  <span className="mb-3 text-3xl">{v.icon}</span>
                  <h3 className="text-sm font-semibold text-dark">{v.title}</h3>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
