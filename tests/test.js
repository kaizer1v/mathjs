var assert = require('assert');
var MJ = require('../math.one.js');

describe('testing titleCase', function() {
  it('`aBcd efGH` when given `Abcd Efgh`', function() {
    assert.equal(MJ.titleCase('aBcd efGH'), 'Abcd Efgh');
  })
  it('`Abcd Efgh` when given `aBcd efGH`', function() {
    assert.equal(MJ.titleCase(''), '');
  })
  it('`Abcd Efgh` when given `Abcd`', function() {
    assert.equal(MJ.titleCase('ABCD'), 'Abcd');
  })
  it('`Abcd Efgh` when given `Abcd Efgh`', function() {
    assert.equal(MJ.titleCase('abcd'), 'Abcd');
  })
  it('`Abcd Efgh` when given `Abcd`', function() {
    assert.equal(MJ.titleCase(' aBcD '), 'Abcd');
  })
})

describe('testing factors', function() {
  it('1 should return [1]', function() {
    assert.equal(MJ.factors([1]), [1])
  })
})

describe('testing isPrime', function() {
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

