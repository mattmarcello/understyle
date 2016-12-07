
import palx from 'palx'
import { flattenColors } from './util'

const breakpoints = [
  '(min-width:40em)',
  '(min-width:52em)',
  '(min-width:64em)'
].map(w => `@media screen and ${w}`)

const scale = [
  0, 8, 16, 32, 64
]

const typeScale = [
  64, 48, 32, 24, 16, 14, 12
]

const blue = '#07c'

const colors = flattenColors(palx(blue))

const defaultConfig = {
  breakpoints,
  scale,
  typeScale,
  colors
}

export default defaultConfig

