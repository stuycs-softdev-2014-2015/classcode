

var doStuff = function(){
		console.log("HELLO");
		myevent = setTimeout(doStuff,3000);
};

var myevent;
var mouseX,mouseY;

window.addEventListener("mousemove",function(e){
		// console.log(e.pageX+" "+e.pageY);
		mouseX = e.pageX;
		mouseY = e.pageY;
});

var flip = function() {
		var thluffy = document.getElementById("thluffy");
		if (mouseX < 300){
				thluffy.src = "thluffy-right.png"
		} else {
				thluffy.src = "thluffy-left.png"

		}
}

myevent = setInterval(flip,100);
//myevent = setTimeout(doStuff,3000);


