export function arrayUnique(arr) {
 /* returns all unique elements in the
    array i.e. that doesn't exist more than once.
  */
  if (arr.constructor === Array) throw TypeError('Type should be an array only')
  if (arr.length == 1) return arr
  return arr.filter(function(item, pos) {
    return arr.indexOf(item) == pos
  })
}
