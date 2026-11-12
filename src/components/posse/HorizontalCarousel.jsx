import { useEffect, useState } from 'react'
import { CAROUSEL_MEDIA, CAROUSEL_MEDIA_MOBILE } from '../../constants/posse'

export default function HorizontalCarousel() {
  const [mobile, setMobile] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)')
    const update = () => setMobile(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  const media = mobile ? CAROUSEL_MEDIA_MOBILE : CAROUSEL_MEDIA
  const items = [...media, ...media]

  return (
    <section id="carouselH" aria-label="Client work previews">
      <div className="carousel-content-h">
        {items.map((item, i) => (
          <div
            key={`${item.alt}-h-${i}`}
            className="media"
            aria-hidden={i >= media.length ? true : undefined}
          >
            <img
              src={item.src}
              width={mobile ? 480 : 1400}
              alt={item.alt}
              loading="lazy"
              decoding="async"
            />
          </div>
        ))}
      </div>
    </section>
  )
}
