import { Link } from 'react-router-dom'
import GlobalTitle from '../components/posse/GlobalTitle'
import PossePageShell from '../components/posse/PossePageShell'
import HorizontalCarousel from '../components/posse/HorizontalCarousel'
import PlaySoundButton from '../components/posse/PlaySoundButton'
import { HOME_HEADLINE, WORKS } from '../constants/posse'

export default function HomePage() {
  const firstWork = WORKS[0]

  return (
    <PossePageShell className="dexian-page--home">
      <div className="homepage">
        <div className="top">
          <div className="inner-logo">
            <Link to="/">
              <img className="logo" src="/logo.png" alt="Dexian Digital" />
            </Link>
          </div>

          <h1 className="sr-only">{HOME_HEADLINE}</h1>
          <GlobalTitle text={HOME_HEADLINE} />

          <header className="mid-font df">
            <div className="left df">
              <Link to={`/works/${firstWork.slug}`}>Works</Link>
              <span className="length">(008)</span>
            </div>
            <div className="right df">
              <Link to="/info">Info</Link>
              <Link to="/contact">Contact</Link>
            </div>
          </header>
        </div>

        <HorizontalCarousel />

        <div className="bottom">
          <div className="content df">
            <div className="description body-text">
              <PlaySoundButton />
              <p>
                « dexian » - noun — A group of people who have come together for the
                same purpose
              </p>
            </div>
            <div className="right df mono-font">
              <div className="socials">
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
              <div className="copyright">
                <p>©2025</p>
                <Link to="/pages/privacy">Credits</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PossePageShell>
  )
}
