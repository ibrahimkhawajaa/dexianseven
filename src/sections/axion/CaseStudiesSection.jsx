import { ArrowUpRight } from 'lucide-react'

function LinkChainIcon({ className }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  )
}

function NarrativCard() {
  return (
    <article>
      <div className="group relative aspect-[329/246] cursor-pointer overflow-hidden rounded-2xl bg-[#1a1d2e]">
        <video
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260516_122702_390f5305-8719-41d5-ae80-d23ab3796c28.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden
          className="h-full w-full object-cover"
        />
        <div className="absolute bottom-4 left-4">
          <div className="flex h-9 w-[148px] items-center overflow-hidden rounded-full bg-white transition-all duration-300 ease-in-out [@media(hover:hover)]:w-9 [@media(hover:hover)]:group-hover:w-[148px]">
            <span className="flex w-9 shrink-0 items-center justify-center">
              <LinkChainIcon className="-rotate-45 transition-transform duration-300 [@media(hover:hover)]:group-hover:rotate-0" />
            </span>
            <span className="whitespace-nowrap pr-3 text-[13px] font-medium text-gray-900 opacity-100 transition-opacity duration-300 [@media(hover:hover)]:opacity-0 [@media(hover:hover)]:delay-100 [@media(hover:hover)]:group-hover:opacity-100">
              Learn more
            </span>
          </div>
        </div>
      </div>
      <p className="mt-4 text-[13px] sm:text-sm text-gray-600 leading-relaxed">
        Winner of Site of the Month 2025 - an interactive 3D showcase driving record
        engagement
      </p>
      <h3 className="mt-1 text-[14px] sm:text-[15px] font-semibold text-gray-900">Narrativ</h3>
    </article>
  )
}

function LuminarCard() {
  return (
    <article>
      <div className="group relative aspect-square cursor-pointer overflow-hidden rounded-2xl bg-[#6b6b6b]">
        <video
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260516_123323_f909c2b8-ff6c-4edf-882b-8ebcdbe389b5.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden
          className="h-full w-full object-cover"
        />
        <div className="absolute bottom-4 left-4">
          <div className="flex h-9 w-[168px] items-center overflow-hidden rounded-full bg-gray-900 transition-all duration-300 ease-in-out [@media(hover:hover)]:w-9 [@media(hover:hover)]:group-hover:w-[168px]">
            <span className="flex w-9 shrink-0 items-center justify-center">
              <ArrowUpRight
                size={14}
                className="text-white -rotate-45 transition-transform duration-300 [@media(hover:hover)]:group-hover:rotate-0"
              />
            </span>
            <span className="whitespace-nowrap pr-3 text-[13px] font-medium text-white opacity-100 transition-opacity duration-300 [@media(hover:hover)]:opacity-0 [@media(hover:hover)]:delay-100 [@media(hover:hover)]:group-hover:opacity-100">
              View case study
            </span>
          </div>
        </div>
      </div>
      <p className="mt-4 text-[13px] sm:text-sm text-gray-600 leading-relaxed">
        Transforming a dated platform into a conversion-focused brand experience
      </p>
      <h3 className="mt-1 text-[14px] sm:text-[15px] font-semibold text-gray-900">Luminar</h3>
    </article>
  )
}

export default function CaseStudiesSection() {
  return (
    <section id="projects" className="scroll-mt-28 bg-[#F5F5F5] pt-16 sm:pt-20 lg:pt-28 pb-16 sm:pb-20 lg:pb-28">
      <div className="mx-auto max-w-[1440px]">
        <div className="px-5 sm:px-8 lg:px-12 flex items-center gap-3 mb-6 sm:mb-8">
          <span className="flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-full bg-gray-900 text-[11px] sm:text-xs font-semibold text-white">
            2
          </span>
          <span className="rounded-full border border-gray-300 px-3 sm:px-4 py-1 sm:py-1.5 text-[12px] sm:text-[13px] font-medium text-gray-900">
            Featured client work
          </span>
        </div>

        <h2
          className="px-5 sm:px-8 lg:px-12 font-medium text-gray-900 leading-[1.08] tracking-[-0.03em] mb-10 sm:mb-14 lg:mb-16"
          style={{
            fontSize: 'clamp(1.75rem, 7vw, 4.2rem)',
          }}
        >
          Our projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-7 px-5 sm:px-8 lg:px-12">
          <NarrativCard />
          <LuminarCard />
        </div>
      </div>
    </section>
  )
}
