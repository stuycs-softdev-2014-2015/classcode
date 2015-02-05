

console.log("HELLO");

var log = function(d) {
		console.log(d);
};

var go = function() {

		/*
		 $.get("/getstuff",function(d){
				console.log(d);
		});
		 */
		
		console.log("Before");
		$.get("/getslow",log);
		console.log("between");
		$.get("/getstuff",log);
		console.log("After the get");
		$.get("/getfast",log);
		console.log("Done");
		
		/*

		$.get("/getslow",function(d) {
				log(d);
				$.get("/getfast",function(d){
						log(d);
						$.get("/getstuff",log);
				});
		});

		 */

};


var result;
var params = function() {
		$.getJSON("/upcase",{data:"some string to turn uppercase"},function(d){
				console.log(d);
				result=d;
		});
};
