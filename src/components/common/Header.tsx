import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

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
      <div className="bg-dark/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-4">
          {/* Logo */}
          <a href="/" className="shrink-0">
            <img
              src="/images/home/logo.png"
              alt="BBSD"
              className="h-8 w-auto"
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
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

          {/* Right side: Phone + CTA + Hamburger */}
          <div className="flex items-center gap-4">
            <a
              href="tel:+8615927327738"
              className="hidden text-sm text-white lg:block"
            >
              (86) 15927327738
            </a>
            <a
              href="/contact"
              className="hidden rounded-full bg-orange-primary px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-orange-hover md:block"
            >
              Contact
            </a>

            {/* Mobile hamburger */}
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
                  href={link.href}
                  className={`text-base font-medium transition-colors hover:text-orange-primary ${
                    currentPath === link.href
                      ? 'text-orange-primary'
                      : 'text-white'
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="tel:+8615927327738"
                className="text-sm text-gray-light"
              >
                (86) 15927327738
              </a>
              <a
                href="/contact"
                className="mt-2 inline-block rounded-full bg-orange-primary px-5 py-2.5 text-center text-sm font-semibold text-white transition-colors hover:bg-orange-hover"
              >
                Contact
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
