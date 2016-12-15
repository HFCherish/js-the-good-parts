Object.prototype.method = function(methodName, func) {
	// cannot use this.prototype[methodName], because 
	if(this[methodName] === undefined) {
		this[methodName] = func;
	}
};

var testObj = {
	initialMethod: function() {
		console.log('this is the initialMethod');
	}
};
testObj.method('expandedMethod', function() {
	console.log('this is the expandedMethod');
});
testObj.expandedMethodDirectly = function() {
	console.log('this is the expandedMethodDirectly');
}

testObj.initialMethod();
testObj.expandedMethod();
testObj.expandedMethodDirectly();

