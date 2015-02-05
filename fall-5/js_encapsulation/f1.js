
var base = 10;

var otherfunc = function() {
		console.log('the other function f1');
};

var f1 = {
		base : 30,
		f : function() {
				console.log(base);
				this.base = this.base + 2;
				console.log(f1.base);
				console.log(this.base);
		},
		f2 : otherfunc
		
};


var makeincrementer = function(){
		var i = 0;
		return function() {
				i = i + 1;
				return i;
		};
};

var makeAdder = function(n){
		return function(x) {
				return n+x;
		};
};


var makeCounter = function() {
		var i = 0;
		var get =  function() { return i;};
		return { x : "some value",
						 get : get,
						 inc : function() {i=i+1;},
						 dec : function() { i = i - 1;},
						 set : function(x) {i = x;},
						 fx : function() { console.log(this.x);} // this to get to the local
 					 };
};


var myLib = (function() {
		var i = 0;
		var get =  function() { return i;};
		return { x : "some value",
						 get : get,
						 inc : function() {i=i+1;},
						 dec : function() { i = i - 1;},
						 set : function(x) {i = x;},
						 fx : function() { console.log(this.x);} // this to get to the local
 					 };
})();


