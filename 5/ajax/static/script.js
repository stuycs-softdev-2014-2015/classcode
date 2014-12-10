
var log = function(d){
		console.log(d);
};

var go = function() {
		/*
		$.get("/getstuff",function(d) {
				console.log("getstuff got:"+d);
		});
		 */
		console.log("before slow");
		$.get("/getslow",log);
		console.log("before med");
		$.get("/getstuff",log);
		console.log("before fast");
		$.get("/getfast",log);
		console.log("after fast");

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

var global_result;
var params = function() {
		$.getJSON("/upcase",{'data':'something to uppercase'},function (d){
				console.log(d);
				global_result = d;
		});
};

var h;
$(document).ready(function() {
		h = document.getElementById('header');
		h.addEventListener('click',go);
});
