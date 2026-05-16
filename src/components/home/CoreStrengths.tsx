import ScrollReveal from '../animations/ScrollReveal'
import TextReveal from '../animations/TextReveal'
import SlideIn from '../animations/SlideIn'
import T from '../../i18n/T'
import { url } from '../../utils/url'

const strengths = [
  {
    title: 'Engineering Excellence',
    titleZh: '卓越工程能力',
    description:
      'Comprehensive offshore solutions covering detailed engineering, procurement management, construction supervision, and commissioning support, all aligned with international standards such as ASME and PED.',
    descriptionZh:
      '提供全面的海洋工程解决方案，涵盖详细设计、采购管理、施工监理与调试支持，全程遵循 ASME、PED 等国际标准。',
  },
  {
    title: 'Global-Local Integration',
    titleZh: '全球与本地融合',
    description:
      'Combining European engineering standards with efficient Chinese manufacturing capabilities, we bridge the gap between global compliance and local cost advantages.',
    descriptionZh:
      '将欧洲工程标准与高效的中国制造能力相结合，在全球合规要求与本地成本优势之间架起桥梁。',
  },
  {
    title: 'Reliable Project Delivery',
    titleZh: '可靠的项目交付',
    description:
      'Focused on safety, efficiency, and cost-effectiveness, ensuring projects are delivered on time and within budget, from concept to operation.',
    descriptionZh:
      '以安全、高效与成本效益为核心，确保项目从概念到运营全程按时、按预算交付。',
  },
]

export default function CoreStrengths() {
  return (
    <section className="flex flex-col items-center justify-center overflow-hidden bg-white px-5 py-20 md:px-[30px] lg:h-[800px] lg:py-[125px]">
      <div className="flex w-full max-w-[1200px] flex-col items-center gap-10 lg:flex-row lg:gap-[100px]">
        {/* Left: Text */}
        <div className="w-full flex-1">
          <TextReveal
            text="Our Core Strengths"
            zh="我们的核心优势"
            tag="h2"
            className="text-[36px] font-semibold leading-[1.15] tracking-[-0.04em] text-black md:text-[44px] lg:text-[55px] lg:leading-[63.25px] lg:tracking-[-2.2px]"
          />

          <div className="mt-[50px] flex flex-col gap-[15px]">
            {strengths.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.15}>
                <div className="flex flex-col gap-[15px]">
                  {/* Title row: icon + heading */}
                  <div className="flex items-center gap-[15px]">
                    <svg
                      className="h-[25px] w-[25px] shrink-0 text-blue-dark"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                    </svg>
                    <h3 className="text-lg font-semibold text-black lg:text-[22px] lg:leading-[33px] lg:tracking-[-0.44px]">
                      <T en={item.title} zh={item.titleZh} />
                    </h3>
                  </div>
                  {/* Body */}
                  <p className="text-[15px] font-normal leading-[1.7] tracking-[-0.02em] text-gray md:text-base">
                    <T en={item.description} zh={item.descriptionZh} />
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Right: Image card (linked) */}
        <div className="w-full flex-1">
          <SlideIn direction="right" delay={0.2}>
            <a
              href={url('/about-us')}
              className="block aspect-square w-full overflow-hidden rounded-[15px] shadow-[0_0.6px_1.6px_-1px_rgba(0,0,0,0.15),0_2.3px_6px_-2px_rgba(0,0,0,0.14),0_10px_26px_-3px_rgba(0,0,0,0.1)]"
            >
              <img
                src={url('/images/home/wind-energy.jpg')}
                alt="Engineering professional at work"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </a>
          </SlideIn>
        </div>
      </div>
    </section>
  )
}
