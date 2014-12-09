
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

console.log("HELLO");


