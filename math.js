/* =============================
 * FUNCTION on Numbers
 *	This works with variables whose typeof == "number"
 * =============================
 */
 
/* An alternate way of writing the factorial function written right below */
// Object.defineProperty(Number.prototype, "factorial", {
	// enumerable: false,
	// value: function() {
		// if(this <= 1) return 1;
		// return this * (this - 1).factorial()
	// }
// });

/* returns factorials of the number. You can use it like so:
 * var x = 5; console.log(x.factorial())
 */
Number.prototype.factorial = function() {
	if(this <= 1) return 1;
	return this * (this - 1).factorial();
}

/* returns all factors of the number */
Number.prototype.factors = function() {
	var that = this;
	function abc() {
		return that+1;
	}
	return abc()
}

/* returns true if is prime, else false */
Number.prototype.isPrime = function() {
	
}

Number.prototype.primeFactors = function() {

}

Number.prototype.sqrt = function(guess) {
	var guess = typeof guess !== "undefined" ? guess : 1,
			z = (this / guess),
			m = average(z, guess)
			tolerance = 0.0001
	;
	return (goodEnough(m, this)) ? m : this.sqrt(m)

	function square(x) {
		return x*x;
	}
	function improve(guess, x) {
		return average(guess, (x / guess))
	}
	function average(x, y) {
		return ((x + y) / 2)
	}
	function goodEnough(guess, x) {
		return (abs(square(guess) - x) < tolerance) ? true : false
	}
	function abs(x) {
		if(x > 0)
			var v = x;
		else if(x < 0)
			var v = -1*(x)
		else if(x == 0)
			var v = 1
		
		return v;
	}
}

/*
	Best way to get sum of array elements
	
	[1, 5, 6, 2].reduce(function(a, b) { return a+b; }, 0)
*/
		
	Array.prototype.getPrimes = function() {
		var results = []
		;
		
	}
	/* =============================
	 * Numberical Functions
	 *	This works with arrays containing only numbers
	 * =============================
	 */
	Array.prototype.sum = function() {
		return this.reduce(function(a, b) { return a+b; }, 0);
	}

	Array.prototype.product = function() {
		return this.reduce(function(a, b) { return a*b; });
	}

	Array.prototype.max = function() {
		return this.reduce(function(a, b) { return (a > b) ? a : b; });
	}

	Array.prototype.min = function() {
		return this.reduce(function(a, b) { return (a < b) ? a : b; });
	}
	
	/* [a, b, c].pow() = ((a^b)^c) and so on. */
	Array.prototype.pow = function() {
		return this.reduce(function(a, b) { return Math.pow(a, b); });
	}

	/* =============================
	 * Set Theory
	 *	this works with arrays containing strings as well as numbers
	 * =============================
	 */
	Array.prototype.sortAsc = function() {
		this.sort(function(a, b) {
			return a-b;
		})
		return this;
	}

	Array.prototype.sortDesc = function() {
		this.sort(function(a, b) {
			return b-a;
		})
		return this;
	}

	
	/* add a parameter to check whether it is existing more than once i.e. whether it has duplicates */
	Array.prototype.hasDuplicates = function(n) {
		var len = this.length,
				pos = 0,
				results = [],
				index = this.indexOf(n),
				lastIndex = this.lastIndexOf(n)
		;
		return ( (index !== -1) && (lastIndex !== -1) && (index !== lastIndex) ) ? true : false;
	}


	/* returns an array of all duplicates existing within the array */
	Array.prototype.duplicates = function() {
		var results = [],
				temp = {},
				count = 1
		;
		for(var i = 0, l = this.length, arr = this; i != l; i++) {
			if(!arr[i]) continue;
			if(!temp.hasOwnProperty(arr[i]) && typeof arr[i] !== "function") {
				temp[arr[i]] = count;
			} else {
				results.push(arr[i])
			}
		}
		return results.uniques().sortAsc();
	}


	/* returns all unique elements in the array i.e. that doesn't exist more than once. */
	Array.prototype.uniques = function() {
		var temp = {},
				results = []
		;
		for(var i = 0, l = this.length; i != l; i++) {
			if(temp.hasOwnProperty(this[i])) {
				continue;
			}
			temp[this[i]] = 1;
			results.push(this[i]);
		}
		return results.sortAsc();
	}

	/* returns all types of objects containing in the array, along with its respective counts */
	// need to complete
	Array.prototype.getTypes = function() {
		var results = {};
		return this.map(function(x) { return typeof x; });
	}

	/* returns union along with duplicates of arrays passed in the parameters */
	Array.prototype.union = function() {
		var currArr = this
		;
		for(i = 0; i != arguments.length; i++) {
			if(Object.prototype.toString.call(arguments[i]) == "[object Array]") {
				for(j = 0; j != arguments[i].length; j++) {
					if(arguments[i][j] === undefined) continue;
					currArr.push(arguments[i][j]);
				}
			}
		}
		return currArr;
	}


	/* Removes Duplicates from arrays passed in parameters */
	Array.prototype.merge = function() {
		var currArr = this
		;
		for(i = 0; i != arguments.length; i++) {
			if(Object.prototype.toString.call(arguments[i]) == "[object Array]") {
				for(j = 0; j != arguments[i].length; j++) {
					if(arguments[i][j] === undefined) continue;
					currArr.push(arguments[i][j]);
				}
			}
		}
		return currArr.uniques();
	}


	/* a - b = returns elements that exist a but not in b. */
	Array.prototype.substract = function(arr) {
		var currArr = this,
				results
		;
		if(arguments.length == 1 && Object.prototype.toString.call(arr) == "[object Array]") {
			if(currArr.length >= arr.length) {
				var biggerArr = currArr, smallerArr = arr;
			} else {
				var smallerArr = currArr, biggerArr = arr;
			}

			for(var i = 0; i != biggerArr.length; i++) {
				for(var j = 0; j != smallerArr.length; j++) {
					if(smallerArr[j] === biggerArr[i]) {
						delete biggerArr[i];
					}
				}
			}
		}
		return biggerArr;
	}

	
	/* Takes a multi-dimensional array as argument and flattens it to a single dimensional array */
	function flattenArray(arr) {
		return arr.reduce(function(acc, x) {
			return acc.concat(Array.isArray(x) ? flattenArray(x) : x);
		}, []);
	}
	
	
	// Array.prototype.getSubArrays = function() {
		// var results = [];
		// for(var i = 0; i != this.length; i++) {
			// if(isArrayLike(this[i])) {
				// results.push(this[i])
			// }
		// }
		
	// }
	
	
	/*
	Array.prototype.restrict = function(arr) {
		var currArr = this
		;
		
	}
	*/

	/* To check whether a function is array like */
	/* But instead, you can actually use Array.isArray() inbuilt function */
	function isArrayLike(obj) {
		return (obj &&
			typeof obj === "object" &&
			isFinite(obj.length) &&
			obj.length >= 0 &&
			obj.length == Math.floor(obj.length) &&
			obj.length < Math.pow(2, 32)
		)
		? true
		: false
		;
	}


	/* =============================
	 * Object Arrays
	 * =============================
	 */
	Array.prototype.filterObjects = function(key, value) {
		return this.filter(function(x) { return x[key] == value; })
	}



	/* =============================
	 * Functions
	 * =============================
	 */
	/* Compute Square root of a number */
	(function() {
	"use strict";

		function sum2() {
			// convert arguments into an array
			var args = Array.prototype.slice.call(arguments)
			var s = 0;
			
			if(args.length >= minArgs) {
				args.forEach(function(entry, index) {
					s += +args[index]
				})
			}
			else
				s = +args
			
			return s;
		}

		function sum() {
			for(var i = 0; i <= arguments.length; i++) {
				console.log(typeof arguments[i])
			}
		}

		function add(a, b) {
			return (+a + +b)
		}

	// console.log(sqrt(100))
	})();
	
	
	/* =============================
	 * Matrix Functions
	 * =============================
	 */