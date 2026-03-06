import ScrollReveal from '../animations/ScrollReveal'
import TextReveal from '../animations/TextReveal'
import SlideIn from '../animations/SlideIn'

const strengths = [
  {
    title: 'Engineering Excellence',
    description:
      'Our team of experienced engineers delivers high-quality, innovative solutions across multiple disciplines including piping, structural, mechanical, and E&I engineering.',
  },
  {
    title: 'Global-Local Integration',
    description:
      'With offices in Rotterdam and Nantong, we bridge European standards with competitive Asian manufacturing, ensuring world-class quality at optimized costs.',
  },
  {
    title: 'Reliable Project Delivery',
    description:
      'We are committed to delivering projects on time, within budget, and to the highest safety and quality standards, building lasting trust with our clients.',
  },
]

export default function CoreStrengths() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left: Text */}
          <div>
            <TextReveal
              text="Our Core Strengths"
              tag="h2"
              className="mb-10 text-4xl font-bold text-blue-dark md:text-5xl"
            />

            <div className="space-y-8">
              {strengths.map((item, i) => (
                <ScrollReveal key={item.title} delay={i * 0.15}>
                  <div className="flex gap-4">
                    {/* Check icon */}
                    <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-dark">
                      <svg
                        className="h-3.5 w-3.5 text-white"
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
                      <h3 className="mb-1.5 text-lg font-semibold text-dark">
                        {item.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-gray">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Right: Image */}
          <SlideIn direction="right" delay={0.2}>
            <div className="overflow-hidden rounded-2xl">
              <img
                src="/images/home/welder.jpg"
                alt="Engineering professional at work"
                className="h-auto w-full object-cover"
              />
            </div>
            <a
              href="/about-us"
              className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-dark transition-colors hover:text-orange-primary"
            >
              Learn more about us
              <span>→</span>
            </a>
          </SlideIn>
        </div>
      </div>
    </section>
  )
}
