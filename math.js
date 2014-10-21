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

	Array.prototype.isDuplicate = function(n) {
		var len = this.length,
				pos = 0,
				results = [],
				index = this.indexOf(n),
				lastIndex = this.lastIndexOf(n)
		;
		return ( (index !== -1) && (lastIndex !== -1) && (index !== lastIndex) ) ? true : false;
	}


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


	/*
	Array.prototype.restrict = function(arr) {
		var currArr = this
		;
		
	}
	*/

	/* To check whether a function is array like */
	function isArrayLike(obj) {
		return (obj &&
			typeof obj === "object" &&
			isFinite(obj.length) &&
			obj.length >= 0 &&
			obj.length == Math.floor(o.length) &&
			o.length < Math.pow(2, 32)
		)
		? true
		: false
		;
	}


	/* =============================
	 * Object Arrays
	 * =============================
	 */



	/* =============================
	 * Functions
	 * =============================
	 */
	/* Compute Square root of a number */
	const tolerance = 0.001;
	const minArgs = 2;

	(function(){
	"use strict";

	function sqrt(x, guess) {
		guess = typeof guess !== "undefined" ? guess : 1
		
		z = (x / guess)
		m = average(z, guess)
		
		return (goodEnough(m, x)) ? m : sqrt(x, m)
	}

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
			v = x;
		else if(x < 0)
			v = -1*(x)
		else if(x == 0)
			v = 1
		
		return v;
	}



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

	console.log( sum(10, 15, 5) )


	function add(a, b) {
		return (+a + +b)
	}

	// console.log(sqrt(100))
	})();