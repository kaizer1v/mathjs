var $math = function() {

function _factorial(n) {
	if(typeof n === "number") {						// check if Number already has a method called "factorial"
		if(n <= 1) return 1;
		return n * this.factorial(n - 1);
	} else {
		throw "Type has to be a number"
	}
}


function _square(n) {
	if(typeof n === "number") {
		if(n == 0) return 1;
		return n*n;
	}
}

	return {
		factorial: _factorial,
		square:    _square,
	};
}();



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
if(!this.hasOwnProperty("factorial")) {						// check if Number already has a method called "factorial"
if(this <= 1) return 1;
return this * (this - 1).factorial();
}
}

/* returns all factors of the number */
Number.prototype.factors = function() {

}

/* returns true if is prime, else false */
/* RULE: all integers that are less than the sqrt of the number - can be its factors, else not */
Number.prototype.isPrime = function() {
}

Number.prototype.primeFactors = function() {

}

Number.prototype.sqrt = function(guess) {
var guess = typeof guess !== "undefined" ? guess : 1,
z = (this / guess),
m = average(z, guess)
;
const tolerance = 0.0001;

return (goodEnough(m, this)) ? m : this.sqrt(m);

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
		var v = -1*(x);
		else if(x == 0)
			var v = 1;

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
			if(typeof a === "string" && typeof b === "string" && a < b) {
				return -1;
			}
			if(typeof a === "string" && typeof b === "string" && a > b) {
				return 1;
			}

			if(typeof a === "number" && typeof b === "number" && a < b) {
				return -1;
			}
			if(typeof a === "number" && typeof b === "number" && a > b) {
				return 1;
			}
		})
		return this;
	}

	Array.prototype.sortDesc = function() {
		this.sort(function(a, b) {
			if(typeof a === "string" && typeof b === "string" && a > b) {
				return -1;
			}
			if(typeof a === "string" && typeof b === "string" && a < b) {
				return 1;
			}

			if(typeof a === "number" && typeof b === "number" && a > b) {
				return -1;
			}
			if(typeof a === "number" && typeof b === "number" && a < b) {
				return 1;
			}
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




/* ============================================= New Version */
var MJ = (function() {

	var instance;

	function init() {

		/* Takes a multi-dimensional array as argument and flattens it to a single dimensional array */
		function _arrayFlatten(arr) {
			if(arr && arr.constructor === Array) {
				return arr.reduce(function(acc, x) {
					return acc.concat(x && x.constructor === Array ? _flattenArray(x) : x);
				}, []);
			} else {
				throw TypeError("Type should be an array only");
			}
		}


		/* returns all unique elements in the array i.e. that doesn't exist more than once. */
		function _arrayUnique(arr) {
			if(arr.constructor === Array) {
				if(arr.length == 1) return arr;
				return arr.filter(function(item, pos) {
					return arr.indexOf(item) == pos;
				});
			} else {
				throw TypeError("Type should be an array only");
			}
		}


		/* a - b = returns elements that exist a but not in b. */
		function _arraySubstract(arr1, arr2) {
			if((arr1 && arr2) && (arr1.constructor === Array && arr2.constructor === Array)) {
				if(arr1 >= arr2) {
					var biggerArr = arr1, smallerArr = arr2;
				} else {
					var biggerArr = arr2, smallerArr = arr1;
				}

				for(var i = 0; i != biggerArr.length; i++) {
					for(var j = 0; j != smallerArr.length; j++) {
						if(smallerArr[j] === biggerArr[i]) {
							delete biggerArr[i];
						}
					}
				}
				return biggerArr;
			} else {
				throw TypeError("Type should be an array only");
			}
		}


		/* Merges two arrays and removes all duplicates. */
		function _arrayMerge() {
			if(arguments && arguments.length == 1) {
				return arguments[0];
			} else if(arguments && arguments.length > 1) {
				var currArr = arguments[0];
				for(var i = 0; i != arguments.length; i++) {
					if(arguments[i].constructor === Array) {
						for(var j = 0; j != arguments[i].length; j++) {
							if(arguments[i][j] === undefined) continue;
							currArr.push(arguments[i][j]);
						}
					} else {
						throw TypeError("Type should be an array only");
					}
				}
			} else {
				throw Error("You need to pass atleast 1 argument");
			}
			return _arrayUnique(currArr);
		}

		/* returns all types of objects containing in the array */
		function _arrayElemTypes(arr) {
			if(arr.constructor === Array) {
				return arr.map(function(x) { return typeof x; });
			} else {
				throw TypeError("Type should be an array only");
			}
		}

		/* returns union along with duplicates of arrays passed in the parameters */
		function _arrayUnion() {
			if((arguments && arguments.length == 1) || !arguments[1]) return arguments[0];
			if(arguments && arguments.length == 0) throw Error("You need to pass atleast 1 argument");
			var tempArr = arguments[0];
			for(var i = 1; i != arguments.length; i++) {
				arguments[i].forEach(function(elem) {
					tempArr.push(elem);
				});
				if(arguments[i+1]) _arrayUnion(tempArr, arguments[i+1]);
				return tempArr;
			}
		}

		/* Return all public functions */
		return {
			arrayFlatten: _arrayFlatten,
			arrayMerge: _arrayMerge,
			arrayUnique: _arrayUnique,
			arraySubstract: _arraySubstract,
			arrayUnion: _arrayUnion
		}
	};

	return {
		// creating a new singleton instance.
		getInstance: function() {
			instance = init();
			return instance;
		}
	};

})();

var mj = MJ.getInstance();
