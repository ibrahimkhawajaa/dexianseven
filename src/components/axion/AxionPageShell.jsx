import AxionNavbar from './AxionNavbar'

export default function AxionPageShell({ children, headerClass = 'bg-[#EFEFEF]' }) {
  return (
    <div className="min-h-screen bg-[#EFEFEF]">
      <header className={headerClass}>
        <AxionNavbar />
      </header>
      {children}
    </div>
  )
}
