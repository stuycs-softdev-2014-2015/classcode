
var mouseX, mouseY;

var doStuff = function(e) {
		var thluffy = document.getElementById("thluffy");
		if (mouseX < 300) {
				thluffy.src = "thluffy-right.png";
		}else {
				thluffy.src = "thluffy-left.png";
}
		myevent = setTimeout(doStuff,100);
}

window.addEventListener('mousemove', function(e) {
		mouseX = e.pageX;
		mouseY = e.pageY;
});

var myevent;
//myevent = setInterval(doStuff,1000);
myevent = setTimeout(doStuff,100);
