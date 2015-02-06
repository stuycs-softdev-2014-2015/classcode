var c = document.getElementById("c");
var ctx = c.getContext("2d");

var clicked = function(e) {
		e.preventDefault();
		ctx.beginPath();
		ctx.arc(e.offsetX,e.offsetY,15,0,2*Math.PI);
		ctx.fillStyle="#ff0000";
		ctx.fill();
		ctx.stroke();
};


c.addEventListener("click",clicked);
