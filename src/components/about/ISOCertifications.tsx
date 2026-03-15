import TextReveal from '../animations/TextReveal'
import ScrollReveal from '../animations/ScrollReveal'
import { url } from '../../utils/url'

export default function ISOCertifications() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-[1200px] px-6 text-center">
        <TextReveal
          text="Our ISO Certifications"
          tag="h2"
          className="mb-4 text-4xl font-bold text-dark md:text-5xl"
        />
        <ScrollReveal>
          <p className="mx-auto mb-12 max-w-2xl text-base text-gray italic">
            Ensuring Quality, Safety, and Environmental Responsibility
          </p>
        </ScrollReveal>

        {/* ISO Badge */}
        <ScrollReveal delay={0.1}>
          <div className="mx-auto mb-16 max-w-xl">
            <img
              src={url('/images/about/iso-combined-badge.jpg')}
              alt="ABS Quality Evaluations - ANAB Accredited - ISO 9001, ISO 14001, ISO 45001"
              loading="lazy"
              className="mx-auto w-full max-w-md"
            />
          </div>
        </ScrollReveal>

        {/* Certificate Images */}
        <ScrollReveal delay={0.2}>
          <div className="grid gap-6 md:grid-cols-3">
            <img
              src={url('/images/about/iso-cert-1.jpg')}
              alt="ISO 9001 Certificate"
              loading="lazy"
              className="w-full rounded-lg shadow-sm"
            />
            <img
              src={url('/images/about/iso-cert-2.jpg')}
              alt="ISO 14001 Certificate"
              loading="lazy"
              className="w-full rounded-lg shadow-sm"
            />
            <img
              src={url('/images/about/iso-cert-3.jpg')}
              alt="ISO 45001 Certificate"
              loading="lazy"
              className="w-full rounded-lg shadow-sm"
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
