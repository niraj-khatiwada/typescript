import { createTokens } from 'tamagui'

import { colors } from './themes'

const size = {
  0: 0,
  1: 4,
  2: 8,
  3: 12,
  4: 16,
  true: 16,
  5: 20,
  6: 24,
  7: 28,
  8: 32,
  9: 36,
  10: 40,
}

export const tokens = createTokens({
  size,
  space: size,
  radius: size,
  zIndex: { 0: 0, 100: 100, 200: 200 },
  color: colors,
})
