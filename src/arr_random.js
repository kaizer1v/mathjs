export function arrRandomElem(arr) {
  /* Randomly choose an element from Array */
  if (arr && arr.constructor === Array) {
    if (arr.length <= 1) return arr
    return arr[Math.floor(Math.random() * arr.length)]
  }
}

export function arrayGenerateRandom(len, min, max, unique, inclusive) {
  /* Creates an array of random integers between the range specified */
  min = (min) ? Math.ceil(min) : 1
  len = (len) ? len : 10
  max = (max) ? Math.floor(max) : 100
  unique = (unique) ? unique : false
  inclusive = (inclusive) ? inclusive : false
  var inc_int = (inclusive === true) ? 1 : 0
  var toReturn = [],
      _cache = {},
      i = 0
  if(min >= max) {
    var temp = min
    min = max
    max = temp
  }
  if (unique === true) {
    for (; i < len; i++) {
      var randomInt = Math.floor(Math.random() * (max - min + inc_int) + min)
      if (_cache['key_' + randomInt] === undefined) {
        _cache['key_' + randomInt] = randomInt
        toReturn.push(randomInt)
      } else {
        i--
      }
    }
  } else {
    for (; i < len; i++) {
      toReturn.push(Math.floor(Math.random() * (max - min + inc_int) + min))
    }
  }
  return toReturn
}

export function arrayShuffle(arr) {
  /* This uses the fischer-yates algorithm */
  /* Shuffles the array randomly and returns the shuffled array */
  if (arr && arr.constructor !== Array) throw TypeError('Type should be an array only')
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
}
