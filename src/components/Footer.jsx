import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="px-5 sm:px-8 md:px-12 py-6 flex items-center justify-between gap-4 border-t border-[var(--border)] bg-[var(--bg-soft)]">
      <Link
        to="/contact"
        className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[var(--text-secondary)] hover:text-[var(--accent-hover)] transition-colors"
      >
        Work with us
      </Link>
      <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[var(--text-tertiary)]">
        © {new Date().getFullYear()}
      </span>
    </footer>
  )
}
