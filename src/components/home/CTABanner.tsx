import ScrollReveal from '../animations/ScrollReveal'

export default function CTABanner() {
  return (
    <section className="bg-dark py-16">
      <div className="mx-auto max-w-[1200px] px-6 text-center">
        <ScrollReveal>
          <p className="mb-6 text-2xl font-semibold text-white md:text-3xl">
            Need a professional solution?
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <a
            href="/contact"
            className="inline-block rounded-full bg-orange-primary px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-orange-hover"
          >
            Contact Us
          </a>
        </ScrollReveal>
      </div>
    </section>
  )
}
