import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Clock, Menu, ArrowUpRight } from 'lucide-react'
import TextRoll from './TextRoll'
import useLondonTime from './useLondonTime'
import AxionMobileMenu from './AxionMobileMenu'

const navLinks = [
  { label: 'Projects', href: '/#projects' },
  { label: 'Studio', href: '/#studio' },
  { label: 'Journal', href: '#' },
  { label: 'Connect', to: '/contact' },
]

export default function AxionNavbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const londonTime = useLondonTime()

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <>
      <div className="relative z-20 mx-auto max-w-[1440px] p-2 sm:p-3">
        <nav
          className="flex items-center justify-between rounded-full bg-white p-[5px]"
          aria-label="Main navigation"
        >
          <div className="flex min-w-0 items-center gap-3 sm:gap-4">
            <Link
              to="/"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gray-900 text-[10px] font-bold tracking-tight text-white sm:h-10 sm:w-10 sm:text-[11px]"
              aria-label="Axion Studio home"
            >
              AX
            </Link>

            <div className="hidden items-center gap-6 md:flex">
              {navLinks.map((link) =>
                link.to ? (
                  <Link
                    key={link.label}
                    to={link.to}
                    className="text-sm text-gray-900 transition-colors duration-300 hover:text-gray-500"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-sm text-gray-900 transition-colors duration-300 hover:text-gray-500"
                    onClick={
                      link.href === '#'
                        ? (e) => e.preventDefault()
                        : undefined
                    }
                  >
                    {link.label}
                  </a>
                )
              )}
            </div>
          </div>

          <div className="hidden shrink-0 items-center gap-4 md:flex lg:gap-5">
            <span className="hidden whitespace-nowrap text-[13px] text-gray-600 lg:block">
              Taking on projects for Q1 2026
            </span>
            <div className="flex items-center gap-1.5 text-[13px] text-gray-600">
              <Clock size={14} strokeWidth={2} aria-hidden />
              <span className="whitespace-nowrap tabular-nums">
                {londonTime} in London
              </span>
            </div>
            <Link
              to="/contact"
              className="group flex items-center gap-2 rounded-full bg-gray-900 py-2 pl-5 pr-2 text-[13px] font-medium text-white transition-colors hover:bg-gray-800"
            >
              <TextRoll>Book a strategy call</TextRoll>
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-rotate-45">
                <ArrowUpRight size={14} className="text-gray-900" strokeWidth={2.5} />
              </span>
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-900 text-white sm:h-10 sm:w-10 md:hidden"
            aria-label="Open menu"
            aria-expanded={menuOpen}
          >
            <Menu size={18} />
          </button>
        </nav>
      </div>

      <AxionMobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  )
}
