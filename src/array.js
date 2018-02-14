export function arrayFlatten(arr) {
  if (arr && arr.constructor === Array) {
    return arr.reduce(function(acc, x) {
      return acc.concat(x && x.constructor === Array ? arrayFlatten(x) : x)
    }, [])
  } else {
    throw TypeError('Type should be an array only')
  }
}

/* returns all unique elements in the array i.e. that doesn't exist more than once. */
export function arrayUnique(arr) {
  if (arr.constructor === Array) {
    if (arr.length == 1) return arr
    return arr.filter(function(item, pos) {
      return arr.indexOf(item) == pos
    })
  } else {
    throw TypeError('Type should be an array only')
  }
}
