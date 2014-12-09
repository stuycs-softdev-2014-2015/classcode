
var log = function(d){
		console.log(d);
};

var go = function() {
		/*
		$.get("/getstuff",function(d) {
				console.log("getstuff got:"+d);
		});
		 */
		/*
		$.get("/getstuff",log);
		$.get("/getslow",log);
		$.get("/getfast",log);
		 */

		$.get("/getslow",function(d) {
				log(d);
				$.get("/getfast",function(d){
						log(d);
						$.get("/getstuff",log);
				});
		});
};

var h;
$(document).ready(function() {
		h = document.getElementById('header');
		h.addEventListener('click',go);
});
