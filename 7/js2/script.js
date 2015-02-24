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
console.log(avg);

var goodmath = filter(scores,function(item){
		return parseInt(item.math)>avg;
});

console.log(goodmath);
