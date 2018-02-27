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

describe('arrayDuplicates', function() {
  it('should return an array of all duplicate elements in a given array', function() {

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
