/* To check whether a function is array like */
/* But instead, you can actually use Array.isArray() inbuilt function */
function isArrayLike(obj) {
	return (obj &&
		typeof obj === "object" &&
		isFinite(obj.length) &&
		obj.length >= 0 &&
		obj.length == Math.floor(obj.length) &&
		obj.length < Math.pow(2, 32)
	) ? true : false;
}


/* ============================================= New Version */
var MJ = (function() {

	var instance;

	function init() {

		/* =======================
		* MASTER FUNCTIONS
		* =======================
		*/
		function _extendClass(fromClass) {
			if(typeof fromClass == "function" || (fromClass.constructor && fromClass.constructor === Function)) {
				var Obj = Function;
				Obj.prototype = new fromClass();
				return Obj;
			}
		}

		// This function helps you bind any event to a DOM element
		var _on = function(obj, event, fn) {
			return obj.addEventListener(event, fn);
		};




		/* =======================
		* NUMBER FUNCTIONS
		* =======================
		*/
		/* returns factorials of the number. You can use it like so: */
		function _isPrime(n) {
			var factors = _factors(n);
			if((factors.length == 2) && (factors[1] === n)) return true;
			else return false;
		}

		function _factorial(n) {
			if(n.constructor === Number && !n.hasOwnProperty("factorial")) {
				if(n <= 1) return 1;
				if(!(n in _factorial))
					_factorial[n] = n * _factorial(n - 1);
				return _factorial[n];
			} else throw TypeErorr("Type has to be a number only");
		}

		function _square(n) {
			if(n.constructor === Number && !n.hasOwnProperty("square")) return n*n;
			else throw TypeErorr("Type has to be a number only");
		}

		function _absolute(n) {
			if(n.constructor === Number && !n.hasOwnProperty("square")) {
				var v;
				if(n > 0) v = n;
				else if(n < 0) v = -1*(n);
				else if(n === 0) n = 1;
				return v;
			} else throw TypeErorr("Type has to be a number only");
		}

		function _remainder(n, d) {
			return n - (d * Math.floor(n/d));
		}

		/* produces the factors of a given number */
		function _factors(n) {
			var factors = [1, n];
			for(var i = 2; i <= Math.floor(n/i); i++) {
				if(n % i === 0)
					if(i === n/i) {
						factors.push(i);
					}
					else
						factors.push(i, n/i);
			}
			return factors;
		}

		var _sqrt = (function() {
			// private
			var tolerance = 0.0001;

			function improve(guess, x) {
				return average(guess, (x / guess));
			}
			function average(x, y) {
				return ((x + y) / 2);
			}
			function goodEnough(guess, x) {
				return (abs(square(guess) - x) < tolerance) ? true : false;
			}
			function square(x) {
				return x*x;
			}
			function abs(x) {
				var v;
				if(x > 0)
					v = x;
				else if(x < 0)
					v = -1*(x);
				else if(x === 0)
					v = 1;
					return v;
			}
			function isPerfectSq(n) {
				var i;
				for(i = 1; i <= Math.floor(n/i); i++) {
					if(n % i === 0)
						if(i === n/i)
							return true;
				}
				return false;
			}

			// public
			return function sqrt(n, guess) {
				guess = typeof guess !== "undefined" ? guess : 1;
				var z = (n / guess),
						m = average(z, guess)
				;
				return (goodEnough(m, n)) ? m : sqrt(n, m);
			};
		})();

		/* =======================
		* ARRAY FUNCTIONS
		* =======================
		*/

		/* Shuffles the array randomly and returns the shuffled array */
		/* This uses the fischer-yates algorithm */
		function _arrayShuffle(arr) {
			if(arr && arr.constructor === Array) {
				var toReturn = [], len = arr.length, i;
				if(len <= 1) return arr;
				// algo starts here.
				while(len) {
					i = Math.floor(Math.random() * len--);
					toReturn.push(arr.splice(i, 1)[0]);
				}
				return toReturn;
			} else throw TypeError("Type should be an array only");
		}

		/* Randomly choose an element from Array */
		function _arrRandomElem(arr) {
			if(arr && arr.constructor === Array) {
				if(arr.length <= 1) return arr;
				return arr[Math.floor(Math.random() * arr.length)];
			}
		}

		/* Creates an array of random integers between the range specified */
		function _arrayRandom(len, min, max, unique) {
			var toReturn = [], tempObj = {}, i = 0;
			len = (len) ? len : 10;
			min = (min) ? min : 1;
			max = (max) ? max : 100;
			unique = (unique) ? unique : false;

			if(unique === true) {
				for(; i < len; i++) {
					var randomInt = Math.floor(Math.random() * ((max - min) + min));
					if(tempObj['key_'+ randomInt] === undefined) {
						tempObj['key_'+ randomInt] = randomInt;
						toReturn.push(randomInt);
					} else {
						i--;
					}
				}
			} else {
				for(; i < len; i++) {
					toReturn.push(Math.floor(Math.random() * ((max - min) + min)));
				}
			}

			return toReturn;
		}

		/* Takes a multi-dimensional array as argument and flattens it to a single dimensional array */
		function _arrayFlatten(arr) {
			if(arr && arr.constructor === Array) {
				return arr.reduce(function(acc, x) {
					return acc.concat(x && x.constructor === Array ? _arrayFlatten(x) : x);
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
			var biggerArr, smallerArr;
			if((arr1 && arr2) && (arr1.constructor === Array && arr2.constructor === Array)) {
				if(arr1 >= arr2) biggerArr = arr1, smallerArr = arr2;
				else biggerArr = arr2, smallerArr = arr1;

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
			var currArr;
			if(arguments && arguments.length == 1) {
				return arguments[0];
			} else if(arguments && arguments.length > 1) {
				currArr = arguments[0];
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
			if(arguments && arguments.length === 0) throw Error("You need to pass atleast 1 argument");
			var tempArr = arguments[0], i, j;
			for(i = 1; i != arguments.length; i++) {
				for(j = 0; j != arguments[i].length; j++) {
					tempArr.push(arguments[i][j]);
				}
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
			var toReturn;
			if(arr.constructor === Array) {
				toReturn = [];
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
			ascDesc = ascDesc || true;
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

		/* Statistics based */
		/* returns mean of all numeric data in arr */
		function _arrayMean(arr) {
			if(arr.constructor === Array)
				return (_arraySum(arr) / arr.length);
			else
				throw TypeError("Type should be an array only");
		}

		/* return the mode of numeric arr */
		function _arrayMode(arr) {
			if(arr.constructor === Array) {
				var arrObj;
				for(var i = 0; i < arr.length; i++) {

				}
			}
			else
				throw TypeError("Type should be an array only");
		}

		/* returns sum of all numbers in arr */
		function _arraySum(arr) {
			if(arr.constructor === Array)
				return arr.reduce(function(a, b) { return a + b; }, 0);
			else
				throw TypeError("Type should be an array only");
		}

		/* returns product of all numbers in array */
		function _arrayProduct(arr) {
			if(arr.constructor === Array)
				return arr.reduce(function(a, b) { return a * b; });
			else
				throw TypeError("Type should be an array only");
		}

		/* returns max element out of all numbers in arr */
		function _arrayMax(arr) {
			if(arr.constructor === Array)
				return arr.reduce(function(a, b) { return (a > b) ? a : b; });
			else
				throw TypeError("Type should be an array only");
		}

		/* returns min element out of all numbers in arr */
		function _arrayMin(arr) {
			if(arr.constructor === Array)
				return arr.reduce(function(a, b) { return (a < b) ? a : b; });
			else
				throw TypeError("Type should be an array only");
		}

		/* returns cumulative power of all numbers in arr like: */
		/* _arrayPow([a, b, c]) = ((a^b)^c) and so on. */
		function _arrayPow(arr) {
			if(arr.constructor === Array)
				return arr.reduce(function(a, b) { return Math.pow(a, b); });
			else
				throw TypeError("Type should be an array only");
		}


		//		            n!
		//		nCr = ---------------
		//				    (r!)(n - r)!
		function _combinationsUnique (arr) {
			var index = 0, pairs = [], arr = _arrayUnique(arr);
			while(index < arr.length) {
				for(var i = 0; (i < arr.length && i != index); i++) {
					pairs.push([arr[i], arr[index]]);
				}
				index++;
			}
			return pairs;
		}

		/* =============================
		* Object Arrays
		* =============================
		*/
		/* This function takes an Object "obj", a key and a value as parameters and filters out if that key-value pair exists */
		function _filterObject(obj, key, value) {
			if(obj.constructor === Object) {
				return obj.filter(function(x) { return x[key] == value; });
			} else throw TypeError("Type should be an object only");
		}

		/* returns value of the 'key' in the 'obj' if exists */
		function _getObjectVal(obj, key) {
			if(obj.constructor === Object && obj[key]) {
				return obj.filter(function(x) { return x[key]; });
			} else throw TypeError("Type should be an object only");
		}

		/* Return all public functions */
		return {
			// Number Functions
			factorial: _factorial,
			square: _square,
			factors: _factors,
			// primeFactors: _primeFactors,
			isPrime: _isPrime,
			sqrt: _sqrt,

			// Array Set theory functions
			arrayFlatten: _arrayFlatten,
			arrayMerge: _arrayMerge,
			arrayUnique: _arrayUnique,
			arraySubstract: _arraySubstract,
			arrayUnion: _arrayUnion,
			arrayHasDuplicates: _arrayHasDuplicates,
			arrayGetDuplicates: _arrayGetDuplicates,
			arraySort: _arraySort,
			arrayRandom: _arrayRandom,

			// Array Math functionalities
			arrayMax: _arrayMax,
			arrayMin: _arrayMin,
			arraySum: _arraySum,
			arrayProd: _arrayProduct,
			arrayPow: _arrayPow,
			arrayMean: _arrayMean,

			// Permutations & Combinations
			arrayCombinationsUnique: _combinationsUnique,

			// Object functionalities
			objFilter: _filterObject,
			objGetVal: _getObjectVal
		};
	}

	return {
		// creating a new singleton instance.
		getInstance: function() {
			instance = init();
			return instance;
		}
	};

})();

var mj = MJ.getInstance();
