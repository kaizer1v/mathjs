export default function arrayFlatten(arr) {
 /* Takes a multi-dimensional array as
    argument and flattens it to a single dimensional array
  */
  if (arr && arr.constructor !== Array) throw TypeError('Type should be an array only')
  return arr.reduce(function(acc, x) {
    return acc.concat(x && x.constructor === Array ? arrayFlatten(x) : x)
  }, [])
}
