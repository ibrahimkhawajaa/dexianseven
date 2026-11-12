import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import AxionNavbar from '../../components/axion/AxionNavbar'
import HeroShaderBackground from '../../components/axion/HeroShaderBackground'
import TextRoll from '../../components/axion/TextRoll'
import PartnerIcon from '../../components/axion/PartnerIcon'

export default function HeroSection() {
  return (
    <section className="relative flex min-h-[100dvh] flex-col bg-[#EFEFEF]">
      <HeroShaderBackground />
      <AxionNavbar />

      <div className="relative z-20 mx-auto flex w-full max-w-[1440px] flex-1 flex-col px-5 sm:px-8 lg:px-12 pb-14 sm:pb-16 lg:pb-20">
        <div className="flex-1" />

        <div>
          <p className="mb-5 sm:mb-8 text-[13px] sm:text-sm text-gray-900 tracking-wide">
            Axion Studio
          </p>

          <h1
            className="font-medium text-gray-900 leading-[1.08] tracking-[-0.03em]"
            style={{
              fontSize: 'clamp(1.75rem, 7vw, 4.2rem)',
            }}
          >
            <span className="sm:hidden">
              We craft digital experiences for brands ready to dominate their category online.
            </span>
            <span className="hidden sm:inline" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.2rem)' }}>
              We craft digital experiences
              <br />
              for brands ready to dominate
              <br />
              their category online.
            </span>
          </h1>

          <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row gap-4 sm:gap-5 sm:items-center">
            <Link
              to="/contact"
              className="group inline-flex w-full sm:w-auto items-center justify-between sm:justify-start gap-2 rounded-full bg-[#F26522] py-2 pl-5 sm:pl-6 pr-2 text-[13px] sm:text-sm font-medium text-white transition-colors hover:bg-[#e05a1a]"
            >
              <TextRoll lineHeight={20}>Start a project</TextRoll>
              <span className="flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-full bg-white transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-rotate-45">
                <ArrowUpRight size={16} className="text-[#F26522]" strokeWidth={2.5} />
              </span>
            </Link>

            <div className="inline-flex w-full sm:w-auto flex-wrap items-center gap-2 rounded-[4px] bg-white py-2 pl-3 pr-2 shadow-[0_2px_8px_rgba(0,0,0,0.08)] transition-shadow hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)]">
              <PartnerIcon className="h-5 w-5 sm:h-6 sm:w-6 shrink-0 fill-current text-[#E8704E]" />
              <span className="text-[13px] sm:text-sm font-medium text-gray-900">
                Certified Partner
              </span>
              <span className="rounded bg-gray-900 px-1.5 sm:px-2 py-0.5 text-[10px] sm:text-[11px] font-medium text-white whitespace-nowrap">
                Featured
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
