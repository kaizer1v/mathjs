# MathJs
------

- [Official Website](http://kaizer1v.github.io/mathjs/)
- [Source Code](https://github.com/kaizer1v/mathjs)

MathJs is a small javascript library for performing mundane tasks repeatedly
in a easy way. A few of the things that this library is capable of are operations like, 
`round`ing a decimal upto 2 decimal places, or trying to find the `difference` between
two arrays.

Read on to find out more features about this library.

## Download

You can download this library as an npm module by running the following command

```sh
npm install simplemathjs
```

Once downloaded, you can include in your html file like so

```html
<script type="text/javascript" src="node_modules/dist/math.min.js"></script>
```

That's it, you can now use this library by referring to the `MJ` variable
within your javascript

```javascript
MJ.round(3.14159265, 2)
// 3.14

MJ.arrayDiff([1, 2, 3, 4], [1, 4, 2])
// [3]
```

There functionalities are segrated by primarily three sections

1. Array Functionalities
2. Numeric Functionalities
3. String Functionalities

## Array Functionalities

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

### arrayIntersection

Given two sets of arrays, returns the set of unique elements which are present in
both

```javascript
MJ.arrayIntersection([1, 2, 3, 2], [1, 5, 2, 1])
// [1, 2]
```

### arrayDiff

Given two set of arrays, returns the set of elements present in the left, but not
in the right.

```javascript
MJ.arrayDiff([1, 2, 3, 4], [1, 4, 2])
// [3]
```

### arrayUnion

Given a set of arrays as arguments, returns a single array containing all the elements
present in every argument, including duplicates.

*NOTE: the arguments for the function always need to be an array*

```javascript
MJ.arrayUnion([1], [], [2])
// [1, 2]
```

### arrayMean

Given an array of numbers, computes the mean and returns it.

```javascript
MJ.arrayMean([1, 2, 3, 100, 101, 202])
// 68.16666666666667
```


## Numeric Functionalities

List of Functions that you can operate on Numbers

### round

Given a `long` type number, you can round it off to how many ever
decimal places you want to

```javascript
MJ.round(3.14159265, 3)
// 3.141
```

### factorial

Returns the factorial for a number

```javascript
MJ.factorial(5)
// 120
```

### factors

Get the prime factors for a number

```javascript
MJ.factors(10)
// [1, 10, 2, 5]
```

### isPrime

Checks whether a given number is prime or not

```javascript
MJ.isPrime(5)
// true
```

### remainder

Returns the remainder when a numerator is divided by a denominator

```javascript
MJ.remainder(10, 4)
// 2
```

### power

Returns the exponent value of a number.

```javascript
MJ.power(2, 5)
// 32

// you can also directly get the `square` or the `cube`
MJ.square(2)
// 4

MJ.cube(2)
// 8
```


## String Functionalities

List of Functions that you can operate on Strings

### titleCase

Convert a string to titlecase.

```javascript
MJ.titleCase(' abC dEf')
// Abc Def
```


