export function arraysEqual(arr1, arr2) {
  /* returns if two arrays are exactly the same or not. */
  if (arr1.length !== arr2.length) return false
  for (var i = arr1.length; i--;) {
    if (arr1[i] !== arr2[i]) return false
  }
  return true
}

export function arraysDeepEqual(arr1, arr2) {
  /* returns if two arrays are exactly the same along with their
    data types or not.
  */
  if (arr1.length !== arr2.length) return false
  for (var i = arr1.length; i--;) {
    if ((arr1[i] !== arr2[i]) && (typeof arr1[i] !== typeof arr2[i])) return false
  }
  return true
}
