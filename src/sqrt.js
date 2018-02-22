import './absolute'
import './mean'

export var sqrt = (function() {
  // private
  var tolerance = 0.0001

  function improve(guess, x) {
    return mean(guess, (x / guess))
  }

  function square(n) {
    if (n.constructor === Number && !n.hasOwnProperty('square')) return n * n
    else throw TypeErorr('Type has to be a number only')
  }

  function goodEnough(guess, x) {
    return (absolute(square(guess) - x) < tolerance) ? true : false
  }

  // public
  return function sqrt(n, guess) {
    guess = typeof guess !== 'undefined' ? guess : 1
    var z = (n / guess),
      m = mean(z, guess)
    return (goodEnough(m, n)) ? m : sqrt(n, m)
  }
})()


export function isPerfectSq(n) {
  var i
  for (i = 1; i <= Math.floor(n / i); i++) {
    if (n % i === 0)
      if (i === n / i)
        return true
  }
  return false
}
