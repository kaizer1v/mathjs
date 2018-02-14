// const arr = require('./array.js')
import {arrayFlatten} from './array.js'
import {arrayUnique} from './array.js'

var flat = arrayFlatten([1, [3, 52, [5], [1, 6, 7], 1]])
console.log(flat)

var uniq = arrayUnique([1, 4, 2, 6, 9, 7, 2, 4, 5, 8, 7, 5, 9])
console.log(uniq)
