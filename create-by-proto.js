// can create by proto
Object.create = function(protoConstructor) {
	if(typeof protoConstructor === 'object' || typeof protoConstructor === 'function'){
		var obj = new Object();
		Object.setPrototypeOf(obj, protoConstructor);
		return obj;
	}
	throw {
		name: 'TypeError',
		message: 'the proto must be an object or function'
	};
};

var Parent = function(){prop: 'value'};
var son = Object.create(Parent);
console.log(typeof son.prototype === 'object');	//true
console.log(son.__proto__ === Parent);	//true

var InvalidParent = 'string';
son = Object.create(InvalidParent);	//will throw exception
