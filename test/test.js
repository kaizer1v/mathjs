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

*/
console.log(chai);

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

describe('arrayUnique', function() {
  it('should return an array of unique elements in it', function() {
    assert.deepEqual(MJ.arrayUnique([]), [])
    chai.expect(MJ.arrayUnique([1])).to.deep.equal([1])
    chai.expect(MJ.arrayUnique([1, 1, 1, 1])).to.deep.equal([1])
    chai.expect(MJ.arrayUnique([undefined, null, null, true, -1, 'unique', false, true]))
      .to.have.members([undefined, null, true, false, 'unique', -1])
  })
})

describe('factors', function() {
  it('find posiive prime factors of a number', function() {
    chai.expect(MJ.factors(1)).to.deep.equal([1])
    chai.expect(MJ.factors(0)).to.deep.equal([1, 0])
    chai.expect(MJ.factors(-10)).to.have.members([1, 2, 5, 10])
    chai.expect(MJ.factors(100)).to.have.members([1, 100, 2, 50, 4, 25, 5, 20, 10])
  })
})

/*
describe('isPrime', function() {
  it('1 should return true', function() {
    assert.equal(MJ.isPrime(1), true)
  })
  it('0 should return false', function() {
    assert.equal(MJ.isPrime(0), false)
  })
  it('-1 should return true', function() {
    assert.equal(MJ.isPrime(-1), true)
  })
  it('13 should return true', function() {
    assert.equal(MJ.isPrime(13), true)
  })
  it('1951241521 should return false', function() {
    assert.equal(MJ.isPrime(1951241521), false)
  })
  it('"19512415213" should return true', function() {
    assert.equal(MJ.isPrime("19512415213"), true)
  })
  // NOTE: this test case should not exist because you don't expect
  //        the user to input a different datatype
  // it('["1951241", 5213] should return false', function() {
  //   assert.equal(MJ.isPrime(["1951241", 5213]), false)
  // })
})

*/
