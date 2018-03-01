export function swap(a, b) {
  var t = a
  a = b
  b = t
  return [a, b]
}
