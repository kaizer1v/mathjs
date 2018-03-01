import {power} from './exponent'
import {absolute} from './absolute'

export function round(n, d) {
  // round to number of decimal places
  d = (d) ? (d < 0) ? absolute(d) : d : 2
  var round = power(10, d)
  return Math.round(n * round) / round
}
