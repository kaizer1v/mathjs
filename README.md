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

// returns [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

### arrayUnique

Given a list of items in an array, it will returns an array of elements containing all
the elements occurring only once, i.e. removes duplicates.

```javascript
MJ.arrayUnique([1, 1, 'b', false, false, true, 'b', undefined, undefined])

// returns [1, "b", false, true, undefined]
```

### arrayEqual

Given two set of arrays, returns true if both arrays are exactly the same, else
returns false.

```javascript
MJ.arrayEqual([1, 123, false], ["1", 123, false])
// returns false, where as
MJ.arrayEqual([1, 123, false], [1, 123, false])
// will return true
```
