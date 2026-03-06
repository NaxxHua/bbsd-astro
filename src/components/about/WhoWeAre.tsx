import TextReveal from '../animations/TextReveal'
import ScrollReveal from '../animations/ScrollReveal'

export default function WhoWeAre() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <TextReveal
          text="Who We Are"
          tag="h2"
          className="mb-10 text-4xl font-bold text-dark md:text-5xl"
        />

        <div className="grid items-center gap-12 lg:grid-cols-2">
          <ScrollReveal>
            <p className="text-base leading-relaxed text-gray">
              BBSD is a trusted engineering and site services partner, supporting
              global energy and infrastructure projects with a strong presence in
              both China and Europe. We combine technical expertise, international
              compliance knowledge, and local execution capabilities to deliver
              reliable, safe, and cost-efficient solutions across industries.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <img
              src="/images/about/collab-1.jpg"
              alt="Team collaboration"
              className="w-full rounded-2xl object-cover"
            />
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
