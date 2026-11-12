import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'

const LINE_STAGGER = 0.12
const DURATION = 0.75

export default function GlobalTitle({ text, className = 'big-font', indentFirst = true }) {
  const lines = useMemo(() => text.split('\n').filter(Boolean), [text])
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const t = requestAnimationFrame(() => setReady(true))
    return () => cancelAnimationFrame(t)
  }, [text])

  return (
    <div
      className={`${className}${indentFirst ? ' indent-first' : ''}`}
      aria-hidden="true"
    >
      {lines.map((line, lineIndex) => (
        <div key={`${line}-${lineIndex}`} className="title-line">
          <motion.div
            className="title-line-inner"
            initial={{ y: '105%' }}
            animate={ready ? { y: 0 } : { y: '105%' }}
            transition={{
              duration: DURATION,
              delay: lineIndex * LINE_STAGGER + 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {line}
          </motion.div>
        </div>
      ))}
    </div>
  )
}
