import {arrayUnique} from './arr_unique'

export function arrayIntersection(a, b) {
  /* returns an intersection between all arrays */
  var t
  if (b.length > a.length) t = b, b = a, a = t
  return arrayUnique(a.filter(function(e) {
    return b.indexOf(e) > -1
  }))
}
