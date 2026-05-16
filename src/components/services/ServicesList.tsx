import { Gear, Wrench, Truck, Pipe } from '@phosphor-icons/react'
import ScrollReveal from '../animations/ScrollReveal'
import T from '../../i18n/T'
import { url } from '../../utils/url'

// Commissioning icon — raw path from the original site (not a Phosphor export)
function CommissioningIcon({ size = 50 }: { size?: number; weight?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 256 256" fill="currentColor" aria-hidden="true">
      <path d="M236.19,134.81l-104,64A8,8,0,0,1,120,192V78.32L28.19,134.81a8,8,0,0,1-8.38-13.62l104-64A8,8,0,0,1,136,64V177.68l91.81-56.49a8,8,0,0,1,8.38,13.62Z" />
    </svg>
  )
}

const services = [
  {
    Icon: Gear,
    image: 'service-1.jpg',
    href: '/services/engineering',
    en: 'Engineering Services',
    zh: '工程服务',
    descEn: 'Comprehensive engineering solutions from concept to detailed design.',
    descZh: '从概念到详细设计的全面工程解决方案。',
  },
  {
    Icon: Wrench,
    image: 'service-2.jpg',
    href: '/services/fabrication',
    en: 'Fabrication & Site Support',
    zh: '制造与现场支持',
    descEn: 'Reliable on-site services ensuring quality, safety, and timely execution.',
    descZh: '可靠的现场服务，确保质量、安全与按时执行。',
  },
  {
    Icon: Truck,
    image: 'service-3.jpg',
    href: '/services/procurement',
    en: 'Procurement & Materials Supply',
    zh: '采购与物资供应',
    descEn: 'Strategic sourcing to optimize cost, quality, and delivery.',
    descZh: '战略采购，优化成本、质量与交付。',
  },
  {
    Icon: CommissioningIcon,
    image: 'service-4.jpg',
    href: '/services/commissioning',
    en: 'Commissioning',
    zh: '调试',
    descEn: 'Ensuring systems operate safely, efficiently, and ready for handover',
    descZh: '确保系统安全、高效运行并具备移交条件',
  },
  {
    Icon: Pipe,
    image: 'service-5.jpg',
    href: '/services/piping-spools-pre-fabrication',
    en: 'Piping Spools Pre-fabrication',
    zh: '管段预制',
    descEn: 'Off-site fabrication to ensure quality, efficiency, and faster installation.',
    descZh: '场外预制，确保质量、效率与更快的安装。',
  },
]

export default function ServicesList() {
  return (
    <section className="flex flex-col items-center justify-center bg-white px-5 pt-20 pb-24 md:px-[30px] lg:px-[150px] lg:pb-[100px]">
      <div className="flex w-full max-w-[1241px] flex-col items-center gap-[35px]">
        {/* Cards grid — 2 columns */}
        <div className="grid w-full grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-[100px]">
          {services.map((service, i) => (
            <ScrollReveal key={service.href} delay={i * 0.1}>
              <a
                href={url(service.href)}
                className="flex flex-col items-start gap-5 rounded-[20px] bg-blue-light px-10 py-[50px] text-black shadow-[0_0.6px_1.6px_-1px_rgba(0,0,0,0.15),0_2.3px_6px_-2px_rgba(0,0,0,0.14),0_10px_26px_-3px_rgba(0,0,0,0.1)] transition-transform hover:-translate-y-1 lg:py-20"
              >
                <img
                  src={url(`/images/services/${service.image}`)}
                  alt={service.en}
                  loading="lazy"
                  className="h-[198px] w-full rounded-[15px] object-cover"
                />
                <service.Icon size={50} weight="regular" />
                <div className="flex flex-col gap-[10px]">
                  <h3 className="text-[22px] font-semibold leading-[33px] tracking-[-0.44px] text-black">
                    <T en={service.en} zh={service.zh} />
                  </h3>
                  <p className="text-base font-normal leading-[27.2px] tracking-[-0.32px] text-gray">
                    <T en={service.descEn} zh={service.descZh} />
                  </p>
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>

        {/* Download button (no live PDF link yet) */}
        <a
          href="#"
          className="rounded-[30px] bg-[#111111] px-[14px] py-[10px] text-base font-medium text-white"
        >
          <T en="Download Service List" zh="下载服务清单" />
        </a>
      </div>
    </section>
  )
}
