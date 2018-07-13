export function arrayMin(arr) {
  /* returns all min value inside an array */
  if (arr.constructor === Array && arr.length !== 0) {
    return arr.reduce(function(a, b) { return (a < b) ? a : b })
  } else {
    throw TypeError('Type should be an array only')
  }
}
