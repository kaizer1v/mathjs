export function arraySum(arr) {
  /* returns sum of all numbers in arr */
  if (arr.constructor !== Array) throw TypeError('Type should be an array only')
  return arr.reduce(function(a, b) { return a + b }, 0)
}

export function arrayProduct(arr) {
  /* returns product of all numbers in array */
  if (arr.constructor !== Array) throw TypeError('Type should be an array only')
  return arr.reduce(function(a, b) { return a * b })   
}

export function arrayMean(arr) {
  /* returns mean of all numeric data in arr */
  if (arr.constructor !== Array) throw TypeError('Type should be an array only')
  return (arraySum(arr) / arr.length)
}

export function arrayMax(arr) {
  /* returns max element out of all numbers in arr */
  if (arr.constructor === Array)
    return arr.reduce(function(a, b) { return (a > b) ? a : b })
  else
    throw TypeError('Type should be an array only')
}

export function arrayMin(arr) {
  /* returns min element out of all numbers in arr */
  if (arr.constructor === Array)
    return arr.reduce(function(a, b) { return (a < b) ? a : b })
  else
    throw TypeError('Type should be an array only')
}

export function arrayPow(arr) {
  /* returns cumulative power of all numbers in arr like: */
  /* arrayPow([a, b, c]) = ((a^b)^c) and so on. */
  if (arr.constructor === Array)
    return arr.reduce(function(a, b) { return Math.pow(a, b) })
  else
    throw TypeError('Type should be an array only')
}
