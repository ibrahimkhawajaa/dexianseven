import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import GlobalTitle from '../components/posse/GlobalTitle'
import PossePageShell from '../components/posse/PossePageShell'
import NetworkGrid from '../components/posse/NetworkGrid'

const INFO_HEADLINE = `Ads
contents
global strategy
event
influence
experiential`

const CLIENTS = ['St-germain', 'Santa Teresa', "Angel's envy", 'Aberfledy', 'Craigellachie']

export default function InfoPage() {
  const revealRef = useRef(null)

  useEffect(() => {
    const el = revealRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible')
          obs.disconnect()
        }
      },
      { threshold: 0.12 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <PossePageShell className="dexian-page--info">
      <div className="infos">
        <Link to="/" className="mid-font close-btn">
          Close
        </Link>

        <h1 className="sr-only">{INFO_HEADLINE}</h1>
        <GlobalTitle text={INFO_HEADLINE} indentFirst={false} />

        <div ref={revealRef} className="reveal-content">
          <div className="df they-choosed">
            <h2 className="mid-font">They choosed us</h2>
            <ul className="mid-font">
              {CLIENTS.map((name) => (
                <li key={name}>{name}</li>
              ))}
            </ul>
          </div>

          <div className="border-top network">
            <div className="df network-intro">
              <h2 className="mid-font">Our network</h2>
              <p>
                dexian Agency works with a network of skilled freelancers, bringing the
                right expertise and the best creativity to each project.
              </p>
            </div>
            <NetworkGrid />
          </div>

          <div className="end-title df">
            <p className="big-font" style={{ whiteSpace: 'pre-wrap' }}>
              {`To talk about a
project,
contact the
dexian`}
            </p>
            <Link to="/contact" className="mono-font button">
              Let&apos;s talk
            </Link>
          </div>

          <div className="bottom df">
            <img className="logo" src="/logo.png" alt="Dexian Digital" />
            <div className="mono-font df footer">
              <p>©2025</p>
              <div className="df socials">
                <a href="https://www.instagram.com/dexian_agency/" target="_blank" rel="noreferrer">
                  Instagram
                </a>
                <a
                  href="https://www.linkedin.com/company/dexian-agency-paris/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </div>
              <p>dexian</p>
            </div>
          </div>
        </div>
      </div>
    </PossePageShell>
  )
}
