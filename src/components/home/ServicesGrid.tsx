import { Gear, HardHat, Truck, PaperPlaneTilt, Wrench, ArrowRight } from '@phosphor-icons/react'
import TextReveal from '../animations/TextReveal'
import ScrollReveal from '../animations/ScrollReveal'
import T from '../../i18n/T'
import { url } from '../../utils/url'

const services = [
  {
    title: 'Engineering Services',
    titleZh: '工程服务',
    description: 'Comprehensive engineering solutions from concept to detailed design.',
    descriptionZh: '从概念到详细设计的全面工程解决方案。',
    href: '/services/engineering',
    Icon: Gear,
  },
  {
    title: 'Fabrication & Site Support',
    titleZh: '制造与现场支持',
    description: 'Reliable on-site services ensuring quality, safety, and timely execution.',
    descriptionZh: '可靠的现场服务，确保质量、安全与按时执行。',
    href: '/services/fabrication',
    Icon: HardHat,
  },
  {
    title: 'Procurement & Materials Supply',
    titleZh: '采购与物资供应',
    description: 'Strategic sourcing to optimize cost, quality, and delivery.',
    descriptionZh: '战略采购，优化成本、质量与交付。',
    href: '/services/procurement',
    Icon: Truck,
  },
  {
    title: 'Commissioning',
    titleZh: '调试',
    description: 'Ensuring systems operate safely, efficiently, and ready for handover',
    descriptionZh: '确保系统安全、高效运行并具备移交条件',
    href: '/services/commissioning',
    Icon: PaperPlaneTilt,
  },
  {
    title: 'Piping Spools Pre-fabrication',
    titleZh: '管段预制',
    description: 'Off-site fabrication to ensure quality, efficiency, and faster installation.',
    descriptionZh: '场外预制，确保质量、效率与更快的安装。',
    href: '/services/piping-spools-pre-fabrication',
    Icon: Wrench,
  },
]

export default function ServicesGrid() {
  return (
    <section className="flex flex-col items-center justify-center overflow-hidden bg-[radial-gradient(50%_50%_at_50%_50%,#5e5e5e_0%,#000_100%)] px-5 py-20 md:px-[30px] lg:py-[125px]">
      <div className="flex w-full max-w-[1200px] flex-col gap-[75px]">
        {/* Title area */}
        <div className="flex flex-col items-center gap-5">
          <TextReveal
            text="Our services"
            zh="我们的服务"
            tag="h2"
            className="text-center text-[36px] font-semibold leading-[1.15] tracking-[-0.04em] text-white md:text-[44px] lg:text-[55px] lg:leading-[63.25px] lg:tracking-[-2.2px]"
          />
          <ScrollReveal>
            <p className="text-center text-base font-normal tracking-[-0.02em] text-blue-light lg:text-[18px] lg:leading-[30.6px] lg:tracking-[-0.36px]">
              <T
                en={'“Our Expertise in Engineering & Site Support”'}
                zh="“工程与现场支持领域的专业实力”"
              />
            </p>
          </ScrollReveal>
        </div>

        {/* Cards grid - 4 columns, 5 cards (last alone on row 2) */}
        <div className="grid grid-cols-1 gap-[30px] md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 0.1}>
              <a
                href={url(service.href)}
                className="group flex h-full flex-col items-start justify-center gap-[50px] rounded-[20px] border border-white/10 bg-black/10 p-[30px] shadow-[0_0.6px_1.6px_-1px_rgba(0,0,0,0.15),0_2.3px_6px_-2px_rgba(0,0,0,0.14),0_10px_26px_-3px_rgba(0,0,0,0.1)] backdrop-blur-[5px] transition-colors hover:bg-black/25 lg:h-[315px]"
              >
                {/* Icon swaps to right-arrow on hover */}
                <div className="relative h-[50px] w-[50px] overflow-hidden text-white">
                  <span className="absolute inset-0 transition-opacity duration-300 ease-out group-hover:opacity-0">
                    <service.Icon size={50} weight="regular" />
                  </span>
                  <span className="absolute inset-0 -translate-x-[50px] opacity-0 transition-all duration-300 ease-out group-hover:translate-x-0 group-hover:opacity-100">
                    <ArrowRight size={50} weight="regular" />
                  </span>
                </div>
                <div className="flex flex-col gap-[10px]">
                  <h3 className="text-[22px] font-semibold leading-[33px] tracking-[-0.44px] text-white">
                    <T en={service.title} zh={service.titleZh} />
                  </h3>
                  <p className="text-base font-normal leading-[27.2px] tracking-[-0.32px] text-[#cccccc]">
                    <T en={service.description} zh={service.descriptionZh} />
                  </p>
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA block (inside Our Services section, matching original) */}
        <div className="flex flex-col items-center gap-[30px]">
          <ScrollReveal>
            <h2 className="text-center text-[22px] font-semibold tracking-[-0.02em] text-white lg:text-[28px] lg:leading-[36px]">
              <T en="Need a professional solution?" zh="需要专业的解决方案？" />
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <a
              href={url('/contact')}
              className="rounded-[10px] bg-orange-primary px-[30px] py-[20px] text-[18px] font-semibold leading-[1.2] text-black shadow-[0_0.6px_1.6px_-1px_rgba(0,0,0,0.15),0_2.3px_6px_-2px_rgba(0,0,0,0.14),0_10px_26px_-3px_rgba(0,0,0,0.1)] transition-colors hover:bg-orange-hover"
            >
              <T en="Contact Us" zh="联系我们" />
            </a>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
