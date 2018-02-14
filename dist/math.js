(function () {
'use strict';

function arrayFlatten(arr) {
  if (arr && arr.constructor === Array) {
    return arr.reduce(function(acc, x) {
      return acc.concat(x && x.constructor === Array ? arrayFlatten(x) : x)
    }, [])
  } else {
    throw TypeError('Type should be an array only')
  }
}

/* returns all unique elements in the array i.e. that doesn't exist more than once. */
function arrayUnique(arr) {
  if (arr.constructor === Array) {
    if (arr.length == 1) return arr
    return arr.filter(function(item, pos) {
      return arr.indexOf(item) == pos
    })
  } else {
    throw TypeError('Type should be an array only')
  }
}

// const arr = require('./array.js')
var flat = arrayFlatten([1, [3, 52, [5], [1, 6, 7], 1]]);
console.log(flat);

var uniq = arrayUnique([1, 4, 2, 6, 9, 7, 2, 4, 5, 8, 7, 5, 9]);
console.log(uniq);

}());
