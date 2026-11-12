import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'Contact', path: '/contact' },
]

const bubbleTransition = {
  type: 'spring',
  stiffness: 420,
  damping: 34,
  mass: 0.8,
}

export default function Navbar({ variant = 'default' }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const isHero = variant === 'hero'

  const isActive = (path) => location.pathname === path

  const glassShell = isHero
    ? 'bg-white/85 backdrop-blur-2xl border-white/90 shadow-[0_4px_30px_rgba(15,26,46,0.08)]'
    : 'bg-white/90 backdrop-blur-2xl border-[var(--border)] shadow-[0_4px_24px_rgba(15,26,46,0.06)]'

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 flex justify-center px-4 pt-4 md:pt-5 pointer-events-none">
        <nav
          className={`pointer-events-auto flex items-center gap-0.5 sm:gap-1 rounded-full border p-1.5 ${glassShell}`}
          aria-label="Main navigation"
        >
          <Link
            to="/"
            className="relative z-10 flex shrink-0 items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-[var(--accent)] bg-[var(--accent-soft)] hover:scale-105 transition-transform"
            aria-label="Home"
          >
            <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[var(--accent)]" />
          </Link>

          <div className="hidden md:flex items-center relative mx-0.5">
            {navLinks.map((link) => {
              const active = isActive(link.path)
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className="relative z-10 px-4 lg:px-5 py-2 rounded-full"
                >
                  {active && (
                    <motion.span
                      layoutId="navbar-active-bubble"
                      className="absolute inset-0 rounded-full bg-[var(--accent)] shadow-[0_2px_12px_rgba(232,90,79,0.35)]"
                      transition={bubbleTransition}
                    />
                  )}
                  <span
                    className={`relative z-10 block text-[11px] font-semibold tracking-[0.14em] uppercase whitespace-nowrap transition-colors duration-200 ${
                      active
                        ? 'text-[var(--ink)]'
                        : 'text-[var(--text-secondary)] hover:text-[var(--ink)]'
                    }`}
                  >
                    {link.label}
                  </span>
                </Link>
              )
            })}
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            className="md:hidden relative z-10 flex flex-col items-center justify-center gap-[5px] w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[var(--ink)] hover:bg-[var(--accent)] transition-colors"
            aria-label="Open menu"
          >
            <span className="w-4 h-0.5 bg-white rounded-full" />
            <span className="w-4 h-0.5 bg-white rounded-full" />
            <span className="w-4 h-0.5 bg-white rounded-full" />
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-[60] flex flex-col md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <motion.div
              className="absolute inset-0 bg-[var(--ink)]/30 backdrop-blur-sm"
              onClick={() => setMenuOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            <motion.div
              className="relative mt-[72px] mx-4 rounded-3xl border border-[var(--border)] bg-white/95 backdrop-blur-2xl p-6 shadow-[0_16px_48px_rgba(15,26,46,0.1)]"
              initial={{ opacity: 0, y: -16, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.96 }}
              transition={{ type: 'spring', stiffness: 400, damping: 32 }}
            >
              <div className="flex items-center justify-between mb-8">
                <Link
                  to="/"
                  onClick={() => setMenuOpen(false)}
                  className="w-9 h-9 rounded-full border-2 border-[var(--accent)] bg-[var(--accent-soft)] flex items-center justify-center"
                >
                  <div className="w-2.5 h-2.5 rounded-full bg-[var(--accent)]" />
                </Link>
                <button
                  type="button"
                  onClick={() => setMenuOpen(false)}
                  className="w-9 h-9 rounded-full bg-[var(--ink)] flex items-center justify-center"
                  aria-label="Close menu"
                >
                  <X size={18} className="text-white" />
                </button>
              </div>

              <div className="relative flex flex-col gap-1">
                {navLinks.map((link) => {
                  const active = isActive(link.path)
                  return (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setMenuOpen(false)}
                      className="relative px-4 py-3.5 rounded-2xl"
                    >
                      {active && (
                        <motion.span
                          layoutId="navbar-mobile-bubble"
                          className="absolute inset-0 rounded-2xl bg-[var(--accent)]"
                          transition={bubbleTransition}
                        />
                      )}
                      <span
                        className={`relative z-10 text-lg font-semibold tracking-widest uppercase ${
                          active ? 'text-[var(--ink)]' : 'text-[var(--text-secondary)]'
                        }`}
                      >
                        {link.label}
                      </span>
                    </Link>
                  )
                })}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
