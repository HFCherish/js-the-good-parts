var Quo = function(input) {
	this.status = input;
};

Quo.prototype.get_status = function() {
	console.log(this.status);
};

var AnotherQuo = function(input) {
	this.status = input;
};

var quoObj = new Quo('petrina');
var anotherQuoObj = new AnotherQuo('another petrina');

quoObj.get_status();
console.log('quoObj.prototype:' + quoObj.prototype);
console.log('Quo.prototype:' + Quo.prototype.name);
// anotherQuoObj.get_status();