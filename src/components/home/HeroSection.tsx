import { motion } from 'framer-motion'

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/videos/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content - left-aligned at all breakpoints (matching original) */}
      <div className="relative z-10 mx-auto flex h-full max-w-[1200px] flex-col items-start justify-end px-5 pb-24 text-left md:justify-center md:px-6 md:pb-0">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-1 text-4xl font-bold text-white md:text-5xl lg:text-6xl"
        >
          BBSD
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-4 text-2xl font-light text-white md:text-3xl lg:mb-3 lg:text-[42px]"
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
          href="/services"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="rounded-lg bg-orange-primary px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-orange-hover md:px-8 md:py-3.5 md:text-base"
        >
          Explore our services
        </motion.a>
      </div>
    </section>
  )
}
