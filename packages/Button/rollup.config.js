import configure from '../../rollup.config'
import { dependencies } from './package.json'

export default configure({
    input: './Button.js',
    dependencies,
  })