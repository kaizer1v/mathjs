export function arraySort(arr, ascDesc) {
  /* Sorts an array in a asscending/descending form */
  ascDesc = (ascDesc === undefined) ? true : ascDesc
  if (arr.constructor === Array) {
    if (ascDesc) { // ascending
      arr.sort(function(a, b) {
        if (a.constructor === String && b.constructor === String && a > b) return 1
        if (a.constructor === String && b.constructor === String && a < b) return -1
        if (a.constructor === Number && b.constructor === Number && a > b) return 1
        if (a.constructor === Number && b.constructor === Number && a < b) return -1
      })
    } else { // descending
      arr.sort(function(a, b) {
        if (a.constructor === String && b.constructor === String && a > b) return -1
        if (a.constructor === String && b.constructor === String && a < b) return 1
        if (a.constructor === Number && b.constructor === Number && a > b) return -1
        if (a.constructor === Number && b.constructor === Number && a < b) return 1
      })
    }
  } else {
    throw TypeError('Type should be an array only')
  }
  return arr
}
