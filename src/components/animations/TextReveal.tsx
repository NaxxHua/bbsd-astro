import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

interface Props {
  text: string
  className?: string
  delay?: number
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span'
  staggerChildren?: number
}

export default function TextReveal({
  text,
  className = '',
  delay = 0,
  tag: Tag = 'h2',
  staggerChildren = 0.03,
}: Props) {
  const ref = useRef<HTMLDivElement>(null)
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
    <motion.div ref={ref}>
      <Tag className={className}>
        <motion.span
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
      </Tag>
    </motion.div>
  )
}
