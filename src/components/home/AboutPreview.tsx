import ScrollReveal from '../animations/ScrollReveal'

export default function AboutPreview() {
  return (
    <section className="relative overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/home/fpso-platform.jpg')",
        }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 mx-auto max-w-[1200px] px-6 py-24 md:py-32">
        <ScrollReveal>
          <span className="mb-6 inline-block text-sm font-medium tracking-wider text-orange-primary uppercase">
            ↗ About us
          </span>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="max-w-3xl text-lg leading-relaxed text-white/90 md:text-xl md:leading-relaxed">
            BBSD is a professional engineering service company based in the
            Netherlands, dedicated to providing comprehensive engineering solutions
            for the global energy industry. We specialize in offshore FPSO modular
            projects, renewable energy facilities, and onshore plant modular
            construction, offering end-to-end services from engineering design
            to fabrication and commissioning.
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
