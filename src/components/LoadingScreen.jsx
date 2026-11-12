import { motion } from 'framer-motion'

export default function LoadingScreen({ progress }) {
  const display = Math.round(progress)

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#EFEFEF] px-6"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col items-center"
      >
        <div className="mb-10 flex h-14 w-14 items-center justify-center rounded-full bg-gray-900 text-sm font-bold tracking-tight text-white">
          AX
        </div>

        <p
          className="text-center font-medium tracking-tight text-gray-900"
          style={{ fontSize: 'clamp(1.5rem, 5vw, 2.5rem)', lineHeight: 0.95 }}
        >
          Axion Studio
        </p>

        <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.32em] text-gray-500">
          Loading
        </p>
      </motion.div>

      <div className="absolute bottom-12 left-6 right-6 mx-auto w-full max-w-md md:left-12 md:right-12">
        <div className="mb-3 flex justify-between">
          <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-gray-500">
            Please wait
          </span>
          <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#F26522]">
            {display}%
          </span>
        </div>
        <div className="h-px w-full overflow-hidden bg-gray-300">
          <motion.div
            className="h-full origin-left bg-[#F26522]"
            style={{ width: `${display}%` }}
            transition={{ ease: 'linear', duration: 0.1 }}
          />
        </div>
      </div>
    </motion.div>
  )
}
