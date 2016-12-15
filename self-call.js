console.log('call outer use self call (ie. use ()):');
(function outer() {
	var ourterVar = 'I\'m outer';

	(function inner() {
		var innerVar = 'I\'m inner';
		console.log('print ourterVar in inner: ' + ourterVar);
		console.log('print innerVar in inner: ' + innerVar);
	}());

	console.log('print in outerVar in ourter: ' + ourterVar);
	// innerVar cannot be accessed here, because it's in another function
	// console.log('print in innerVar in ourter: ' + innerVar); 

}());

// can not call outer use function name because it's not accessible here
// outer();

