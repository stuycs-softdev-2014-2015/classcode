rawschools = rawdata.data;

var map = function(l,f){
		var result = [];
		for (var i=0; i < l.length ; i++){
				result.push(f(l[i]));
		};
		return result;		
};

var filter = function(l,f){
		var result = [];
		for (var i=0; i < l.length ; i++){

				if ( f(l[i]) ){
						result.push(l[i]);
				}
				
		};
		return result;		
};

var reduce = function(l,f, init){
		var result = init;
		for (var i = 0 ; i < l.length; i++){
				result = f(l[i],result);
		};
		return result;
		
}

var getMath = function(item){
		return item.math;
};
var getName = function(item){
		return item.name;
};

var square = function(x) { return x*x;};


// convert to a more usable dictionary
/*
school_scores = [];
for (var i = 0; i < rawschools.length;i++){
		var t = {code: rawschools[i][8],
						 name: rawschools[i][9],
						 num: rawschools[i][10],
						 eng: rawschools[i][11],
						 math: rawschools[i][12],
						 writing: rawschools[i][13]
						};
		school_scores.push(t);
};
 */

school_scores = map(rawschools,function(item) {
		return {
				code: item[8],
				name: item[9],
				num: item[10],
				eng: item[11],
				math: item[12],
				writing: item[13]
		};
});

var mathscores = map(school_scores,function(x){return x.math});
mathscores = map(mathscores,function(x){return parseInt(x);});
mathscores = filter(mathscores,function(x) {return !isNaN(x);});
var sum = reduce(mathscores,function(a,b){return a+b;},0);
var avg = sum / mathscores.length; 
console.log(avg);



/*
// pull out all of the math scores
math = [];
for (var i =0; i < school_scores.length;i++){
		math.push(s);
}

// pull out all of the math scores
eng = [];
for (var i =0; i < school_scores.length;i++){
		var s = parseInt(school_scores[i].eng);
		if (!isNaN(s)){
				eng.push(s);
		}
}

console.log("ENGLISH");
console.log(eng);
var sum = 0;
for (var i = 0; i < math.length;i++){
		sum = sum + math[i];
};
var avg = Math.floor(sum/math.length);
console.log(avg);

goodmath = [];
for (var i =0; i < school_scores.length;i++){
		var m = parseInt(school_scores[i].math);
		if (m > avg){
				goodmath.push(school_scores[i]);
		};
};

console.log(goodmath);

*/
