export function factorial(n) {
  if (n.constructor === Number && !n.hasOwnProperty('factorial')) {
    if (n <= 1) return 1
    if (!(n in factorial))
      factorial[n] = n * factorial(n - 1)
    return factorial[n]
  } else throw TypeErorr('Type has to be a number only')
}

export function square(n) {
  if (n.constructor === Number && !n.hasOwnProperty('square')) return n * n
  else throw TypeErorr('Type has to be a number only')
}

export function absolute(n) {
  if (n.constructor === Number && !n.hasOwnProperty('square')) {
    var v
    if (n > 0) v = n
    else if (n < 0) v = -1 * (n)
    else if (n === 0) n = 1
    return v
  } else throw TypeErorr('Type has to be a number only')
}

export function remainder(n, d) {
  return n - (d * Math.floor(n / d))
}

export function factors(n) {
  /* produces the factors of a given number */
  var factors = [1, n]
  for (var i = 2; i <= Math.floor(n / i); i++) {
    if (n % i === 0)
      if (i === n / i) {
        factors.push(i)
      }
      else
        factors.push(i, n / i)
  }
  return factors
}

export function isPrime(n) {
  /* returns factorials of the number. You can use it like so: */
  if (n === 0) return false
  var facts = factors(n)
  if ((facts.length == 2) && (facts[1] === n)) return true
  else return false
}

export function isPerfectSq(n) {
  var i
  for (i = 1; i <= Math.floor(n / i); i++) {
    if (n % i === 0)
      if (i === n / i)
        return true
  }
  return false
}

export var sqrt = (function() {
  // private
  var tolerance = 0.0001

  function improve(guess, x) {
    return average(guess, (x / guess))
  }

  function average(x, y) {
    return ((x + y) / 2)
  }

  function goodEnough(guess, x) {
    return (abs(square(guess) - x) < tolerance) ? true : false
  }

  function square(x) {
    return x * x
  }

  function abs(x) {
    var v
    if (x > 0)
      v = x
    else if (x < 0)
      v = -1 * (x)
    else if (x === 0)
      v = 1
    return v
  }

  // public
  return function sqrt(n, guess) {
    guess = typeof guess !== 'undefined' ? guess : 1
    var z = (n / guess),
      m = average(z, guess)
    return (goodEnough(m, n)) ? m : sqrt(n, m)
  }
})()


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


export function arrayShuffle(arr) {
  
  /* This uses the fischer-yates algorithm */
  /* Shuffles the array randomly and returns the shuffled array */
  if (arr && arr.constructor === Array) {
    var toReturn = [],
      len = arr.length,
      i
    if (len <= 1) return arr
    // algo starts here.
    while (len) {
      i = Math.floor(Math.random() * len--)
      toReturn.push(arr.splice(i, 1)[0])
    }
    return toReturn
  } else throw TypeError('Type should be an array only')
}

export function arrRandomElem(arr) {
  /* Randomly choose an element from Array */
  if (arr && arr.constructor === Array) {
    if (arr.length <= 1) return arr
    return arr[Math.floor(Math.random() * arr.length)]
  }
}

export function arrayRandom(len, min, max, unique) {
  /* Creates an array of random integers between the range specified */
  var toReturn = [],
    tempObj = {},
    i = 0
  len = (len) ? len : 10
  min = (min) ? min : 1
  max = (max) ? max : 100
  unique = (unique) ? unique : false

  if (unique === true) {
    for (; i < len; i++) {
      var randomInt = Math.floor(Math.random() * ((max - min) + min))
      if (tempObj['key_' + randomInt] === undefined) {
        tempObj['key_' + randomInt] = randomInt
        toReturn.push(randomInt)
      } else {
        i--
      }
    }
  } else {
    for (; i < len; i++) {
      toReturn.push(Math.floor(Math.random() * ((max - min) + min)))
    }
  }

  return toReturn
}

export function arrayFlatten(arr) {
  /* Takes a multi-dimensional array as argument and flattens it to a single dimensional array */
  if (arr && arr.constructor === Array) {
    return arr.reduce(function(acc, x) {
      return acc.concat(x && x.constructor === Array ? arrayFlatten(x) : x)
    }, [])
  } else {
    throw TypeError('Type should be an array only')
  }
}

export function arrayUnique(arr) {
  /* returns all unique elements in the array i.e. that doesn't exist more than once. */
  if (arr.constructor === Array) {
    if (arr.length == 1) return arr
    return arr.filter(function(item, pos) {
      return arr.indexOf(item) == pos
    })
  } else {
    throw TypeError('Type should be an array only')
  }
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

function arrayMerge() {
  /* Merges two arrays and removes all duplicates. */
  // TODO: goes into infinite loop
  var currArr
  if(arguments && arguments.length == 1) {
    return arguments[0]
  } else if(arguments && arguments.length > 1) {
    currArr = arguments[0]
    for(var i = 0; i != arguments.length; i++) {
      if(arguments[i].constructor === Array) {
        for(var j = 0; j != arguments[i].length; j++) {
          if(arguments[i][j] === undefined) continue
          currArr.push(arguments[i][j])
        }
      } else {
        throw TypeError('Type should be an array only')
      }
    }
  } else {
    throw Error('You need to pass atleast 1 argument')
  }
  return arrayUnique(currArr)
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

export function arrayHasDuplicates(arr, elem) {
  /* returns true of "elem" is present more than once in "arr",
    if not returns false */
  if (!elem) {
    return arrayGetDuplicates(arr).length !== 0
  }
  if (arr.constructor === Array) {
    var len = arr.length,
      pos = 0,
      results = [],
      index = arr.indexOf(elem),
      lastIndex = arr.lastIndexOf(elem)
    return ((index !== -1) && (lastIndex !== -1) && (index !== lastIndex)) ? true : false
  } else {
    throw TypeError('Type should be an array only')
  }
}

export function arrayGetDuplicates(arr) {
  /* returns an array of all duplicates existing within the array */
  var toReturn
  if (arr.constructor === Array) {
    toReturn = []
    for (var i = 0; i != arr.length; i++) {
      if (arrayHasDuplicates(arr, arr[i])) {
        toReturn.push(arr[i])
      }
    }
  } else {
    throw TypeError('Type should be an array only')
  }
  return arrayUnique(toReturn)
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

export function arrayMean(arr) {
  /* Statistics based */
  /* returns mean of all numeric data in arr */
  if (arr.constructor === Array)
    return (arraySum(arr) / arr.length)
  else
    throw TypeError('Type should be an array only')
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

export function arraySum(arr) {
  /* returns sum of all numbers in arr */
  if (arr.constructor === Array)
    return arr.reduce(function(a, b) { return a + b }, 0)
  else
    throw TypeError('Type should be an array only')
}

export function arrayProduct(arr) {
  /* returns product of all numbers in array */
  if (arr.constructor === Array)
    return arr.reduce(function(a, b) { return a * b })
  else
    throw TypeError('Type should be an array only')
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
