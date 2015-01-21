Number.prototype.sqrt = function(guess) {
	var guess = typeof guess !== "undefined" ? guess : 1,
	z = (this / guess),
	m = average(z, guess)
	;
	const tolerance = 0.0001;

	return (goodEnough(m, this)) ? m : this.sqrt(m);

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



/* ============================================= New Version */
var MJ = (function() {

	var instance;

	function init() {

		/* =======================
		 * NUMBER FUNCTIONS
		 * =======================
		 */
		/* returns factorials of the number. You can use it like so: */
		function _factorial(n) {
			if(n.constructor === Number && !n.hasOwnProperty("factorial")) {
				if(n <= 1) return 1;
				return n * _factorial(n - 1);
			} else throw TypeErorr("Type has to be a number only");
		}

		function _square(n) {
			if(n.constructor === Number && !n.hasOwnProperty("square")) return n*n;
			else throw TypeErorr("Type has to be a number only");
		}

		function _absolute(n) {
			if(n.constructor === Number && !n.hasOwnProperty("square")) {
				if(n > 0) var v = n;
				else if(n < 0) var v = -1*(n);
				else if(n == 0) var n = 1;
				return v;
			} else throw TypeErorr("Type has to be a number only");
		}


		/* =======================
		 * ARRAY FUNCTIONS
		 * =======================
		 */

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

		/* returns true of "elem" is present more than once in "arr", if not returns false */
		function _arrayHasDuplicates(arr, elem) {
			if(arr.constructor === Array) {
				var len = arr.length,
						pos = 0,
						results = [],
						index = arr.indexOf(elem),
						lastIndex = arr.lastIndexOf(elem)
					;
					return ((index !== -1) && (lastIndex !== -1) && (index !== lastIndex)) ? true : false;
			} else {
				throw TypeError("Type should be an array only");
			}
		}

		/* returns an array of all duplicates existing within the array */
		function _arrayGetDuplicates(arr) {
			if(arr.constructor === Array) {
				var toReturn = [];
				for(var i = 0; i != arr.length; i++) {
					if(_arrayHasDuplicates(arr, arr[i])) {
						toReturn.push(arr[i]);
					}
				}
			} else {
				throw TypeError("Type should be an array only");
			}
			return _arrayUnique(toReturn);
		}

		/* Sorts an array in a descending form */
		function _arraySort(arr, ascDesc) {
			var ascDesc = ascDesc || true;
			if(arr.constructor === Array) {
				if(ascDesc) {						// ascending
					arr.sort(function(a, b) {
						if(a.constructor === String && b.constructor === String && a > b) return 1;
						if(a.constructor === String && b.constructor === String && a < b) return -1;
						if(a.constructor === Number && b.constructor === Number && a > b) return 1;
						if(a.constructor === Number && b.constructor === Number && a < b) return -1;
					});
				} else {								// descending
					arr.sort(function(a, b) {
						if(a.constructor === String && b.constructor === String && a > b) return -1;
						if(a.constructor === String && b.constructor === String && a < b) return 1;
						if(a.constructor === Number && b.constructor === Number && a > b) return -1;
						if(a.constructor === Number && b.constructor === Number && a < b) return 1;
					});
				}
			} else {
				throw TypeError("Type should be an array only");
			}
			return arr;
		}

		function _arraySum(arr) {
			if(arr.constructor === Array)
				return arr.reduce(function(a, b) { return a + b; }, 0);
			else
				throw TypeError("Type should be an array only");
		}

		function _arrayProduct(arr) {
			if(arr.constructor === Array)
				return arr.reduce(function(a, b) { return a * b; });
			else
				throw TypeError("Type should be an array only");
		}

		function _arrayMax(arr) {
			if(arr.constructor === Array)
				return arr.reduce(function(a, b) { return (a > b) ? a : b; });
			else
				throw TypeError("Type should be an array only");
		}

		function _arrayMin(arr) {
			if(arr.constructor === Array)
				return arr.reduce(function(a, b) { return (a < b) ? a : b; });
			else
				throw TypeError("Type should be an array only");
		}

		/* [a, b, c].pow() = ((a^b)^c) and so on. */
		function _arrayPow(arr) {
			if(arr.constructor === Array)
				return arr.reduce(function(a, b) { return Math.pow(a, b); });
			else
				throw TypeError("Type should be an array only");
		}


		/* =============================
		* Object Arrays
		* =============================
		*/
		/* This function takes an Object "obj", a key and a value as parameters and filters out if that key-value pair exists */
		function _filterObject(obj, key, value) {
			if(obj.constructor === Object) {
				return obj.filter(function(x) { return x[key] == value; })
			} else throw TypeError("Type should be an object only");
		}

		function _getObjectVal(obj, key) {
			if(obj.constructor === Object && obj[key]) {
				return obj.filter(function(x) { return x[key]; })
			} else throw TypeError("Type should be an object only");
		}



		/* Return all public functions */
		return {
			// Number Functions
			factorial: _factorial,
			square: _square,

			// Array Set theory functions
			arrayFlatten: _arrayFlatten,
			arrayMerge: _arrayMerge,
			arrayUnique: _arrayUnique,
			arraySubstract: _arraySubstract,
			arrayUnion: _arrayUnion,
			arrayHasDuplicates: _arrayHasDuplicates,
			arrayGetDuplicates: _arrayGetDuplicates,
			arraySort: _arraySort,

			// Array Math functionalities
			arrayMax: _arrayMax,
			arrayMin: _arrayMin,
			arraySum: _arraySum,
			arrayProd: _arrayProduct,
			arrayPow: _arrayPow,

			// Object functionalities
			objFilter: _filterObject,
			objGetVal: _getObjectVal
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
