export function arrayHasDuplicates(arr, elem) {
  /* returns true of "elem" is present more than once in "arr",
    if not returns false */
  if (!elem) { return arrayGetDuplicates(arr).length !== 0 }
  if (arr.constructor !== Array) throw TypeError('Type should be an array only')
  var len = arr.length,
    pos = 0,
    results = [],
    index = arr.indexOf(elem),
    lastIndex = arr.lastIndexOf(elem)
  return ((index !== -1) && (lastIndex !== -1) && (index !== lastIndex)) ? true : false
}


export function arrayGetDuplicates(arr) {
  /* returns an array of all duplicates existing within the array */
  if (arr.constructor === Array) throw TypeError('Type should be an array only')
  var toReturn = []
  for (var i = 0; i != arr.length; i++) {
    if (arrayHasDuplicates(arr, arr[i])) {
      toReturn.push(arr[i])
    }
  }
  return arrayUnique(toReturn)
}
