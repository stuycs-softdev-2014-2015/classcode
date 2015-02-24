
var map = function(l,f){
		var result=[];
		for (var i = 0; i < l.length; i++){
				result.push(f(l[i]));
		};
		return result;
};

var filter = function(l,f){
		var result=[];
		for (var i = 0; i < l.length; i++){
				if ( f(l[i])){
						result.push(l[i]);
				}
		};
		return result;
};

var reduce = function(l,f,init){
		var result = init;
		for (var i = 0 ; i < l.length; i++){
				result = f(l[i],result);
		};
		return result;
};

var getMath = function(item){
		return item.math;
};
var getName = function(item){
		return item.name;
};



raw_school_data = rawscores.data;
scores = map(raw_school_data,
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


var rawmathScores = map(scores,function(item){return item.math});
rawmathScores = map(rawmathScores,function(x){return parseInt(x);});
//console.log(rawmathScores);
var mathScores = filter(rawmathScores,function(item){return !isNaN(item);});
//console.log(mathScores);
var sum = reduce(mathScores,function(a,b){return a+b;},0);

var avg = Math.floor(sum / mathScores.length);
//console.log(avg);

var topmath = filter(scores,function(item){return parseInt(item.math)>avg;});
console.log(topmath);
