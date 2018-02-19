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
