//expand in Function.prototype. Basically, it just avoids writing prototype
Function.prototype.method = function(methodName, func) {
	if(this.prototype[methodName] === undefined) {
		this.prototype[methodName] = func;
	}
};

var FuncVar = function(name) {
	this.name = name;
};

var funcObj = new FuncVar('petrina');
console.log(funcObj);	//{ name: 'petrina' }

//use the expanding method we define above.
FuncVar.method('newMethod', function() {
	console.log('this is a new method for the funcVar: ' + this.name);
});
console.log(funcObj.newMethod instanceof Function);	//true
funcObj.newMethod();

//you can use prototype to add a new method, too
FuncVar.prototype.newMethod1 = function(){};
console.log(funcObj.newMethod1 instanceof Function);	//true

//you add new method to the constructor obj directly won't affect the prototype
FuncVar.newMethod2 = function(){};
console.log(funcObj.newMethod2 === undefined);	//true


