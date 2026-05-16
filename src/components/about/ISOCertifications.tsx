import TextReveal from '../animations/TextReveal'
import ScrollReveal from '../animations/ScrollReveal'
import T from '../../i18n/T'
import { url } from '../../utils/url'

const certs = [
  { image: '/images/about/iso-cert-1.jpg', alt: 'ISO 9001 Certificate' },
  { image: '/images/about/iso-cert-2.jpg', alt: 'ISO 14001 Certificate' },
  { image: '/images/about/iso-cert-3.jpg', alt: 'ISO 45001 Certificate' },
]

export default function ISOCertifications() {
  return (
    <section className="flex flex-col items-center bg-white px-5 py-20">
      <div className="flex w-full max-w-[1200px] flex-col items-center gap-[30px]">
        {/* Title area */}
        <div className="flex flex-col items-center gap-3 text-center">
          <TextReveal
            text="Our ISO Certifications"
            zh="我们的 ISO 认证"
            tag="h2"
            className="text-[36px] font-semibold leading-[1.15] tracking-[-0.04em] text-black md:text-[44px] lg:text-[55px] lg:leading-[63.25px] lg:tracking-[-2.2px]"
          />
          <p className="font-inter text-[22px] font-semibold tracking-[-0.04em] text-[#999999] md:text-[26px] lg:text-[30px] lg:leading-[30px] lg:tracking-[-1.2px]">
            <T
              en="Ensuring Quality, Safety, and Environmental Responsibility"
              zh="确保质量、安全与环境责任"
            />
          </p>
        </div>

        {/* Combined accreditation banner */}
        <ScrollReveal>
          <img
            src={url('/images/about/iso-combined-badge.jpg')}
            alt="ABS Quality Evaluations - ANAB Accredited - ISO 9001, ISO 14001, ISO 45001"
            loading="lazy"
            className="w-full max-w-[585px] object-cover"
          />
        </ScrollReveal>

        {/* Certificate grid */}
        <ScrollReveal delay={0.2}>
          <div className="grid grid-cols-1 gap-x-[30px] gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
            {certs.map((cert) => (
              <img
                key={cert.image}
                src={url(cert.image)}
                alt={cert.alt}
                loading="lazy"
                className="w-full object-cover"
              />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
