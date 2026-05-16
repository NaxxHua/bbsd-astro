import TextReveal from '../animations/TextReveal'
import ScrollReveal from '../animations/ScrollReveal'
import T from '../../i18n/T'
import { url } from '../../utils/url'

export default function GetInTouchBanner() {
  return (
    <section className="relative w-full overflow-hidden bg-[radial-gradient(50%_50%_at_50%_50%,#3d3d3d_0%,#000_100%)] px-5 py-16 md:px-[30px] lg:py-[100px]">
      {/* Tiled texture overlay */}
      <div
        className="absolute inset-0 bg-repeat"
        style={{
          backgroundImage: `url('${url('/images/home/hero-pattern.png')}')`,
          backgroundSize: '1200px',
        }}
      />

      <div className="relative z-[2] mx-auto flex max-w-[1200px] flex-col items-center justify-center gap-10 md:flex-row">
        <TextReveal
          text="Get In Touch With Us"
          zh="与我们取得联系"
          tag="h2"
          className="flex-1 text-center text-[28px] font-semibold leading-[1.2] tracking-[-0.02em] text-white md:text-left md:text-[32px] lg:text-[40px] lg:leading-[50px]"
        />
        <ScrollReveal delay={0.3}>
          <a
            href={url('/contact')}
            className="shrink-0 rounded-[10px] bg-orange-primary px-[30px] py-[20px] text-[18px] font-semibold leading-[1.2] text-black shadow-[0_0.6px_1.6px_-1px_rgba(0,0,0,0.15),0_2.3px_6px_-2px_rgba(0,0,0,0.14),0_10px_26px_-3px_rgba(0,0,0,0.1)] transition-colors hover:bg-orange-hover"
          >
            <T en="Contact" zh="联系我们" />
          </a>
        </ScrollReveal>
      </div>
    </section>
  )
}
