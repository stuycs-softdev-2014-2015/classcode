
 
var c = document.getElementById("c");
var ctx = c.getContext("2d");

var clicked = function(e){
		e.preventDefault();
		//ctx.beginPath();
		ctx.arc(e.offsetX,e.offsetY,
						15,0,2*Math.PI);
		ctx.fillStyle="#ff0000";
		ctx.stroke();
		ctx.fill();
};

var clear = function(e){
		ctx.fillStyle = "#ffffff";
		ctx.fillRect(0,0,600,600);
		
};
c.addEventListener("click",clicked);
var b = document.getElementById("b");
b.addEventListener("click",clear);

