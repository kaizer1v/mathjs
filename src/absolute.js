export function absolute(n) {
  if (n.constructor !== Number) throw TypeErorr('Type has to be a number only')
  if (n === 0) return 0
  var v
  if (n > 0) v = n
  else if (n < 0) v = -1 * (n)
  else if (n === 0) n = 1
  return v
}
