import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children, navVariant = 'default', showFooter = true }) {
  return (
    <div
      className="min-h-screen flex flex-col bg-[var(--bg)]"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <Navbar variant={navVariant} />
      <main className="flex-1 pt-[76px] md:pt-[84px]">{children}</main>
      {showFooter && <Footer />}
    </div>
  )
}
