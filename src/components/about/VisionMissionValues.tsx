import TextReveal from '../animations/TextReveal'
import ScrollReveal from '../animations/ScrollReveal'
import T from '../../i18n/T'
import { url } from '../../utils/url'

const h2Class =
  'text-[32px] font-semibold leading-[1.15] tracking-[-0.04em] text-black md:text-[44px] lg:text-[55px] lg:leading-[63.25px] lg:tracking-[-2.2px]'
const pClass =
  'text-base font-normal text-gray lg:text-[18px] lg:leading-[30.6px] lg:tracking-[-0.36px]'

export default function VisionMissionValues() {
  return (
    <section className="flex flex-col items-center bg-white px-5 py-20">
      <div className="flex w-full max-w-[1000px] flex-col">
        {/* Vision — text left, image right */}
        <div className="flex flex-col items-center gap-10 py-10 lg:flex-row lg:gap-[60px]">
          <div className="flex w-full flex-1 flex-col gap-5">
            <TextReveal text="BBSD Vision" zh="BBSD 愿景" tag="h2" className={h2Class} />
            <ScrollReveal delay={0.2}>
              <p className={pClass}>
                <T
                  en="To be a widely trusted partner for global offshore engineering projects, fueling project success with exceptional expertise."
                  zh="成为全球海洋工程项目广受信赖的合作伙伴，以卓越的专业能力助力项目成功。"
                />
              </p>
            </ScrollReveal>
          </div>
          <div className="w-full flex-1">
            <ScrollReveal>
              <img
                src={url('/images/about/vision-workers.png')}
                alt="BBSD workers"
                loading="lazy"
                className="aspect-square w-full rounded-[20px] object-cover"
              />
            </ScrollReveal>
          </div>
        </div>

        {/* Mission — image left, text right */}
        <div className="flex flex-col items-center gap-10 py-10 lg:flex-row lg:gap-[60px]">
          <div className="order-2 w-full flex-1 lg:order-1">
            <ScrollReveal>
              <img
                src={url('/images/about/mission-platform.jpg')}
                alt="Industrial module transport"
                loading="lazy"
                className="aspect-square w-full rounded-[20px] object-cover"
              />
            </ScrollReveal>
          </div>
          <div className="order-1 flex w-full flex-1 flex-col gap-5 lg:order-2">
            <TextReveal text="BBSD Mission" zh="BBSD 使命" tag="h2" className={h2Class} />
            <ScrollReveal delay={0.2}>
              <p className={pClass}>
                <T
                  en="To provide global EPC clients with outstanding, reliable, and cost-effective design, procurement, and engineering management services, ensuring every project is delivered on schedule, safely, and with guaranteed quality and quantity."
                  zh="为全球 EPC 客户提供卓越、可靠且具成本效益的设计、采购与工程管理服务，确保每个项目按期、安全交付，并保质保量。"
                />
              </p>
            </ScrollReveal>
          </div>
        </div>

        {/* Values — image left, text right */}
        <div className="flex flex-col items-center gap-10 py-10 lg:flex-row lg:gap-[30px]">
          <div className="order-2 w-full flex-1 lg:order-1">
            <ScrollReveal>
              <img
                src={url('/images/about/values-night.jpg')}
                alt="Offshore platform at night"
                loading="lazy"
                className="aspect-square w-full rounded-[20px] object-cover"
              />
            </ScrollReveal>
          </div>
          <div className="order-1 flex w-full flex-1 flex-col gap-5 lg:order-2">
            <TextReveal text="BBSD Values" zh="BBSD 价值观" tag="h2" className={h2Class} />
            <ScrollReveal delay={0.2}>
              <div className="flex flex-col gap-1.5">
                <p className={pClass}>
                  <T en="Safety first, integrity as the cornerstone." zh="安全第一，诚信为本。" />
                </p>
                <p className={pClass}>
                  <T
                    en="Excellence and professionalism, reliable delivery."
                    zh="追求卓越与专业，可靠交付。"
                  />
                </p>
                <p className={pClass}>
                  <T en="Global expertise, local execution." zh="全球专长，本地执行。" />
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
