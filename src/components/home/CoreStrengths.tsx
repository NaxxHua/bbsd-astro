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
    <section className="bg-white py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-[1200px] px-5 md:px-6">
        <div className="grid items-start gap-10 md:gap-12 lg:grid-cols-2">
          {/* Left: Text */}
          <div>
            <TextReveal
              text="Our Core Strengths"
              zh="我们的核心优势"
              tag="h2"
              className="mb-8 text-3xl font-bold text-dark md:mb-10 md:text-4xl lg:text-5xl"
            />

            <div className="space-y-6 md:space-y-8">
              {strengths.map((item, i) => (
                <ScrollReveal key={item.title} delay={i * 0.15}>
                  <div className="flex gap-3 md:gap-4">
                    {/* Blue check circle icon */}
                    <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-dark md:h-6 md:w-6">
                      <svg
                        className="h-3 w-3 text-white md:h-3.5 md:w-3.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={3}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="mb-1.5 text-base font-bold text-dark md:mb-2 md:text-lg">
                        <T en={item.title} zh={item.titleZh} />
                      </h3>
                      <p className="text-xs leading-relaxed text-gray md:text-sm">
                        <T en={item.description} zh={item.descriptionZh} />
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Right: Image with overlay link */}
          <SlideIn direction="right" delay={0.2}>
            <div className="relative overflow-hidden rounded-xl md:rounded-2xl">
              <img
                src={url('/images/home/wind-energy.jpg')}
                alt="Engineering professional at work"
                loading="lazy"
                className="h-auto w-full object-cover"
              />
              {/* Overlay link at bottom */}
              <a
                href={url('/about-us')}
                className="absolute right-0 bottom-0 left-0 bg-gradient-to-t from-black/80 to-transparent px-5 py-5 text-base font-medium text-white transition-colors hover:text-orange-primary md:px-6 md:py-6 md:text-lg"
              >
                <T en="Learn more about us →" zh="了解更多关于我们 →" />
              </a>
            </div>
          </SlideIn>
        </div>
      </div>
    </section>
  )
}
