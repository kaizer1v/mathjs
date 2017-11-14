// reverse string
function test(fn, param, expected) {
  var result = fn(param);
  var condition = ((param.constructor === Array) && expected.constructor === Array) ? _arraysEqual(result, expected) : result === expected;
  if(condition) {
    console.log("Passed for", param, "as expected returned", result);
  } else {
    console.error("Failed for", param, "expected result is", expected, "instead returned", result);
  }

  function _arraysEqual(arr1, arr2) {
    if(arr1.length !== arr2.length) return false;
    for(var i = arr1.length; i--;) {
      if(arr1[i] !== arr2[i]) return false;
    }
    return true;
  }
}

function test2(result, expected) {
  var condition = (result.constructor === Array && expected.constructor === Array) ? _arraysEqual(result, expected) : result === expected;
  if(condition) {
    console.log("Passed.");
  } else {
    console.error("Failed.");
  }

  function _arraysEqual(arr1, arr2) {
    if(arr1.length !== arr2.length) return false;
    for(var i = arr1.length; i--;) {
      if(arr1[i] !== arr2[i]) return false;
    }
    return true;
  }
}


console.log('-------------------', 'isPrime');
// is prime
test(MJ.isPrime, 1, true)
test(MJ.isPrime, 0, false)
test(MJ.isPrime, -1, true)
test(MJ.isPrime, 13, true)
test(MJ.isPrime, 1951241521, false)
test(MJ.isPrime, "19512415213", true)
test(MJ.isPrime, ["1951241", 5213], false)

console.log('-------------------', 'arrayFlatten');
// arrayFlatten
test(MJ.arrayFlatten, [1, [2, 3, [4, 5], [6]], [7, 8], 9], [1, 2, 3, 4, 5, 6, 7, 8, 9])
test(MJ.arrayFlatten, [[[1]]], [1])
test(MJ.arrayFlatten, [[[]]], [])
// test(MJ.arrayFlatten, {}, false)  // should throw type error


console.log('-------------------', 'arrayUnique');
// arrayUnique
test(MJ.arrayUnique, [undefined, undefined], [undefined])
test(MJ.arrayUnique, ['a', '1'], ['a', '1'])
test(MJ.arrayUnique, ['a', '1', 1, false, 0, true, true], ['a', '1', 1, false, 0, true])
test(MJ.arrayUnique, [], [])
// test(MJ.arrayUnique, {}, false)   // should throw type error


console.log('-------------------', 'arrayEqual');
// arrayEqual
test2(MJ.arrayEqual([], []), true)
test2(MJ.arrayEqual([1, '1'], ['1', 1]), false)
test2(MJ.arrayEqual([1, '1'], [1, '1']), true)
test2(MJ.arrayEqual(['1'], [1]), false)


console.log('-------------------', 'arrayDiff');
// arrayDiff
test2(MJ.arrayDiff([], []), [])
test2(MJ.arrayDiff([1, 2], [2, 1]), [])
test2(MJ.arrayDiff([1, 2, 3], [2, 1]), [3])
test2(MJ.arrayDiff([false, true], ['a', 'b']), [false, true])
