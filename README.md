# MathJs

MathJs is a small javascript library for performing set theory and basic mathematical functions on numbers and arrays.

### Usage

Simply include the mathjs.js file into your html
```html
<script type="text/javascript" src="mathjs.js"></script>
<script type="text/javascript">
  MJ.isPrime(0);    // false
</script>
```

## Arrays

List of Functions that you can operate on Arrays

### arrayFlatten

Given an array of arrays, it will flatten hierarchies of arrays and return a single array.

```javascript
MJ.arrayFlatten([1, 2, [3, 4, [5, 6], [7]], [8, 9]])
// [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

### arrayUnique

Given a list of items in an array, it will returns an array of elements containing all
the elements occurring only once, i.e. removes duplicates.

```javascript
MJ.arrayUnique([1, 1, 'b', false, false, true, 'b', undefined, undefined])
// [1, "b", false, true, undefined]
```

### arrayEqual

Given two set of arrays, returns true if both arrays are exactly the same, else
returns false.

```javascript
MJ.arrayEqual([1, 123, false], ["1", 123, false])
// false, where as
MJ.arrayEqual([1, 123, false], [1, 123, false])
// will return true
```

### arrayDiff

Given two set of arrays, returns the set of elements present in the left, but not
in the right.

```javascript
MJ.arrayDiff([1, 2, 3, 4], [1, 4, 2])
// left - right i.e. 3
MJ.arrayDiff([1, 423, 64], [1, 64, 23, 521, 423])
// [] since there are no elements on the left which are NOT present on the right
```

### arrayUnion

Given a set of arrays as arguments, returns a single array containing all the elements
present in every argument, including duplicates.

*NOTE: the arguments for the function always need to be an array*

```javascript
MJ.arrayUnion([1, 5, 5], [2, [2, false], 'abc'], [true, ['another', 5.15], undefined, null])
// [1, 5, 5, 2, [2, false], "abc", true, ['another', 5.15], undefined, null]
MJ.arrayUnion([1], [], [2])
// [1, 2]
```


### arrayHasDuplicates

Given a single array and an element to check duplicate for, the function returns `true` or `false`
based on whether there exists more than one occurance of that element within the array.

```javascript
MJ.arrayHasDuplicates([1, 4, 53, 4, 1], 1)
// true since 1 occurs more than once
MJ.arrayHasDuplicates([1, 4, 53, 4, 1], 53)
// false, since 53 does not occur more than once
MJ.arrayHasDuplicates([1, 4, 53, 4, 1], 21)
// false, since 21 does not occur more than once
```

### arrayGetDuplicates

Given an array, this function will return all the elements which occur more than once
within the array i.e. duplicates

```javascript
MJ.arrayGetDuplicates([1, 1, 1])
// [1]
MJ.arrayGetDuplicates([1, 1, 1, 51, 51, 2])
// [1, 51]
```


### arrayMean

Given an array of numbers, 

```javascript
MJ.arrayMean([1, 2, 3, 100, 101, 202])
// 68.16666666666667

MJ.arrayMean([false, 'abc'])
// NaN
```
