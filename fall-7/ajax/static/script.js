
var log = function(d) {
		console.log(d);
};

var go = function() {

		$.get("/getslow",function(d){
				log(d);
				$.get("/getstuff",function(d){
						log(d);
						$.get("/getfast",log);
				});
		});
		console.log("back");
};

var result;
var params = function() {
		$.getJSON("/upcase",{data:"a lowercase string"},function(d){
				console.log(d);
				result = d;
		});

};

console.log("HELLO");


