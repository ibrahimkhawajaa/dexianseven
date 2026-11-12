import { Link, useParams, Navigate } from 'react-router-dom'
import GlobalTitle from '../components/posse/GlobalTitle'
import PossePageShell from '../components/posse/PossePageShell'
import { WORKS } from '../constants/posse'

const ARROW_ICON =
  "data:image/svg+xml,%3csvg%20fill='none'%20height='9'%20viewBox='0%200%208%209'%20width='8'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='m0%204.5h7m0%200-3.5-3.5m3.5%203.5-3.5%203.5'%20stroke='%23111'/%3e%3c/svg%3e"

export default function WorkPage() {
  const { slug } = useParams()
  const index = WORKS.findIndex((w) => w.slug === slug)

  if (index === -1) {
    return <Navigate to={`/works/${WORKS[0].slug}`} replace />
  }

  const work = WORKS[index]
  const prev = index > 0 ? WORKS[index - 1] : null
  const next = index < WORKS.length - 1 ? WORKS[index + 1] : null

  return (
    <PossePageShell>
      <div className="work-page df">
        <Link to="/" className="mid-font close-btn">
          Close
        </Link>

        <div className="work-left">
          <div className="work-gallery df">
            {work.gallery.map((block, i) => {
              if (block.type === 'two') {
                return (
                  <div key={i} className="two-images df">
                    {block.images.map((src, j) => (
                      <img key={j} src={src} alt="" loading="lazy" />
                    ))}
                  </div>
                )
              }
              return <img key={i} src={block.src} alt="" loading="lazy" />
            })}
          </div>
        </div>

        <div className="work-right">
          <div>
            <div className="nav-projects">
              <div className="nav-inner">
                <div className="df">
                  {WORKS.map((w) => (
                    <Link
                      key={w.slug}
                      to={`/works/${w.slug}`}
                      className={w.slug === slug ? 'active' : ''}
                      title={w.title}
                      data-brand={w.brand}
                    >
                      <img src={w.thumb} alt="" />
                    </Link>
                  ))}
                </div>
              </div>
              <p className="mono-font" />
            </div>

            <div className="work-content df">
              <div className="top df">
                <div>
                  <p className="brand mid-font">{work.brand}</p>
                  <h1 className="sr-only">{work.title}</h1>
                  <GlobalTitle text={work.title} indentFirst={false} />
                </div>
                <div className="works-nav df mono-font">
                  <p>Works</p>
                  <p>
                    {index + 1}/{WORKS.length}
                  </p>
                  <div className="buttons df">
                    {prev ? (
                      <Link to={`/works/${prev.slug}`}>
                        <img src={ARROW_ICON} alt="Previous" />
                      </Link>
                    ) : (
                      <a className="disabled" aria-disabled>
                        <img src={ARROW_ICON} alt="" />
                      </a>
                    )}
                    {next ? (
                      <Link to={`/works/${next.slug}`}>
                        <img src={ARROW_ICON} alt="Next" />
                      </Link>
                    ) : (
                      <a className="disabled" aria-disabled>
                        <img src={ARROW_ICON} alt="" />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <div className="work-bottom">
                <p>{work.description}</p>
                <div className="datas df">
                  <div>
                    <h2 className="mono-font">Infos</h2>
                    <ul>
                      {work.infos.map((line) => (
                        <li key={line}>{line}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PossePageShell>
  )
}
