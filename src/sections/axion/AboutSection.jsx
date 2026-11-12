import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import TextRoll from '../../components/axion/TextRoll'

const IMG_SMALL =
  'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260516_090123_74be96d4-9c1b-40cf-932a-96f4f4babed3.png&w=1280&q=85'
const IMG_LARGE =
  'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260516_090133_c157d30b-a99a-4477-bec1-a446149ec3f2.png&w=1280&q=85'

function OrangeButton({ children, className = '' }) {
  return (
    <Link
      to="/contact"
      className={`group inline-flex items-center gap-2 rounded-full bg-[#F26522] py-2 pl-5 sm:pl-6 pr-2 text-[13px] sm:text-sm font-medium text-white transition-colors hover:bg-[#e05a1a] ${className}`}
    >
      <TextRoll lineHeight={20}>{children}</TextRoll>
      <span className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-white transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-rotate-45">
        <ArrowUpRight size={16} className="text-[#F26522]" strokeWidth={2.5} />
      </span>
    </Link>
  )
}

export default function AboutSection() {
  return (
    <section id="studio" className="scroll-mt-28 overflow-hidden bg-white pt-16 sm:pt-20 lg:pt-32 pb-12 sm:pb-16 lg:pb-24">
      <div className="mx-auto max-w-[1440px]">
        <div className="px-5 sm:px-8 lg:px-12 flex items-center gap-3 mb-6 sm:mb-8">
          <span className="flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-full bg-gray-900 text-[11px] sm:text-xs font-semibold text-white">
            1
          </span>
          <span className="rounded-full border border-gray-200 px-3 sm:px-4 py-1 sm:py-1.5 text-[12px] sm:text-[13px] font-medium text-gray-900">
            Introducing Axion
          </span>
        </div>

        <h2
          className="px-5 sm:px-8 lg:px-12 font-medium text-gray-900 leading-[1.12] tracking-[-0.02em] mb-12 sm:mb-16 lg:mb-28"
          style={{ fontSize: 'clamp(1.5rem, 4vw, 3.2rem)' }}
        >
          Strategy-led creatives, delivering
          <br className="hidden sm:block" />
          <span className="sm:hidden"> </span>
          results in digital and beyond.
        </h2>

        <div className="lg:hidden px-5 sm:px-8 lg:px-12 space-y-8">
          <div>
            <p className="text-[15px] sm:text-[17px] font-medium text-gray-900 leading-[1.6] mb-6">
              Through research, creative thinking and iteration we help growing brands
              realize their digital full potential.
            </p>
            <OrangeButton>About our studio</OrangeButton>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
            <img
              src={IMG_SMALL}
              alt="Axion Studio team at work"
              loading="lazy"
              className="w-full sm:w-[45%] aspect-[438/346] rounded-xl sm:rounded-2xl object-cover"
            />
            <img
              src={IMG_LARGE}
              alt="Creative studio workspace"
              loading="lazy"
              className="w-full sm:w-[55%] aspect-[900/600] sm:aspect-[3/2] rounded-xl sm:rounded-2xl object-cover"
            />
          </div>
        </div>

        <div className="hidden lg:grid grid-cols-[26%_1fr_48%] items-end gap-6 xl:gap-8 px-5 sm:px-8 lg:px-12">
          <img
            src={IMG_SMALL}
            alt="Axion Studio team at work"
            loading="lazy"
            className="w-full aspect-[438/346] rounded-2xl object-cover self-end"
          />

          <div className="self-start flex flex-col items-end text-right pb-4">
            <p className="text-[16px] xl:text-[18px] font-medium text-gray-900 leading-[1.65] mb-6">
              Through research, creative thinking
              <br />
              and iteration we help growing brands
              <br />
              realize their digital full potential.
            </p>
            <OrangeButton>About our studio</OrangeButton>
          </div>

          <img
            src={IMG_LARGE}
            alt="Creative studio workspace"
            loading="lazy"
            className="w-full aspect-[3/2] rounded-2xl object-cover self-end"
          />
        </div>
      </div>
    </section>
  )
}
