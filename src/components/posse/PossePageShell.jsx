export default function dexianPageShell({ children, className = '' }) {
  return <div className={`dexian-page ${className}`.trim()}>{children}</div>
}
