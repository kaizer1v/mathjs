import './absolute'
import './factorial'
import './factors'
import './mean'
import './power'
import './prime'
import './sqrt'
import './remainder'


/* =======================
 * STRING FUNCTIONS
 * =======================
 */

export function titleCase(str) {
  /* returns the title case of a respective sentence 
   * Eg: titleCase("sHoRt AnD sToUt") should return "Short And Stout".
   */
  return (str !== '') ? str.trim().toLowerCase().split(' ').map(function(v) {
    return v.split('')
  }).map(function(v) {
    v[0] = (v == '') ? '' : v[0].toUpperCase()
    return v.join('')
  }).join(' ') : ''
}

export function arraysEqual(arr1, arr2) {
  /* returns if two arrays are exactly the same or not. */
  if (arr1.length !== arr2.length) return false
  for (var i = arr1.length; i--;) {
    if (arr1[i] !== arr2[i]) return false
  }
  return true
}

export function arrayDiff(arr1, arr2) {
  /* a - b = returns elements that exist a but not in b. */
  var toReturn = []
  arr1.filter(function(val, index) {
    if (arr2.indexOf(val) < 0)
      toReturn.push(val)
  })
  return toReturn
}

export function arrayElemTypes(arr) {
  /* returns all types of objects containing in the array */
  if (arr.constructor === Array) {
    return arr.map(function(x) { return typeof x })
  } else {
    throw TypeError('Type should be an array only')
  }
}

export function arrayUnion() {
  /* returns union along with duplicates of arrays passed in the parameters */
  if ((arguments && arguments.length == 1) || !arguments[1]) return arguments[0]
  if (arguments && arguments.length === 0) throw Error('You need to pass atleast 1 argument')
  var tempArr = (arguments[0].constructor === Array) ? arguments[0] : [arguments[0]],
    i, j
  for (i = 1; i != arguments.length; i++) {
    // var s = (arguments[i].constructor === Array) ? arguments[i] : [arguments[i]];
    for (j = 0; j != arguments[i].length; j++) {
      tempArr.push(arguments[i][j])
    }
    if (arguments[i + 1]) arrayUnion(tempArr, arguments[i + 1])
    return tempArr
  }
}

export function arraySort(arr, ascDesc) {
  /* Sorts an array in a descending form */
  ascDesc = ascDesc || true
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

export function arrayMode(arr) {
  /* return the mode of numeric arr */
  if (arr.constructor === Array) {
    var arrObj
    for (var i = 0; i < arr.length; i++) {
      // do something
    }
  } else {
    throw TypeError('Type should be an array only')
  }
}

export function arrayMax(arr) {
  /* returns max element out of all numbers in arr */
  if (arr.constructor === Array)
    return arr.reduce(function(a, b) { return (a > b) ? a : b })
  else
    throw TypeError('Type should be an array only')
}

export function arrayMin(arr) {
  /* returns min element out of all numbers in arr */
  if (arr.constructor === Array)
    return arr.reduce(function(a, b) { return (a < b) ? a : b })
  else
    throw TypeError('Type should be an array only')
}

export function arrayPow(arr) {
  /* returns cumulative power of all numbers in arr like: */
  /* arrayPow([a, b, c]) = ((a^b)^c) and so on. */
  if (arr.constructor === Array)
    return arr.reduce(function(a, b) { return Math.pow(a, b) })
  else
    throw TypeError('Type should be an array only')
}
