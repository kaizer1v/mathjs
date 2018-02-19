import './factors'

export function isPrime(n) {
  /* returns factorials of the number. You can use it like so: */
  if (n === 0) return false
  var facts = factors(n)
  if ((facts.length == 2) && (facts[1] === n)) return true
  else return false
}
