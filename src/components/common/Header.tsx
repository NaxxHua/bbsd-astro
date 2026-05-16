import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { url } from '../../utils/url'
import T from '../../i18n/T'

const navLinks = [
  { en: 'Home', zh: '首页', href: '/' },
  { en: 'About', zh: '关于我们', href: '/about-us' },
  { en: 'Market', zh: '市场', href: '/market' },
  { en: 'Services', zh: '服务', href: '/services' },
  { en: 'Projects', zh: '项目', href: '/projects' },
  { en: 'News', zh: '新闻', href: '/news' },
]

function LanguageToggle() {
  const [lang, setLang] = useState<'en' | 'zh'>('en')

  useEffect(() => {
    const current = document.documentElement.getAttribute('data-lang')
    if (current === 'zh' || current === 'en') setLang(current)
  }, [])

  const toggle = () => {
    const next = lang === 'en' ? 'zh' : 'en'
    setLang(next)
    try {
      localStorage.setItem('bbsd-lang', next)
    } catch (e) {}
    document.documentElement.setAttribute('data-lang', next)
  }

  return (
    <button
      onClick={toggle}
      aria-label="Switch language"
      className="flex shrink-0 items-center gap-1.5 rounded-full border border-white/40 px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:border-orange-primary hover:text-orange-primary"
    >
      <svg
        className="h-3.5 w-3.5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 21a9 9 0 100-18 9 9 0 000 18zm0 0c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m-9 9h18"
        />
      </svg>
      <span>{lang === 'en' ? '中文' : 'EN'}</span>
    </button>
  )
}

interface Props {
  currentPath?: string
}

export default function Header({ currentPath = '/' }: Props) {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-gradient-to-b from-black to-black/30">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-5 pt-5 pb-4 md:px-[30px] md:pt-[30px] md:pb-5">
        {/* Logo */}
        <a href={url('/')} className="z-10 shrink-0">
          <img
            src={url('/images/home/logo.png')}
            alt="BBSD"
            className="h-12 w-auto md:h-14 lg:h-[84px]"
          />
        </a>

        {/* Tablet Nav - inline, no pill (md to lg) */}
        <nav className="hidden items-center gap-5 md:flex lg:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={url(link.href)}
              className="text-base font-medium text-white/70 transition-colors hover:text-white"
            >
              <T en={link.en} zh={link.zh} />
            </a>
          ))}
        </nav>

        {/* Desktop Nav - pill container (lg+) */}
        <nav className="hidden items-center gap-10 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={url(link.href)}
              className="text-base font-medium text-white/70 transition-colors hover:text-white"
            >
              <T en={link.en} zh={link.zh} />
            </a>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-3 md:gap-4">
          {/* Phone - desktop only */}
          <a
            href="tel:+8615927327738"
            className="hidden items-center gap-2 text-sm tracking-[-0.28px] text-white lg:flex"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            (86) 15927327738
          </a>

          {/* Language toggle */}
          <LanguageToggle />

          {/* Contact button - visible on mobile + tablet + desktop */}
          <a
            href={url('/contact')}
            className="rounded-[10px] bg-[#ff8000] px-[25px] py-[15px] text-base font-semibold text-black shadow-[0_0.6px_1.6px_-1px_rgba(0,0,0,0.15),0_2.3px_6px_-2px_rgba(0,0,0,0.14),0_10px_26px_-3px_rgba(0,0,0,0.1)] transition-colors hover:bg-orange-primary"
          >
            <T en="Contact" zh="联系我们" />
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
                  <T en={link.en} zh={link.zh} />
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
