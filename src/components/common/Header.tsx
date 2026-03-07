import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { url } from '../../utils/url'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about-us' },
  { label: 'Market', href: '/market' },
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/projects' },
  { label: 'News', href: '/news' },
]

interface Props {
  currentPath?: string
}

export default function Header({ currentPath = '/' }: Props) {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-4 py-4 md:px-6 md:py-5">
        {/* Logo */}
        <a href={url('/')} className="z-10 shrink-0">
          <img
            src={url('/images/home/logo.png')}
            alt="BBSD"
            className="h-8 w-auto md:h-10"
          />
        </a>

        {/* Tablet Nav - inline, no pill (md to lg) */}
        <nav className="hidden items-center gap-5 md:flex lg:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={url(link.href)}
              className={`text-sm font-medium transition-colors hover:text-orange-primary ${
                currentPath === link.href
                  ? 'text-orange-primary'
                  : 'text-white'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Nav - pill container (lg+) */}
        <nav className="hidden items-center gap-7 rounded-full bg-dark/70 px-8 py-2.5 backdrop-blur-md lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={url(link.href)}
              className={`text-sm font-medium transition-colors hover:text-orange-primary ${
                currentPath === link.href
                  ? 'text-orange-primary'
                  : 'text-white'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-3 md:gap-5">
          {/* Phone - desktop only */}
          <a
            href="tel:+8615927327738"
            className="hidden items-center gap-2 text-sm text-white lg:flex"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            (86) 15927327738
          </a>

          {/* Contact button - visible on mobile + tablet + desktop */}
          <a
            href={url('/contact')}
            className="rounded-lg bg-orange-primary px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-orange-hover md:px-6 md:py-2.5"
          >
            Contact
          </a>

          {/* Mobile hamburger - only below md */}
          <button
            className="flex flex-col gap-1.5 md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <motion.span
              className="block h-0.5 w-6 bg-white"
              animate={mobileOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            />
            <motion.span
              className="block h-0.5 w-6 bg-white"
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
            />
            <motion.span
              className="block h-0.5 w-6 bg-white"
              animate={mobileOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden bg-dark/95 backdrop-blur-md md:hidden"
          >
            <nav className="flex flex-col gap-4 px-6 py-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={url(link.href)}
                  className={`text-base font-medium transition-colors hover:text-orange-primary ${
                    currentPath === link.href
                      ? 'text-orange-primary'
                      : 'text-white'
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <a href="tel:+8615927327738" className="text-sm text-gray-light">
                (86) 15927327738
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
