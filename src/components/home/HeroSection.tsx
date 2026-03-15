import { motion } from 'framer-motion'
import { url } from '../../utils/url'

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
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

      {/* Dark overlay - lighter to match original */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content - left-aligned, vertically centered (matching original) */}
      <div className="relative z-10 mx-auto flex h-full max-w-[1200px] flex-col items-start justify-center px-5 text-left md:px-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-1 text-5xl font-bold text-white md:text-6xl lg:text-7xl"
        >
          BBSD
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-4 text-3xl font-light text-white md:text-4xl lg:mb-3 lg:text-[56px] lg:leading-tight"
        >
          Your trusted engineering partner
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mb-8 text-sm font-medium tracking-wider text-white/70 md:text-base lg:mb-10"
        >
          BBSD Innovative · Energy Services
        </motion.p>

        <motion.a
          href={url('/services')}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="rounded-lg bg-orange-primary px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-orange-hover md:px-10 md:py-4 md:text-base"
        >
          Explore our services
        </motion.a>
      </div>
    </section>
  )
}
