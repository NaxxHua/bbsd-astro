import ScrollReveal from '../animations/ScrollReveal'
import { url } from '../../utils/url'

export default function AboutPreview() {
  return (
    <section className="relative overflow-hidden">
      {/* Background image - FPSO platform (matching original) */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('${url('/images/home/fpso-platform.jpg')}')`,
        }}
      />
      {/* Dark overlay matching original: ~70% opacity */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(rgba(0,0,0,0.71), rgba(0,0,0,0.69))' }} />

      <div className="relative z-10 mx-auto max-w-[1200px] px-5 py-16 md:px-6 md:py-24 lg:py-32">
        <ScrollReveal>
          <span className="mb-4 inline-flex items-center gap-2 text-xs font-medium tracking-wider text-white/80 md:mb-6 md:text-sm">
            <svg className="h-3 w-3 md:h-3.5 md:w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
            About us
          </span>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <h3 className="max-w-4xl text-lg leading-relaxed font-light text-white md:text-2xl md:leading-relaxed lg:text-[32px] lg:leading-[1.7]">
            BBSD (Jiangsu Nantong) Engineering Technology Co., Ltd. is a
            dynamic, wholly foreign-owned enterprise based in Nantong,
            Jiangsu Province. Backed by a core team from Jord Oil & Gas, a
            leading European EPC company, we bring world-class expertise to
            deliver integrated engineering solutions for the global offshore oil
            and gas industry.
          </h3>
        </ScrollReveal>
      </div>
    </section>
  )
}
