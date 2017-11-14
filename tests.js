// reverse string
function test(fn, param, expected) {
  var result = fn(param);
  if((param.constructor === Array) && expected.constructor === Array) {
    if(_arraysEqual(result, expected)) {
      console.log("Passed for", param, "as expected returned", result);
    } else {
      console.error("Failed for", param, "expected result is", expected, "instead returned", result);
    }
  } else {
    if(result === expected) {
      console.log("Passed for", param, "as expected returned", result);
    } else {
      console.error("Failed for", param, "expected result is", expected, "instead returned", result);
    }
  }

  function _arraysEqual(arr1, arr2) {
    if(arr1.length !== arr2.length) return false;
    for(var i = arr1.length; i--;) {
      if(arr1[i] !== arr2[i]) return false;
    }
    return true;
  }
}

// is prime
test(MJ.isPrime, 1, true)
test(MJ.isPrime, 0, false)
test(MJ.isPrime, -1, true)
test(MJ.isPrime, 13, true)
test(MJ.isPrime, 1951241521, false)
test(MJ.isPrime, "19512415213", true)
test(MJ.isPrime, ["1951241", 5213], false)


// arrayFlatten
test(MJ.arrayFlatten, [1, [2, 3, [4, 5], [6]], [7, 8], 9], [1, 2, 3, 4, 5, 6, 7, 8, 9])
test(MJ.arrayFlatten, [[[1]]], [1])
test(MJ.arrayFlatten, [[[]]], [])
