export default function TextRoll({ children, lineHeight = 20 }) {
  return (
    <span
      className="inline-flex flex-col overflow-hidden"
      style={{ height: `${lineHeight}px` }}
    >
      <span className="transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-translate-y-1/2">
        <span className="block leading-none">{children}</span>
        <span className="block leading-none">{children}</span>
      </span>
    </span>
  )
}
