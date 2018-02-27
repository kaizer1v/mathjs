export function arrayDiff(arr1, arr2) {
  /* a - b = returns elements that exist a but not in b. */
  var toReturn = []
  arr1.filter(function(val, index) {
    if (arr2.indexOf(val) < 0)
      toReturn.push(val)
  })
  return toReturn
}
