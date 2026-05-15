import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

interface Props {
  /** English text (revealed word-by-word) */
  text: string
  /** Chinese text — when provided, the component renders bilingually */
  zh?: string
  className?: string
  delay?: number
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span'
  staggerChildren?: number
}

export default function TextReveal({
  text,
  zh,
  className = '',
  delay = 0,
  tag: Tag = 'h2',
  staggerChildren = 0.03,
}: Props) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const words = text.split(' ')

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: delay,
        staggerChildren,
      },
    },
  }

  const child = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
  }

  return (
    <Tag className={className}>
      {/* English — word-by-word reveal animation */}
      <span data-lang-en>
        <motion.span
          ref={ref}
          variants={container}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className={className?.includes('text-center') ? 'justify-center' : ''}
          style={{ display: 'flex', flexWrap: 'wrap' }}
        >
          {words.map((word, i) => (
            <motion.span
              key={i}
              variants={child}
              style={{ display: 'inline-block', marginRight: '0.3em' }}
            >
              {word}
            </motion.span>
          ))}
        </motion.span>
      </span>
      {/* Chinese — shown statically (the reveal flourish is English-default only) */}
      {zh && <span data-lang-zh>{zh}</span>}
    </Tag>
  )
}
