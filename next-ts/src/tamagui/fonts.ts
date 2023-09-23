import { createFont } from 'tamagui'

import { tokens } from './tokens'

export const poppinsFont = createFont({
  family: 'Poppins, sans-serif',
  size: tokens.size,
  lineHeight: {},
  weight: {
    1: '100',
    2: '100',
    3: '300',
    4: '400',
    5: '500',
    6: '600',
    7: '700',
    8: '800',
    9: '900',
  },
})
