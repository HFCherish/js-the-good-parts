var closureObj = (function () {
	var privateVar = 'I\' m privateVar';
	// cannot access public var here, because obj attribute must be accessed through obj extraction expression)
	// console.log('access publicVar in private part: ' + publicVar);
	console.log('access privateVar in private part: ' + privateVar);

	return {
		publicVar: 'I\' m publicVar',
		publicMethod: function() {
			console.log('access private in public part: ' + privateVar);
			console.log('access public in public part: ' + this.publicVar);
		}
	}
}());

closureObj.publicMethod();
// cannot access private var
console.log('cannot access private var: ' + closureObj.privateVar);


var closureObj1 = (function () {
	var privateVar = 'I\' m privateVar';
	var publicObj = {
		publicVar: 'I\' m publicVar',
		publicMethod: function() {
			console.log('access private in public part: ' + privateVar);
			console.log('access public in public part: ' + this.publicVar);
		}
	};
	// cannot access public var here, because it's not defined yet
	console.log('access publicVar in private part: ' + publicObj.publicVar);
	console.log('access privateVar in private part: ' + privateVar);

	return publicObj;
}());
closureObj1.publicMethod();

