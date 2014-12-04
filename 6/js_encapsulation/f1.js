
/*
var base = 100;

var f = function() {
		console.log(base);
};
 */

var base = "something in the global scope";
var x = 12345;
var func2 = function() {
		console.log("a function in global namespace");
};

var f1 = {
		x : "this is something declared in f1",
		f : function() {
				console.log(base);
				console.log(x); // x in the global name space
				console.log(f1.x); // x in the f1 object},
				console.log(this.x); // beter way- x in the f1 object}
		},
		f2 : func2
};


var makeincrementer = function() {
		var i = 0;
		return function(x) {
				i = i + 1;
				return i;
		};
};

var makeAdder = function(n){
		return function(x){
				return x+n;
		};
};

var add3=makeAdder(3);
var add5=makeAdder(5);


var makeCounter = function() {
		var i = 0;
		var get = function() {
				return i;
		};

		return {
				x : 'some arbitrary value',
				fx : function() { return this.x;},
				get : get, 
				inc : function() { i=i+1;},
				dec : function() { i=i-1;},
				set : function(x) { i = x;}
		};
};
