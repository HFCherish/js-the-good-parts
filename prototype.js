console.log('object contains __proto__ (including function): all. This is the real extend link. __proto__ is deprecated, should use Object.getPrototypeOf() instead');
console.log('constructor functions use new to create object. eg. new Object() create a new object');
console.log('the build in constructor functions:');
console.log(typeof Object.__proto__);	//function. means Object is a function, links to Function.prototype.
console.log(typeof Function.__proto__);	//function
console.log(typeof Number.__proto__);	//function
console.log(typeof String.__proto__);	//function
console.log(typeof Boolean.__proto__);	//function
console.log(typeof Array.__proto__);	//function
console.log(typeof Date.__proto__);		//function
console.log(typeof Error.__proto__);	//function
console.log(typeof RegExp.__proto__);	//function
console.log('self defined constructor functions: ');
var funcVar = function() {
	console.log('I\'m a function');
};
function funcVar1() {
	console.log('I\'m a function');
}
console.log(typeof funcVar1.__proto__);	//function
console.log(typeof funcVar.__proto__);	//function

console.log('---------------------------------------------------------');

console.log('function contains prototype (mainly used to designated the constructor function）');
console.log('all function obejct are created using Object constructor, except for Function, which uses Function constructor')
console.log('the build in constructor functions:');
console.log(typeof Function.prototype);	//function. means that the Function object use the Function constructor (when new Function(), it calls new Function())
console.log(typeof Number.prototype);	//object. means that the Number use the Object constructor (when new Number(), it calls new Object first)
console.log(typeof Object.prototype);	//object
console.log(typeof String.prototype);	//object
console.log(typeof Boolean.prototype);	//object
console.log(typeof Array.prototype);	//object
console.log(typeof Date.prototype);		//object
console.log(typeof Error.prototype);	//object
console.log(typeof RegExp.prototype);	//object
console.log('self defined constructor functions: ');
console.log(typeof funcVar1.prototype);	//object
console.log(typeof funcVar.prototype);	//object

console.log('---------------------------------------------------------');

console.log('object instanceof constructor: return true if constructor.prototype is in object __proto__ links, that is object is created using constructor at some time');
console.log(Number instanceof Function)	//true. 
console.log('all function.__proto__ is bind to the Function.prototype. Function.prototype is an empty function');
console.log(Number.__proto__ === Function.prototype);	//true. This is why same explaination as 'typeof Number.__proto__', means that Number is a function
console.log(Object.__proto__ === Function.prototype);	//true
console.log('self defined function:');
console.log(funcVar.__proto__ === Function.prototype);

console.log('---------------------------------------------------------');
console.log('the __proto__ of object is bind to the corresponding constructor')
var objVar = {objProp: 'value'};
var stringVar = 'value';
var numVar = 1;
var booleanVar = true;
var arrayVar = ['value', 1];
console.log(objVar.__proto__ === Object.prototype);
console.log(stringVar.__proto__ === String.prototype);
console.log(numVar.__proto__ === Number.prototype);
console.log(booleanVar.__proto__ === Boolean.prototype);
console.log(arrayVar.__proto__ === Array.prototype);

console.log('---------------------------------------------------------');
console.log('a function is an object too.');
console.log(Function.prototype.__proto__ === Object.prototype);	//true.
console.log('an object.prototype is null. Object.prototype is the beginning of the whole extends link');
console.log(Object.prototype.__proto__ === null);




