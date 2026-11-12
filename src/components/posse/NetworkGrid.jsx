import { NETWORK_CARDS } from '../../constants/posse'

export default function NetworkGrid() {
  return (
    <div className="network-grid">
      {NETWORK_CARDS.map((card) => (
        <article key={card.name} className="network-card">
          <img src={card.image} alt="" loading="lazy" />
          <div className="datas mono-font">
            <p>{card.name}</p>
            <p>{card.role}</p>
            <a target="_blank" rel="noreferrer" href={card.link}>
              Linkedin
            </a>
          </div>
        </article>
      ))}
    </div>
  )
}
