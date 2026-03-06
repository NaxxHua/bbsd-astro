import ScrollReveal from '../animations/ScrollReveal'

export default function TimelineYear() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <ScrollReveal>
            <img
              src="/images/about/team-overview.jpg"
              alt="Our experts"
              className="w-full rounded-2xl object-cover"
            />
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="text-center lg:text-left">
              <p className="mb-2 text-sm font-medium tracking-wider text-gray-light uppercase">
                Since
              </p>
              <p className="text-8xl font-bold text-blue-dark md:text-9xl">
                2025
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
