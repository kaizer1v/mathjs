// reverse string
function test(fn, param, expected) {
  var result = fn(param);
  if(result === expected) {
    console.log("Passed for", param, "as expected returned", result);
  } else {
    console.error("Failed for", param, "expected result is", expected, "instead returned", result);
  }
}

// is prime
test(MJ.isPrime, 1, true)
test(MJ.isPrime, 0, false)
test(MJ.isPrime, -1, true)
test(MJ.isPrime, 13, true)
test(MJ.isPrime, 1951241521, false)
test(MJ.isPrime, "19512415213", true)
test(MJ.isPrime, ["1951241", 5213], true)
