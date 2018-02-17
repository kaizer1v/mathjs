export function isPrime(n) {
  /* returns factorials of the number. You can use it like so: */
  if (n === 0) return false
  var factors = _factors(n)
  if ((factors.length == 2) && (factors[1] === n)) return true
  else return false
}

export function factorial(n) {
  if (n.constructor === Number && !n.hasOwnProperty('factorial')) {
    if (n <= 1) return 1
    if (!(n in _factorial))
      _factorial[n] = n * _factorial(n - 1)
    return _factorial[n]
  } else throw TypeErorr('Type has to be a number only')
}

export function square(n) {
  if (n.constructor === Number && !n.hasOwnProperty('square')) return n * n
  else throw TypeErorr('Type has to be a number only')
}

export function absolute(n) {
  if (n.constructor === Number && !n.hasOwnProperty('square')) {
    var v
    if (n > 0) v = n
    else if (n < 0) v = -1 * (n)
    else if (n === 0) n = 1
    return v
  } else throw TypeErorr('Type has to be a number only')
}

export function remainder(n, d) {
  return n - (d * Math.floor(n / d))
}

export function factors(n) {
  /* produces the factors of a given number */
  var factors = [1, n]
  for (var i = 2; i <= Math.floor(n / i); i++) {
    if (n % i === 0)
      if (i === n / i) {
        factors.push(i)
      }
      else
        factors.push(i, n / i)
  }
  return factors
}

export function isPerfectSq(n) {
  var i
  for (i = 1; i <= Math.floor(n / i); i++) {
    if (n % i === 0)
      if (i === n / i)
        return true
  }
  return false
}

export var sqrt = (function() {
  // private
  var tolerance = 0.0001

  function improve(guess, x) {
    return average(guess, (x / guess))
  }

  function average(x, y) {
    return ((x + y) / 2)
  }

  function goodEnough(guess, x) {
    return (abs(square(guess) - x) < tolerance) ? true : false
  }

  function square(x) {
    return x * x
  }

  function abs(x) {
    var v
    if (x > 0)
      v = x
    else if (x < 0)
      v = -1 * (x)
    else if (x === 0)
      v = 1
    return v
  }

  function isPerfectSq(n) {
    var i
    for (i = 1; i <= Math.floor(n / i); i++) {
      if (n % i === 0)
        if (i === n / i)
          return true
    }
    return false
  }

  // public
  return function sqrt(n, guess) {
    guess = typeof guess !== 'undefined' ? guess : 1
    var z = (n / guess),
      m = average(z, guess)
    return (goodEnough(m, n)) ? m : sqrt(n, m)
  }
})()


/* =======================
 * STRING FUNCTIONS
 * =======================
 */

/* returns the title case of a respective sentence 
 * Eg: titleCase("sHoRt AnD sToUt") should return "Short And Stout".
 */
export function titleCase(str) {
  return (str !== '') ? str.trim().toLowerCase().split(' ').map(function(v) {
    return v.split('')
  }).map(function(v) {
    v[0] = (v == '') ? '' : v[0].toUpperCase()
    return v.join('')
  }).join(' ') : ''
}
