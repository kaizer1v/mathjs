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


console.log('-------------------', 'arrayUnion');
// arrayUnion
test2(MJ.arrayUnion([1], [2, [3]]), [1, 2, [3]])
test2(MJ.arrayUnion([], [2, 3]), [2, 3])
test2(MJ.arrayUnion([], []), [])
test2(MJ.arrayUnion([2, 2, 2], [1, 1, 1]), [2, 2, 2, 1, 1, 1])


console.log('-------------------', 'arrayHasDuplicates');
// arrayHasDuplicates
test2(MJ.arrayHasDuplicates([1, 2, 3, 3], 3), true)
test2(MJ.arrayHasDuplicates([1, 2, 3, 3], ''), false)
test2(MJ.arrayHasDuplicates([1], 1), false)
test2(MJ.arrayHasDuplicates([0, 1, true, false, undefined, undefined], undefined), true)


console.log('-------------------', 'arrayGetDuplicates');
test2(MJ.arrayGetDuplicates([1, 1, 1]), [1])
test2(MJ.arrayGetDuplicates([1, 1, 1, 2, 2]), [1, 2])
test2(MJ.arrayGetDuplicates([]), [])
test2(MJ.arrayGetDuplicates([0, 1, 2]), [])


console.log('-------------------', 'arraySort');
test2(MJ.arraySort([1, 1, 1]), [1, 1, 1])
test2(MJ.arraySort([false, 'a', true, 1, 0]), [false, 'a', true, 0, 1])
test2(MJ.arraySort([]), [])
test2(MJ.arraySort(['z', 'g', 'b', 'm']), ['b', 'g', 'm', 'z'])   // sorts strings also
test2(MJ.arraySort([undefined, NaN, false, 1, true, 0]), [0, NaN, false, 1, true, undefined])


console.log('-------------------', 'arraySort');
test(MJ.arrayMean, [1, 2, 3, 100, 101, 202], 68.16666666666667)
test(MJ.arrayMean, [1.412, 2.53, 3*5.01, 100/142], 4.919056338028168)
test(MJ.arrayMean, [false, 'abc'], NaN)
