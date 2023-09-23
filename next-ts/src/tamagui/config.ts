import { createTamagui } from 'tamagui'
import { createAnimations } from '@tamagui/animations-css'

import { tokens } from './tokens'
import * as fonts from './fonts'
import { themes } from './themes'

const animations = createAnimations({
  bouncy: {
    type: 'spring',
    damping: 10,
    mass: 0.9,
    stiffness: 100,
  },
  lazy: {
    type: 'spring',
    damping: 20,
    stiffness: 60,
  },
  quick: {
    type: 'spring',
    damping: 20,
    mass: 1.2,
    stiffness: 250,
  },
})

const mediaQueries = {
  xs: { maxWidth: 320 },
  sm: { maxWidth: 576 },
  md: { maxWidth: 768 },
  lg: { maxWidth: 992 },
  xl: { maxWidth: 1280 },
  xxl: { maxWidth: 1440 },
  xxxl: { maxWidth: 1600 },
  hoverNone: { hover: 'none' },
  pointerCoarse: { pointer: 'coarse' },
}

const config = createTamagui({
  fonts: {
    Poppins: fonts.poppinsFont,
  },
  tokens,
  themes,
  animations,
  media: mediaQueries,
  shouldAddPrefersColorThemes: true,
  themeClassNameOnRoot: true,
})

export default config
