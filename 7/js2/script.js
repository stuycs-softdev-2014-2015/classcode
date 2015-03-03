var rawschooldata = rawscores.data;

var map = function(l,f){
		var result = [];
		for (i = 0; i < l.length; i++){
				result.push(f(l[i]));
		};
		return result;
};


var filter = function(l,f){
		var result = [];
		for (i = 0; i < l.length; i++){
				if (f(l[i])){
						result.push(l[i]);
				}
		};
		return result;
};

var reduce = function(l,f,init){
		var result = init;
		for (i = 0; i < l.length; i++){
				result = f(l[i],result);
		};
		return result;
		
};
scores = map(rawschooldata,
						 function(item){
								 return {
										 code:item[8],
										 name:item[9],
										 num:item[10],
										 eng:item[11],
										 math:item[12],
										 writing:item[13]
								 };
						 });

var rawmath = map(scores,function(item){return item.math;});
rawmath = map(rawmath,function(x){return parseInt(x);});
var mathscores = filter(rawmath,function(x){return !isNaN(x);});
var sum = reduce(mathscores,function(a,b){return a+b;},0);
var avg = Math.floor(sum/mathscores.length);
//console.log(avg);

var goodmath = filter(scores,function(item){
		return parseInt(item.math)>avg;
});

// console.log(goodmath);
var r;
/*
r = _.pluck(scores,"math");
r = _.map(r,function(x){return parseInt(x);});
r = _.filter(r,function(x){return !isNaN(x);});
 */

/*
r = _.filter(_.map(_.pluck(scores,"math"),
									 function(x){return parseInt(x);}),
						 function(x){return !isNaN(x);});
 */
/*
r = _.chain(scores)
		.filter(function(x){return parseInt(x.num)>800;})
		.pluck("math")
		.map(function(x){return parseInt(x);})
		.filter(function(x){return !isNaN(x);})
		.value();
console.log(r);
 */

var add2 = _.curry(function(a,b){
		return a+b;
});

var add3 = _.curry(function(a,b,c){
		return a+b+c;
});

/*
var add2 = function(a){
		return function(b) {
				return a+b;
		};
};
*/

var cmap = _.curryRight(_.map,2);
var cfilter = _.curryRight(_.filter,2);
var cpluck = _.curryRight(_.pluck,2);

var intify = _.compose(
		cfilter(function(x){return !isNaN(x);}),
		cmap(function(x){return parseInt(x);})
);

var convert = _.compose(
		intify,
		cpluck("math"),
		cfilter(function(x){return parseInt(x.num)>800;})

);

var printargs = function() {
		console.log(arguments);
};
