export function factorial(n) {
  if (n.constructor === Number && !n.hasOwnProperty('factorial')) {
    if (n <= 1) return 1
    if (!(n in factorial))
      factorial[n] = n * factorial(n - 1)
    return factorial[n]
  } else throw TypeErorr('Type has to be a number only')
}
