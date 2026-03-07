import ScrollReveal from '../animations/ScrollReveal'
import { url } from '../../utils/url'

export default function CTABanner() {
  return (
    <section className="bg-dark py-12 md:py-14 lg:py-16">
      <div className="mx-auto max-w-[1200px] px-5 text-center md:px-6">
        <ScrollReveal>
          <p className="mb-5 text-xl font-semibold text-white md:mb-6 md:text-2xl lg:text-3xl">
            Need a professional solution?
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <a
            href={url('/contact')}
            className="inline-block rounded-full bg-orange-primary px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-orange-hover md:px-8 md:py-3.5"
          >
            Contact Us
          </a>
        </ScrollReveal>
      </div>
    </section>
  )
}
