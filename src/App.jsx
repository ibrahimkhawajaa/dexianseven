import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import VerticalCarousel from './components/posse/VerticalCarousel'
import HomePage from './pages/HomePage'
import InfoPage from './pages/InfoPage'
import ContactPage from './pages/ContactPage'
import WorkPage from './pages/WorkPage'
import CreditsPage from './pages/CreditsPage'
import { WORKS } from './constants/posse'

export default function App() {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 50)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className={`dexian-app dexian-main ${ready ? 'on' : ''}`}>
      <BrowserRouter>
        <VerticalCarousel />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/info" element={<InfoPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/works/:slug" element={<WorkPage />} />
          <Route path="/pages/privacy" element={<CreditsPage />} />
          <Route path="/about" element={<Navigate to="/info" replace />} />
          <Route
            path="/portfolio"
            element={<Navigate to={`/works/${WORKS[0].slug}`} replace />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
