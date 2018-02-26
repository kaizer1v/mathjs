import {absolute} from './absolute'
import {factors} from './factors'

export function isPrime(n) {
  /* checks if a number no other factor other than itself and 1. */
  if (n === 0) return false
  n = absolute(n)
  var facts = factors(n)
  if ((facts.length == 2) && (facts[1] === n)) return true
  else return false
}
