import './arr_unique'
import './arr_flatten'

function arrayMerge() {
  var _arr = []
  arguments.forEach(function(arr) {
    return _arr.concat(arr)
  })
  return arrayUnique(arrayFlatten(_arr))
}


function newArrayMerge(...arrs) {
  let _arr = []
  for()
}
