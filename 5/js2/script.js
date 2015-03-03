
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
//console.log(topmath);

var result = scores.map(function(item){return item.math;})
				.map(function(item){return parseInt(item)})
				.filter(function(item){return !isNaN(item);});

avg = Math.floor(result.reduce(function(a,b){return a+b;})/result.length);
//console.log(result);
//console.log(avg);

/*
var r = _.filter(_.map(_.pluck(scores,"eng"),
											 function(item){return parseInt(item);}),
								 function(item){return !isNaN(item);});
 */
var r = _.chain(scores)
				.filter(function(x){return parseInt(x.num)>800;})
				.pluck("eng")
				.map(function(x){return parseInt(x);})
				.filter(function(x){return !isNaN(x);})
				.value();

console.log(r);


var add2 = function(a,b){
		return a+b;
};

var add3 = function(a,b,c){
		return a+b+c;
};


var cmap = _.curryRight(_.map,2);
var cfilter = _.curryRight(_.filter,2);

var convert = _.compose(cfilter(function(x){return !isNaN(x);}),
												cmap(function(x){return parseInt(x);}),
												cmap(function(x){return x.math;}));



var printargs = function(){
		console.log(arguments);
};


var mnts = [20,30,33,40,50,40,20,70,50,10,45];


var dlist = _.zip(mnts,
									mnts.slice(1));

dlist = _.take(dlist,dlist.length-1);
var diffs = _.map(dlist,function(item){
		return Math.abs(item[1]-item[0]);
});

var bigdiffs = _.filter(diffs,function(n){return n>=30;});

var l = [];
for (var i = 0 ; i < 20; i++){
		l.push(Math.floor(Math.random()*100));
};
console.log(l);

var qsort = function(l){
		if (l.length <= 1)
				return l;
		var pivot = l[0];
		l = l.slice(1);
		var lower = _.filter(l,function(item){return item<=pivot;});
		var upper = _.filter(l,function(item){return item>pivot;});
		return qsort(lower).concat(pivot).concat(qsort(upper));
}

var l2 = qsort(l);
console.log(l2);
