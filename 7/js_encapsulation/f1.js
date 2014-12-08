
/*
var base="in f1";

var f = function() {
		console.log('in f1: '+base);
};
 */

var base = "this is in f1 in the global namespace";
var x = "x in the global namespace";
var f2 = function() {
		console.log("f2");
};

var f1 = {
		x : "something in the f1 namespace",
		f2 : f2,
		f : function() {
				console.log('this is in f in the f1 namespace');
				console.log('x is '+x);
				console.log('f1.x is '+f1.x);
				console.log('better way: '+this.x);
		}
};


var makeIncrementer = function() {
		var i = 0;
		return function() {
				i = i + 1;
				return i;
		};
};

var makeAdder = function(n){
		return function(x){
				return x+n;
		};
};

var add3 = makeAdder(3);
var add5 = makeAdder(5);

var makeCounter = function() {
		var i = 0;
		var get = function() {
				return i;
		};
		
		return {
				x : 'something in the dictionary',
				get : get,
				set : function(x) { i = x; },
				inc : function() { i = i + 1;},
				dec : function() {i = i - 1;},
				setx : function(v) { this.x = v;}
		};
};		


var myLib = (function() {
		var i = 0;
		var get = function() {
				return i;
		};
		
		return {
				x : 'something in the dictionary',
				get : get,
				set : function(x) { i = x; },
				inc : function() { i = i + 1;},
				dec : function() {i = i - 1;},
				setx : function(v) { this.x = v;}
		};
})()   ;		
