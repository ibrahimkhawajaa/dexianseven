export const colors = {
  accent: '#E85A4F',
  accentHover: '#C94A42',
  accentSoft: '#FDE8E6',
  white: '#FFFFFF',
  bg: '#FBF8F4',
  bgSoft: '#F3EDE6',
  ink: '#0F1A2E',
  text: '#0F1A2E',
  textSecondary: '#5A6B7D',
  textTertiary: '#8A9AAB',
  border: '#E0D6CC',
}

export const accentColor = colors.accent

export const fadeDownVariant = {
  initial: { opacity: 0, y: -20 },
  animate: (custom) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.1,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
}

export const fadeUpVariant = {
  initial: { opacity: 0, y: 32 },
  animate: (custom) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.12,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
}

export const slideUpVariant = {
  initial: { y: '110%' },
  animate: (custom) => ({
    y: 0,
    transition: {
      delay: 0.4 + custom * 0.14,
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
}
