import ScrollReveal from '../animations/ScrollReveal'
import T from '../../i18n/T'
import { url } from '../../utils/url'

export default function AboutPreview() {
  return (
    <section className="relative flex items-center justify-center overflow-hidden px-5 py-16 md:px-[30px] md:py-20 lg:h-[533px] lg:py-[75px]">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('${url('/images/home/fpso-platform.jpg')}')`,
        }}
      />
      {/* Light dark overlay for text contrast */}
      <div className="absolute inset-0 bg-black/30" />

      <div className="relative z-10 w-full max-w-[1200px]">
        <div className="flex items-center p-5">
          <div className="flex gap-5">
            {/* Icon column - 25px */}
            <div className="w-[25px] shrink-0 pt-[5px]">
              <svg
                className="h-[25px] w-[25px] text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </div>

            {/* Text column */}
            <div className="flex flex-1 flex-col gap-[10px]">
              <ScrollReveal>
                <h3 className="text-lg font-semibold tracking-[-0.02em] text-white lg:text-[22px] lg:leading-[33px]">
                  <T en="About us" zh="关于我们" />
                </h3>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <h3 className="text-[26px] font-semibold leading-[1.3] tracking-[-0.04em] text-white md:text-[32px] lg:text-[40px] lg:leading-[50px]">
                  <T
                    en="BBSD (Jiangsu Nantong) Engineering Technology Co., Ltd. is a dynamic, wholly foreign-owned enterprise based in Nantong, Jiangsu Province. Backed by a core team from Jord Oil & Gas, a leading European EPC company, we bring world-class expertise to deliver integrated engineering solutions for the global offshore oil and gas industry."
                    zh="BBSD（江苏南通）工程技术有限公司是一家充满活力的外商独资企业，总部位于江苏省南通市。依托来自欧洲领先 EPC 公司 Jord Oil & Gas 的核心团队，我们以世界一流的专业能力，为全球海洋油气行业提供一体化工程解决方案。"
                  />
                </h3>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
