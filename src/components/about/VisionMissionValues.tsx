import TextReveal from '../animations/TextReveal'
import ScrollReveal from '../animations/ScrollReveal'
import T from '../../i18n/T'
import { url } from '../../utils/url'

export default function VisionMissionValues() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        {/* Vision - text left, image right */}
        <div className="mb-20 grid items-center gap-12 lg:grid-cols-2">
          <div>
            <TextReveal
              text="BBSD Vision"
              zh="BBSD 愿景"
              tag="h2"
              className="mb-6 text-3xl font-bold text-dark md:text-4xl"
            />
            <ScrollReveal delay={0.2}>
              <p className="text-base leading-relaxed text-gray">
                <T
                  en="To be a widely trusted partner for global offshore engineering projects, fueling project success with exceptional expertise."
                  zh="成为全球海洋工程项目广受信赖的合作伙伴，以卓越的专业能力助力项目成功。"
                />
              </p>
            </ScrollReveal>
          </div>
          <ScrollReveal>
            <img
              src={url('/images/about/vision-workers.png')}
              alt="BBSD workers"
              loading="lazy"
              className="w-full rounded-2xl object-cover"
            />
          </ScrollReveal>
        </div>

        {/* Mission - image left, text right */}
        <div className="mb-20 grid items-center gap-12 lg:grid-cols-2">
          <ScrollReveal>
            <img
              src={url('/images/about/mission-platform.jpg')}
              alt="Industrial module transport"
              loading="lazy"
              className="w-full rounded-2xl object-cover"
            />
          </ScrollReveal>
          <div>
            <TextReveal
              text="BBSD Mission"
              zh="BBSD 使命"
              tag="h2"
              className="mb-6 text-3xl font-bold text-dark md:text-4xl"
            />
            <ScrollReveal delay={0.2}>
              <p className="text-base leading-relaxed text-gray">
                <T
                  en="To provide global EPC clients with outstanding, reliable, and cost-effective design, procurement, and engineering management services, ensuring every project is delivered on schedule, safely, and with guaranteed quality and quantity."
                  zh="为全球 EPC 客户提供卓越、可靠且具成本效益的设计、采购与工程管理服务，确保每个项目按期、安全交付，并保质保量。"
                />
              </p>
            </ScrollReveal>
          </div>
        </div>

        {/* Values - text left, image right */}
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <TextReveal
              text="BBSD Values"
              zh="BBSD 价值观"
              tag="h2"
              className="mb-6 text-3xl font-bold text-dark md:text-4xl"
            />
            <ScrollReveal delay={0.2}>
              <ul className="space-y-3 text-base leading-relaxed text-gray">
                <li>• <T en="Safety first, integrity as the cornerstone." zh="安全第一，诚信为本。" /></li>
                <li>• <T en="Excellence and professionalism, reliable delivery." zh="追求卓越与专业，可靠交付。" /></li>
                <li>• <T en="Global expertise, local execution." zh="全球专长，本地执行。" /></li>
              </ul>
            </ScrollReveal>
          </div>
          <ScrollReveal>
            <img
              src={url('/images/about/values-night.jpg')}
              alt="Offshore platform at night"
              loading="lazy"
              className="w-full rounded-2xl object-cover"
            />
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
