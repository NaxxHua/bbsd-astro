import { motion, useInView } from 'framer-motion'
import { useRef, type ReactNode } from 'react'

type Direction = 'left' | 'right' | 'up' | 'down'

interface Props {
  children: ReactNode
  className?: string
  direction?: Direction
  delay?: number
  duration?: number
  distance?: number
}

const offsets: Record<Direction, { x: number; y: number }> = {
  left: { x: -60, y: 0 },
  right: { x: 60, y: 0 },
  up: { x: 0, y: 60 },
  down: { x: 0, y: -60 },
}

export default function SlideIn({
  children,
  className = '',
  direction = 'left',
  delay = 0,
  duration = 0.6,
  distance,
}: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const offset = offsets[direction]
  const initial = {
    opacity: 0,
    x: distance ? (direction === 'right' ? distance : direction === 'left' ? -distance : 0) : offset.x,
    y: distance ? (direction === 'down' ? -distance : direction === 'up' ? distance : 0) : offset.y,
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={initial}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : initial}
      transition={{ duration, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}
