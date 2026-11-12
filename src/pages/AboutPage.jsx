import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import AxionPageShell from '../components/axion/AxionPageShell'
import TextRoll from '../components/axion/TextRoll'

export default function AboutPage() {
  return (
    <AxionPageShell>
      <section className="mx-auto flex min-h-[70vh] max-w-[1440px] flex-col justify-center bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <p className="mb-8 w-fit rounded-full border border-gray-200 px-4 py-1.5 text-[12px] font-medium text-gray-900 sm:text-[13px]">
          About Axion
        </p>
        <h1
          className="max-w-4xl font-medium leading-[1.08] tracking-[-0.03em] text-gray-900"
          style={{ fontSize: 'clamp(2rem, 6vw, 4rem)' }}
        >
          Strategy-led creatives, delivering results in digital and beyond.
        </h1>
        <p className="mt-8 max-w-xl text-[17px] font-medium leading-[1.6] text-gray-600">
          Through research, creative thinking and iteration we help growing brands realize
          their digital full potential.
        </p>
        <Link
          to="/contact"
          className="group mt-10 inline-flex w-fit items-center gap-2 rounded-full bg-[#F26522] py-2.5 pl-6 pr-2 text-[14px] font-medium text-white transition-colors hover:bg-[#e05a1a]"
        >
          <TextRoll lineHeight={20}>Start a project</TextRoll>
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-rotate-45">
            <ArrowUpRight size={16} className="text-[#F26522]" strokeWidth={2.5} />
          </span>
        </Link>
        <Link
          to="/"
          className="mt-12 inline-block text-sm text-gray-500 transition-colors hover:text-gray-900"
        >
          ← Back to home
        </Link>
      </section>
    </AxionPageShell>
  )
}
