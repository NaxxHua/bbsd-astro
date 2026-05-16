import { CheckCircle } from '@phosphor-icons/react'
import TextReveal from '../animations/TextReveal'
import ScrollReveal from '../animations/ScrollReveal'
import T from '../../i18n/T'
import { url } from '../../utils/url'

const values = [
  { en: 'Safety', zh: '安全' },
  { en: 'Quality', zh: '质量' },
  { en: 'Efficiency', zh: '效率' },
  { en: 'Integrity', zh: '诚信' },
]

export default function WhoWeAre() {
  return (
    <section className="flex flex-col items-center justify-center overflow-hidden px-5 py-20 md:px-[30px] lg:py-[125px]">
      <div className="flex w-full max-w-[1200px] flex-col items-center gap-10 lg:flex-row lg:gap-[100px]">
        {/* Left: image with "Since 2025" badge */}
        <div className="w-full flex-1">
          <ScrollReveal>
            <div className="relative overflow-hidden rounded-[15px]">
              <img
                src={url('/images/about/team-overview.jpg')}
                alt="Our team"
                loading="lazy"
                className="h-[360px] w-full object-cover lg:h-[500px]"
              />
              <div className="absolute bottom-6 left-6">
                <p className="text-[16px] leading-[27.2px] tracking-[-0.32px] text-[#cccccc]">
                  <T en="Since" zh="成立于" />
                </p>
                <p className="text-[44px] font-semibold leading-[1.1] tracking-[-2.2px] text-white lg:text-[55px] lg:leading-[63.25px]">
                  2025
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Right: heading + text + 4 values */}
        <div className="flex w-full flex-1 flex-col gap-5">
          <TextReveal
            text="Who We Are"
            zh="我们是谁"
            tag="h2"
            className="text-[36px] font-semibold leading-[1.15] tracking-[-0.04em] text-black md:text-[44px] lg:text-[55px] lg:leading-[63.25px] lg:tracking-[-2.2px]"
          />
          <ScrollReveal delay={0.2}>
            <p className="text-base font-normal text-gray lg:text-[18px] lg:leading-[30.6px] lg:tracking-[-0.36px]">
              <T
                en="BBSD is a trusted engineering and site services partner, supporting global energy and infrastructure projects with a strong presence in both China and Europe. We combine technical expertise, international compliance knowledge, and local execution capabilities to deliver reliable, safe, and cost-efficient solutions across industries."
                zh="BBSD 是值得信赖的工程与现场服务合作伙伴，为全球能源与基础设施项目提供支持，并在中国与欧洲均设有稳固据点。我们融合技术专长、国际合规经验与本地执行能力，为各行业交付可靠、安全、具成本效益的解决方案。"
              />
            </p>
          </ScrollReveal>

          <div className="mt-2 grid grid-cols-2 gap-[15px]">
            {values.map((v) => (
              <div key={v.en} className="flex items-center gap-[10px]">
                <CheckCircle weight="fill" size={25} className="shrink-0 text-blue-dark" />
                <h3 className="text-lg font-semibold text-black lg:text-[22px] lg:leading-[33px] lg:tracking-[-0.44px]">
                  <T en={v.en} zh={v.zh} />
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
