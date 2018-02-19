import './absolute'
import './sqrt'

export function square(n) {
  if (n.constructor === Number && !n.hasOwnProperty('square')) return n * n
  else throw TypeErorr('Type has to be a number only')
}

export function cube(n) {
  if (n.constructor === Number && !n.hasOwnProperty('cube')) return n * n * n
  else throw TypeErorr('Type has to be a number only')
}

export function power(n, _of) {
  if(n.constructor !== Number && _of.constructor !== Number) throw TypeError('Type has to be a number only')
  if(_of  <  0) return sqrt(n, absolute(_of))
  if(_of === 0) return 1
  if(_of === 1) return n
  if(_of === 2) return square(n)
  if(_of === 3) return cube(n)
  var i = 1, prod = []
  for(; i <= _of; i++) { prod.push(n) }
  return prod.reduce(function(a, b) { return a * b })
}
