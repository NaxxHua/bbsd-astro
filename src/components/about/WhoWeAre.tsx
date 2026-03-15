import TextReveal from '../animations/TextReveal'
import ScrollReveal from '../animations/ScrollReveal'
import { url } from '../../utils/url'

export default function WhoWeAre() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <ScrollReveal>
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={url('/images/about/team-overview.jpg')}
                alt="Our team"
                loading="lazy"
                className="w-full object-cover"
              />
              <div className="absolute bottom-6 left-6">
                <p className="text-xs font-medium tracking-wider text-white/80 uppercase">
                  Since
                </p>
                <p className="text-6xl font-bold text-white md:text-7xl">
                  2025
                </p>
              </div>
            </div>
          </ScrollReveal>

          <div>
            <TextReveal
              text="Who We Are"
              tag="h2"
              className="mb-6 text-4xl font-bold text-dark md:text-5xl"
            />
            <ScrollReveal delay={0.2}>
              <p className="text-base leading-relaxed text-gray">
                BBSD is a trusted engineering and site services partner, supporting
                global energy and infrastructure projects with a strong presence in
                both China and Europe. We combine technical expertise, international
                compliance knowledge, and local execution capabilities to deliver
                reliable, safe, and cost-efficient solutions across industries.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
