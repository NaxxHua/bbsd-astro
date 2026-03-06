import TextReveal from '../animations/TextReveal'
import ScrollReveal from '../animations/ScrollReveal'

export default function GetInTouchBanner() {
  return (
    <section className="relative overflow-hidden bg-dark py-14 md:py-16 lg:py-20">
      {/* Subtle gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.04)_0%,_transparent_70%)]" />

      <div className="relative mx-auto flex max-w-[1200px] flex-col gap-6 px-5 md:flex-row md:items-center md:justify-between md:px-6">
        <TextReveal
          text="Get In Touch With Us"
          tag="h2"
          className="text-2xl font-bold text-white md:text-3xl lg:text-4xl"
        />
        <ScrollReveal delay={0.3}>
          <a
            href="/contact"
            className="inline-block shrink-0 self-start rounded-lg bg-orange-primary px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-orange-hover md:self-auto md:px-8 md:py-3.5"
          >
            Contact
          </a>
        </ScrollReveal>
      </div>
    </section>
  )
}
