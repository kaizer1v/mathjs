export function mean(a, b) {
  if(
    a.constructor === Number &&
    b.constructor === Number
  ) return (a + b) / 2
  else throw TypeErorr('Type has to be a number only')
}
