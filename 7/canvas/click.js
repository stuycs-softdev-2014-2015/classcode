
var c = document.getElementById("c");
var b = document.getElementById("b");
var ctx = c.getContext("2d");

var clicked = function(e){
		e.preventDefault();
		//ctx.beginPath();
		ctx.arc(e.offsetX, e.offsetY,
						15,0,2*Math.PI);
		ctx.fillStyle = "#ff0000";
		ctx.fill();
		ctx.stroke();
		
};

var clear = function(e) {
		e.preventDefault();
		ctx.beginPath();
		ctx.fillStyle="#ffffff";
		ctx.fillRect(0,0,600,600);
};
c.addEventListener("click",clicked)
b.addEventListener("click",clear)
