

console.log("HELLO");

var log = function(d) {
		console.log(d);
};

var go = function() {

		/*
		$.get("/getstuff",function(d){
				console.log(d);
		});

		console.log("Before");
		$.get("/getslow",log);
		console.log("between");
		$.get("/getfast",log);
		console.log("After the get");
		$.get("/getstuff",log);

		 */

		$.get("/getslow",function(d) {
				log(d);
				$.get("/getfast",function(d){
						log(d);
						$.get("/getstuff",log);
				});
		});
};
