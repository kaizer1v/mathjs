import {arrayUnique} from './arr_unique'
import {absolute} from './absolute'

export function factors(n) {
  /* produces the factors of a given number */
  if(n.constructor !== Number) throw TypeErorr('Type has to be a number only')
  n = absolute(n)
  var factors = [1, n],
    i = 2
  for (; i <= Math.floor(n / i); i++) {
    if (n % i === 0) {
      if (i === n / i) factors.push(i)
      else factors.push(i, n / i)
    }
  }
  return arrayUnique(factors)
}
