import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

export default function PortfolioCard({ project, index }) {
  const isDark = project.theme === 'dark'
  const isFeatured = project.featured
  const textMain = isDark ? 'text-[var(--cream)]' : 'text-[var(--ink)]'

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative ${project.grid}`}
    >
      <a href="#" className="block h-full" onClick={(e) => e.preventDefault()}>
        <div
          className={`relative overflow-hidden h-full min-h-[280px] ${project.minH} border border-[var(--border)] bg-[var(--bg-soft)]`}
        >
          <div
            className="absolute inset-0 transition-transform duration-[1.1s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
            style={{ background: project.bg }}
          />

          <div
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage: `repeating-linear-gradient(
                -12deg,
                transparent,
                transparent 40px,
                ${isDark ? '#fff' : '#000'} 40px,
                ${isDark ? '#fff' : '#000'} 41px
              )`,
            }}
          />

          <span
            className={`absolute top-5 left-5 md:top-6 md:left-6 font-semibold leading-none tracking-tight ${
              isDark ? 'text-[var(--cream)]/15' : 'text-[var(--ink)]/10'
            }`}
            style={{ fontSize: isFeatured ? 'clamp(4rem, 12vw, 9rem)' : 'clamp(2.5rem, 6vw, 5rem)' }}
          >
            {String(index + 1).padStart(2, '0')}
          </span>

          <div className="absolute inset-0 flex flex-col justify-between p-5 md:p-7 lg:p-8">
            <div className="flex justify-end">
              <span
                className={`inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full border transition-all duration-500 ${
                  isDark
                    ? 'border-[var(--accent-muted)] text-[var(--cream)] group-hover:bg-[var(--accent)] group-hover:border-[var(--accent)]'
                    : 'border-[var(--ink)]/15 text-[var(--ink)] group-hover:bg-[var(--accent)] group-hover:text-white group-hover:border-[var(--accent)]'
                }`}
              >
                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </span>
            </div>

            <div>
              <p
                className={`text-[10px] md:text-[11px] font-semibold tracking-[0.28em] uppercase mb-3 md:mb-4 ${
                  isDark ? 'text-[var(--accent-muted)]' : 'text-[var(--text-secondary)]'
                }`}
              >
                {project.category}
                <span className="mx-2 opacity-40">/</span>
                {project.year}
              </p>

              <h2
                className={`font-semibold uppercase leading-[0.92] tracking-tight ${textMain}`}
                style={{
                  fontSize: isFeatured
                    ? 'clamp(2rem, 5.5vw, 4.5rem)'
                    : 'clamp(1.5rem, 3.5vw, 2.75rem)',
                }}
              >
                {project.title}
              </h2>

              {isFeatured && (
                <p
                  className={`mt-3 md:mt-4 text-sm md:text-base max-w-md leading-relaxed opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ${
                    isDark ? 'text-white/80' : 'text-[var(--text-secondary)]'
                  }`}
                >
                  {project.description}
                </p>
              )}
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[var(--accent)] scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out" />
        </div>
      </a>
    </motion.article>
  )
}
