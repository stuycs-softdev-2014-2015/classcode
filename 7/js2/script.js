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
//// console..og(avg);

var goodmath = filter(scores,function(item){
		return parseInt(item.math)>avg;
});

// // console..og(goodmath);
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
// console..og(r);
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
		// console..og(arguments);
};


var mtns = [20, 30, 33, 40, 50, 40, 20, 70, 50, 10, 45];
/*
var difflist = _.zip(mtns,mtns.slice(1));
difflist = _.take(difflist,difflist.length-1);
diffs = _.map(difflist,function(item){
		return Math.abs(item[1]-item[0]);
});
bigdiffs = _.filter(diffs,function(item){return item>=30;});
 */
var difflist = _.zip(mtns,mtns.slice(1));
bigdiffs = _.chain(difflist)
		.take(difflist.length-1)
		.map(function(item){return Math.abs(item[1]-item[0]);})
		.filter(function(item){return item>=30;})
		.value();

l=[];
for (i=0;i<20;i++){
		l.push(Math.floor(Math.random()*100));
}
console.log(l);

var qsort = function(l){
		if (l.length <= 1)
				return l;
		var pivot = l[0];
		l = l.slice(1);
		/*
		var lower = _.filter(l,function(x){return x<=pivot;});
		var upper = _.filter(l,function(x){return x>pivot;});
		 */
		var p = _.partition(l,function(x){return x<=pivot});
		return qsort(p[0]).concat(pivot).concat(qsort(p[1]));
};


