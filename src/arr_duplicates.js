import {arrayUnique} from './arr_unique'

export function arrayHasDuplicates(arr) {
  /* returns true `arr` has a value occurring more than once */
  if (arr.constructor !== Array) throw TypeError('Type should be an array only')
  var len = arr.length,
    pos = 0,
    results = [],
    index = arr.indexOf(elem),
    lastIndex = arr.lastIndexOf(elem)
  return ((index !== -1) && (lastIndex !== -1) && (index !== lastIndex)) ? true : false
}


export function arrayGetDuplicates(arr) {
  /* returns an array of all duplicates existing within `arr` */
  if (arr.constructor !== Array) throw TypeError('Type should be an array only')
  if (!arrayHasDuplicates(arr)) return []
  var toReturn = [],
    i = 0
  for (; i != arr.length; i++) {
    if (arrayHasDuplicates(arr, arr[i])) {
      toReturn.push(arr[i])
    }
  }
  return arrayUnique(toReturn)
}
