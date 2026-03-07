import ScrollReveal from '../animations/ScrollReveal'
import TextReveal from '../animations/TextReveal'
import SlideIn from '../animations/SlideIn'
import { url } from '../../utils/url'

const strengths = [
  {
    title: 'Engineering Excellence',
    description:
      'Comprehensive offshore solutions covering detailed engineering, procurement management, construction supervision, and commissioning support, all aligned with international standards such as ASME and PED.',
  },
  {
    title: 'Global-Local Integration',
    description:
      'Combining European engineering standards with efficient Chinese manufacturing capabilities, we bridge the gap between global compliance and local cost advantages.',
  },
  {
    title: 'Reliable Project Delivery',
    description:
      'Focused on safety, efficiency, and cost-effectiveness, ensuring projects are delivered on time and within budget, from concept to operation.',
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
                        {item.title}
                      </h3>
                      <p className="text-xs leading-relaxed text-gray md:text-sm">
                        {item.description}
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
                src={url('/images/home/welder.jpg')}
                alt="Engineering professional at work"
                className="h-auto w-full object-cover"
              />
              {/* Overlay link at bottom */}
              <a
                href={url('/about-us')}
                className="absolute right-0 bottom-0 left-0 bg-gradient-to-t from-black/80 to-transparent px-5 py-5 text-base font-medium text-white transition-colors hover:text-orange-primary md:px-6 md:py-6 md:text-lg"
              >
                Learn more about us →
              </a>
            </div>
          </SlideIn>
        </div>
      </div>
    </section>
  )
}
