
var doStuff = function() {
		console.log("HELLO");
		myevent = setTimeout(doStuff,3000);
};

var myevent;

//myevent = setInterval(doStuff,3000);
//myevent = setTimeout(doStuff,3000);

var stopTimer = function(e){
		window.clearInterval(e);
};

var mouseX, mouseY;

var flip = function(e){
		var thluffy = document.getElementById("thluffy");
		if (mouseX < 200) {
				thluffy.src = "thluffy-right.png";
		} else {
				thluffy.src = "thluffy-left.png";
		}
}

myevent = setInterval(flip,100);
window.addEventListener('mousemove',function(e){
		mouseX = e.pageX;
		mouseY = e.pageY;
});
