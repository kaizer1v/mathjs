export function arrayUnion() {
  /* returns union along with duplicates of arrays passed in the parameters */
  if ((arguments && arguments.length == 1) || !arguments[1]) return arguments[0]
  if (arguments && arguments.length === 0) throw Error('You need to pass atleast 1 argument')
  var tempArr = (arguments[0].constructor === Array) ? arguments[0] : [arguments[0]],
    i, j
  for (i = 1; i != arguments.length; i++) {
    // var s = (arguments[i].constructor === Array) ? arguments[i] : [arguments[i]];
    for (j = 0; j != arguments[i].length; j++) {
      tempArr.push(arguments[i][j])
    }
    if (arguments[i + 1]) arrayUnion(tempArr, arguments[i + 1])
    return tempArr
  }
}
