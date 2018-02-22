export function arrayDtypes(arr) {
  /* returns all types of objects containing in the array */
  if (arr.constructor === Array) {
    return arr.map(function(x) { return typeof x })
  } else {
    throw TypeError('Type should be an array only')
  }
}
