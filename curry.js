/**
curry: it turns a function with multi parameters to several single parameter function.
	it create a new function by composite a function with 
**/
Function.prototype.curry = function() {
	var slice = Array.prototype.slice;
	var args = slice.apply(arguments);
	var that = this;
	return function() {
		return that.apply(null, args.concat(slice.apply(arguments)));
	};
};

var add = function(a, b) {
	return a+b;
};

var add1 = add.curry(1);
var add10 = add1.curry(10);
console.log(add10());
