import { motion } from 'framer-motion'
import T from '../../i18n/T'
import { url } from '../../utils/url'

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden lg:h-[1200px]">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src={url('/videos/hero-video.mp4')} type="video/mp4" />
      </video>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[1200px] px-5 md:px-6">
        <div className="flex flex-col items-start gap-[25px] pt-[200px] md:pt-[260px] lg:pt-[317px]">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-[40px] font-semibold leading-[1.05] tracking-[-0.04em] text-white md:text-[56px] lg:text-[70px]"
          >
            BBSD
            <br />
            <T en="Your trusted engineering partner" zh="您值得信赖的工程合作伙伴" />
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-base font-semibold leading-[1.6] tracking-[-0.02em] text-blue-light md:text-[20px]"
          >
            <T en="BBSD Innovative · Energy Services" zh="BBSD 创新 · 能源服务" />
          </motion.p>

          <motion.a
            href={url('/services')}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mt-[26px] rounded-[10px] bg-orange-primary px-[30px] py-[20px] text-[18px] font-semibold leading-[1.2] text-black shadow-[0_0.6px_1.6px_-1px_rgba(0,0,0,0.15),0_2.3px_6px_-2px_rgba(0,0,0,0.14),0_10px_26px_-3px_rgba(0,0,0,0.1)] transition-colors hover:bg-orange-hover"
          >
            <T en="Explore our services" zh="探索我们的服务" />
          </motion.a>
        </div>
      </div>
    </section>
  )
}
