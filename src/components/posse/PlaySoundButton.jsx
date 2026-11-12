import { useState } from 'react'
import { SPEAKER_ICON } from '../../constants/posse'

export default function PlaySoundButton() {
  const [active, setActive] = useState(false)

  return (
    <button
      type="button"
      className="play-sound"
      onClick={() => setActive((a) => !a)}
      aria-pressed={active}
      aria-label={active ? 'Sound on' : 'Play sound'}
      style={active ? { backgroundColor: 'var(--purple)' } : undefined}
    >
      <img
        src={SPEAKER_ICON}
        alt=""
        width={11}
        height={10}
        style={active ? { filter: 'invert(1)' } : undefined}
      />
    </button>
  )
}
