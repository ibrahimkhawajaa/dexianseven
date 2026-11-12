import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Clock, X, ArrowUpRight } from 'lucide-react'
import useLondonTime from './useLondonTime'

const navLinks = [
  { label: 'Projects', href: '/#projects' },
  { label: 'Studio', href: '/#studio' },
  { label: 'Journal', href: '#', placeholder: true },
  { label: 'Connect', to: '/contact' },
]

export default function AxionMobileMenu({ open, onClose }) {
  const londonTime = useLondonTime()

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <motion.div
            className="absolute inset-0 bg-black/60"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.div
            className="absolute bottom-0 left-0 right-0 mx-3 mb-3 rounded-2xl bg-white p-6"
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
          >
            <div className="mb-8 flex items-center justify-between">
              <div className="flex items-center gap-2 rounded-full border border-gray-200 px-3 py-1.5 text-[13px] text-gray-600">
                <Clock size={14} />
                <span className="tabular-nums">{londonTime} London</span>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-900 text-white"
                aria-label="Close menu"
              >
                <X size={18} />
              </button>
            </div>

            <nav className="mb-8 flex flex-col gap-1">
              {navLinks.map((link) =>
                link.to ? (
                  <Link
                    key={link.label}
                    to={link.to}
                    onClick={onClose}
                    className="py-2 text-[28px] font-medium leading-tight text-gray-900 sm:text-[32px]"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => {
                      if (link.placeholder) e.preventDefault()
                      else onClose()
                    }}
                    className="py-2 text-[28px] font-medium leading-tight text-gray-900 sm:text-[32px]"
                  >
                    {link.label}
                  </a>
                )
              )}
            </nav>

            <Link
              to="/contact"
              onClick={onClose}
              className="group flex w-full items-center justify-between rounded-full bg-[#F26522] py-3.5 pl-6 pr-3 text-white"
            >
              <span className="text-[15px] font-medium">Start a project</span>
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-rotate-45">
                <ArrowUpRight size={18} className="text-white" />
              </span>
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
