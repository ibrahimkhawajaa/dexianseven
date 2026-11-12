import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import Lenis from 'lenis'

export default function SmoothScroll({ children }) {
  const location = useLocation()
  const lenisRef = useRef(null)

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.5,
    })
    lenisRef.current = lenis

    let frame
    const raf = (time) => {
      lenis.raf(time)
      frame = requestAnimationFrame(raf)
    }
    frame = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(frame)
      lenis.destroy()
      lenisRef.current = null
    }
  }, [])

  useEffect(() => {
    const lenis = lenisRef.current

    if (location.hash) {
      const timer = setTimeout(() => {
        const target = document.querySelector(location.hash)
        if (target && lenis) {
          lenis.scrollTo(target, { offset: -96, duration: 1.2 })
        } else if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }, 450)
      return () => clearTimeout(timer)
    }

    if (location.pathname !== '/') {
      lenis?.scrollTo(0, { immediate: true })
    }
  }, [location.pathname, location.hash])

  return children
}
