var assert = require('assert')
var chai = require('chai')
var MJ = require('../dist/math.js')

/* Assert functions !!
  fail: [Function: fail],
  AssertionError: [Function: AssertionError],
  ok: [Circular],
  equal: [Function: equal],
  notEqual: [Function: notEqual],
  deepEqual: [Function: deepEqual],
  deepStrictEqual: [Function: deepStrictEqual],
  notDeepEqual: [Function: notDeepEqual],
  notDeepStrictEqual: [Function: notDeepStrictEqual],
  strictEqual: [Function: strictEqual],
  notStrictEqual: [Function: notStrictEqual],
  throws: [Function: throws],
  doesNotThrow: [Function: doesNotThrow],
  ifError: [Function: ifError] }

  console.log(chai)
*/

describe('titleCase', function() {
  it('should convert to title case for any caseType', function() {
    assert.equal(MJ.titleCase('aBcd efGH'), 'Abcd Efgh')
    assert.equal(MJ.titleCase('abcd'), 'Abcd')
    assert.equal(MJ.titleCase('ABCD'), 'Abcd')
    assert.equal(MJ.titleCase(' aBcD '), 'Abcd')
  })
  it('should strip spaces and convert to titlecases', function() {
    assert.equal(MJ.titleCase('    Abc   dEF'), 'Abc Def')
    assert.equal(MJ.titleCase(''), '')
    assert.equal(MJ.titleCase(' aBcD '), 'Abcd')
  })
})

describe('remainder', function() {
  it('should return the remainder when a numerator is divided by a denominator', function() {
    chai.expect(MJ.remainder(10, 5)).to.deep.equal(0)
    chai.expect(MJ.remainder(0, 0)).to.deep.equal(NaN)
    chai.expect(MJ.remainder(10, -4)).to.deep.equal(-2)
  })
})

describe('exponent', function() {
  it('should return the value for x^y', function() {
    chai.expect(MJ.power(2, 2)).to.deep.equal(4)
    chai.expect(MJ.power(2, 0)).to.deep.equal(1)
    // chai.expect(MJ.power(16, -2)).to.deep.equal(4)
  })
})

describe('round', function() {
  it('should a rounded decimal number based on the number of decimals you want', function() {
    chai.expect(MJ.round(3.14159265359)).to.deep.equal(3.14)
    chai.expect(MJ.round(3.14159265359, 2)).to.deep.equal(3.14)
    chai.expect(MJ.round(3.14159265359, 6)).to.deep.equal(3.141593)
    chai.expect(MJ.round(3.14159265359, 0)).to.deep.equal(3.14)
    chai.expect(MJ.round(3.14159265359, 1)).to.deep.equal(3.1)
    chai.expect(MJ.round(31415, 2)).to.deep.equal(31415)
  })
})

describe('arrayUnique', function() {
  it('should return an array of unique elements in it', function() {
    assert.deepEqual(MJ.arrayUnique([]), [])
    chai.expect(MJ.arrayUnique([1])).to.deep.equal([1])
    chai.expect(MJ.arrayUnique([1, 1, 1, 1])).to.deep.equal([1])
    chai.expect(MJ.arrayUnique([undefined, null, null, true, -1, 'unique', false, true]))
      .to.have.members([undefined, null, true, false, 'unique', -1])
  })
})

describe('absolute', function() {
  it('should return the absolute of a number', function() {
    assert.deepEqual(MJ.absolute(0), 0)
    assert.deepEqual(MJ.absolute(-1), 1)
    assert.deepEqual(MJ.absolute(1), 1)
  })
})

describe('factors', function() {
  it('should return posiive prime factors of a number', function() {
    chai.expect(MJ.factors(1)).to.deep.equal([1])
    chai.expect(MJ.factors(0)).to.deep.equal([1, 0])
    chai.expect(MJ.factors(-10)).to.have.members([1, 2, 5, 10])
    chai.expect(MJ.factors(100)).to.have.members([1, 100, 2, 50, 4, 25, 5, 20, 10])
  })
})

describe('isPrime', function() {
  it('should return whether a number is positive prime or not', function() {
    assert.deepEqual(MJ.isPrime(0), false)
    assert.deepEqual(MJ.isPrime(1), false)
    assert.deepEqual(MJ.isPrime(-11), true)
    assert.deepEqual(MJ.isPrime(13), true)
    assert.deepEqual(MJ.isPrime(25), false)
  })
})

describe('arrayFlatten', function() {
  it('should return a flat (single-dimension) array of elements', function() {
    chai.expect(MJ.arrayFlatten([1, [2, 3, [4, 5], [6]], [7, 8], 9])).to.have.members([1, 2, 3, 4, 5, 6, 7, 8, 9])
    chai.expect(MJ.arrayFlatten([[[1], 1]])).to.deep.equal([1, 1])
    chai.expect(MJ.arrayFlatten([[[]]])).to.deep.equal([])
  })
})

describe('arrayDiff', function() {
  it('should return an array of elements which are present in the left but not in right', function() {
    chai.expect(MJ.arrayDiff([], [])).to.deep.equal([])
    chai.expect(MJ.arrayDiff([1, 2], [2, 1])).to.deep.equal([])
    chai.expect(MJ.arrayDiff([1, 2, 3], [2, 1])).to.deep.equal([3])
    chai.expect(MJ.arrayDiff([false, true], ['a', 'b'])).to.have.members([false, true])    
  })
})

describe('arrayIntersection', function() {
  it('should return an array of elements which are present in the left but not in right', function() {
    chai.expect(MJ.arrayIntersection([], [])).to.deep.equal([])
    chai.expect(MJ.arrayIntersection([1, 2], [2, 1])).to.have.members([1, 2])
    chai.expect(MJ.arrayIntersection([1, 2, 3], [2, 1])).to.have.members([1, 2])
    chai.expect(MJ.arrayIntersection([1, 2, 3, 2], [2, 1, 1])).to.have.members([1, 2])
    chai.expect(MJ.arrayIntersection([false, true], ['a', 'b'])).to.deep.equal([])   
  })
})

describe('arrayUnion', function() {
  it('should return a union of all the arrays passed as arguments in a single array', function() {
    chai.expect(MJ.arrayUnion([1], [2, [3]])).to.deep.equal([1, 2, [3]])
    chai.expect(MJ.arrayUnion([], [2, 3])).to.deep.equal([2, 3])
    chai.expect(MJ.arrayUnion([], [])).to.deep.equal([])
    chai.expect(MJ.arrayUnion([2, 2, 2], [1, 1, 1])).to.deep.equal([2, 2, 2, 1, 1, 1])
  })
})

describe('arraySort', function() {
  it('should return a sorted array', function() {
    chai.expect(MJ.arraySort([1, 1, 1])).to.deep.equal([1, 1, 1])
    chai.expect(MJ.arraySort([1111, 11, 11111, 1, 111])).to.deep.equal([1, 11, 111, 1111, 11111])
    chai.expect(MJ.arraySort([1111, 11, 11111, 1, 111], false)).to.deep.equal([11111, 1111, 111, 11, 1])
    chai.expect(MJ.arraySort([false, 'a', true, 1, 0])).to.have.members([false, 'a', true, 0, 1])
    chai.expect(MJ.arraySort([])).to.deep.equal([])
    chai.expect(MJ.arraySort(['z', 'g', 'b', 'm'])).to.have.members(['b', 'g', 'm', 'z'])   // sorts strings also
    // chai.expect(MJ.arraySort([undefined, NaN, false, 1, true, 0])).to.have.members([0, NaN, false, 1, true, undefined])
  })
})

describe('arrayGenerateRandom', function() {
  it('should return an array of random integers between a range', function() {
    var arr_within_range = MJ.arrayGenerateRandom(5, 300, 350)
    var arr_unique_inclusive = MJ.arrayGenerateRandom(5, 1, 5, true, true)
    chai.expect(arr_within_range).to.have.lengthOf(5)
    chai.expect(arr_unique_inclusive).to.have.lengthOf(5)
    chai.expect(arr_unique_inclusive).to.have.members([1, 2, 3, 4, 5])
  })
})

/*
describe('arrayDuplicates', function() {
  it('should return ...', function() {
    
  })
})

describe('arrayDuplicates', function() {
  it('should return ...', function() {
    
  })
})

describe('arrayDuplicates', function() {
  it('should return ...', function() {
    
  })
})
*/
