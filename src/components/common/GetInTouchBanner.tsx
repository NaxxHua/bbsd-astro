import TextReveal from '../animations/TextReveal'
import ScrollReveal from '../animations/ScrollReveal'

export default function GetInTouchBanner() {
  return (
    <section className="relative overflow-hidden bg-dark py-24">
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(12,69,137,0.3)_0%,_transparent_70%)]" />

      <div className="relative mx-auto max-w-[1200px] px-6 text-center">
        <TextReveal
          text="Get In Touch With Us"
          tag="h2"
          className="mb-8 text-4xl font-bold text-white md:text-5xl"
        />
        <ScrollReveal delay={0.3}>
          <a
            href="/contact"
            className="inline-block rounded-full bg-orange-primary px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-orange-hover"
          >
            Contact
          </a>
        </ScrollReveal>
      </div>
    </section>
  )
}
