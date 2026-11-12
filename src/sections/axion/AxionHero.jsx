import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import AxionNavbar from '../../components/axion/AxionNavbar'
import HeroShaderBackground from '../../components/axion/HeroShaderBackground'
import TextRoll from '../../components/axion/TextRoll'
import PartnerIcon from '../../components/axion/PartnerIcon'

export default function AxionHero() {
  return (
    <section className="relative min-h-[100dvh] flex flex-col bg-[#EFEFEF] overflow-hidden">
      <HeroShaderBackground />
      <AxionNavbar />

      <div className="relative z-20 flex-1 flex flex-col max-w-[1440px] w-full mx-auto px-5 sm:px-8 lg:px-12 pb-14 sm:pb-16 lg:pb-20">
        <div className="flex-1 min-h-[8vh]" />

        <div>
          <p className="text-[13px] sm:text-[14px] text-gray-900 tracking-wide mb-5 sm:mb-8">
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
              className="group inline-flex items-center gap-2 bg-[#F26522] hover:bg-[#e05a1a] text-white text-[13px] sm:text-[14px] font-medium rounded-full pl-5 sm:pl-6 pr-2 py-2 transition-colors duration-300 w-fit"
            >
              <TextRoll lineHeight={20}>
                <span className="text-[13px] sm:text-[14px]">Start a project</span>
              </TextRoll>
              <span className="w-7 h-7 sm:w-8 sm:h-8 bg-white rounded-full flex items-center justify-center shrink-0 transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-rotate-45">
                <ArrowUpRight size={16} className="text-[#F26522]" />
              </span>
            </Link>

            <div className="inline-flex items-center gap-2.5 sm:gap-3 bg-white rounded-[4px] px-3 sm:px-4 py-2 sm:py-2.5 shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)] transition-shadow duration-300 w-fit">
              <PartnerIcon className="w-5 h-5 sm:w-6 sm:h-6 fill-current text-[#E8704E] shrink-0" />
              <span className="text-[13px] sm:text-[14px] font-medium text-gray-900 whitespace-nowrap">
                Certified Partner
              </span>
              <span className="text-[10px] sm:text-[11px] bg-gray-900 text-white px-1.5 sm:px-2 py-0.5 rounded font-medium whitespace-nowrap">
                Featured
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
