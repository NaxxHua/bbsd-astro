import TextReveal from '../animations/TextReveal'
import ScrollReveal from '../animations/ScrollReveal'
import { url } from '../../utils/url'

export default function VisionMissionValues() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        {/* Vision - text left, image right */}
        <div className="mb-20 grid items-center gap-12 lg:grid-cols-2">
          <div>
            <TextReveal
              text="BBSD Vision"
              tag="h2"
              className="mb-6 text-3xl font-bold text-dark md:text-4xl"
            />
            <ScrollReveal delay={0.2}>
              <p className="text-base leading-relaxed text-gray">
                To be a widely trusted partner for global offshore engineering
                projects, fueling project success with exceptional expertise.
              </p>
            </ScrollReveal>
          </div>
          <ScrollReveal>
            <img
              src={url('/images/about/vision-workers.png')}
              alt="BBSD workers"
              loading="lazy"
              className="w-full rounded-2xl object-cover"
            />
          </ScrollReveal>
        </div>

        {/* Mission - image left, text right */}
        <div className="mb-20 grid items-center gap-12 lg:grid-cols-2">
          <ScrollReveal>
            <img
              src={url('/images/about/mission-platform.jpg')}
              alt="Industrial module transport"
              loading="lazy"
              className="w-full rounded-2xl object-cover"
            />
          </ScrollReveal>
          <div>
            <TextReveal
              text="BBSD Mission"
              tag="h2"
              className="mb-6 text-3xl font-bold text-dark md:text-4xl"
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
        </div>

        {/* Values - text left, image right */}
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <TextReveal
              text="BBSD Values"
              tag="h2"
              className="mb-6 text-3xl font-bold text-dark md:text-4xl"
            />
            <ScrollReveal delay={0.2}>
              <ul className="space-y-3 text-base leading-relaxed text-gray">
                <li>• Safety first, integrity as the cornerstone.</li>
                <li>• Excellence and professionalism, reliable delivery.</li>
                <li>• Global expertise, local execution.</li>
              </ul>
            </ScrollReveal>
          </div>
          <ScrollReveal>
            <img
              src={url('/images/about/values-night.jpg')}
              alt="Offshore platform at night"
              loading="lazy"
              className="w-full rounded-2xl object-cover"
            />
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
