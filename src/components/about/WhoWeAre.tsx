import TextReveal from '../animations/TextReveal'
import ScrollReveal from '../animations/ScrollReveal'
import T from '../../i18n/T'
import { url } from '../../utils/url'

export default function WhoWeAre() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <ScrollReveal>
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={url('/images/about/team-overview.jpg')}
                alt="Our team"
                loading="lazy"
                className="w-full object-cover"
              />
              <div className="absolute bottom-6 left-6">
                <p className="text-xs font-medium tracking-wider text-white/80 uppercase">
                  <T en="Since" zh="成立于" />
                </p>
                <p className="text-6xl font-bold text-white md:text-7xl">
                  2025
                </p>
              </div>
            </div>
          </ScrollReveal>

          <div>
            <TextReveal
              text="Who We Are"
              zh="我们是谁"
              tag="h2"
              className="mb-6 text-4xl font-bold text-dark md:text-5xl"
            />
            <ScrollReveal delay={0.2}>
              <p className="text-base leading-relaxed text-gray">
                <T
                  en="BBSD is a trusted engineering and site services partner, supporting global energy and infrastructure projects with a strong presence in both China and Europe. We combine technical expertise, international compliance knowledge, and local execution capabilities to deliver reliable, safe, and cost-efficient solutions across industries."
                  zh="BBSD 是值得信赖的工程与现场服务合作伙伴，为全球能源与基础设施项目提供支持，并在中国与欧洲均设有稳固据点。我们融合技术专长、国际合规经验与本地执行能力，为各行业交付可靠、安全、具成本效益的解决方案。"
                />
              </p>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
