import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { motion, useAnimation } from 'framer-motion'
import { CAROUSEL_MEDIA } from '../../constants/posse'

const HIDDEN_ROUTES = ['/works']

export default function VerticalCarousel() {
  const { pathname } = useLocation()
  const controls = useAnimation()
  const prevPath = useRef(pathname)
  const items = [...CAROUSEL_MEDIA, ...CAROUSEL_MEDIA]

  const hidden = HIDDEN_ROUTES.some((r) => pathname.startsWith(r))
  const isInfo = pathname === '/info'

  useEffect(() => {
    const cameToInfo = pathname === '/info' && prevPath.current !== '/info'

    if (hidden) {
      controls.start({ opacity: 0, x: 32, transition: { duration: 0.4 } })
    } else if (cameToInfo) {
      controls.set({ opacity: 0, x: 48 })
      controls.start({
        opacity: 1,
        x: 0,
        transition: { duration: 0.95, ease: [0.22, 1, 0.36, 1] },
      })
    } else {
      controls.start({
        opacity: 1,
        x: 0,
        transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
      })
    }

    prevPath.current = pathname
  }, [pathname, hidden, controls])

  if (hidden) return null

  return (
    <motion.section
      id="carousel"
      className={isInfo ? 'carousel--info' : 'carousel--home'}
      initial={false}
      animate={controls}
    >
      <div
        key={isInfo ? 'carousel-info' : 'carousel-default'}
        className={`carousel-content${isInfo ? ' carousel-content--smooth' : ''}`}
      >
        {items.map((item, i) => (
          <div
            key={`${item.alt}-${i}`}
            className="media"
            aria-hidden={i >= CAROUSEL_MEDIA.length ? true : undefined}
          >
            <img
              src={item.src}
              width={1500}
              alt={item.alt}
              loading={i < 4 ? 'eager' : 'lazy'}
            />
          </div>
        ))}
      </div>
    </motion.section>
  )
}
