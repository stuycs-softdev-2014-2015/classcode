
var c = document.getElementById("c");
var ctx = c.getContext("2d");

ctx.fillStyle = "#ff0000";
ctx.fillRect(20,20,70,100);

ctx.strokeStyle = "#000000";
ctx.strokeRect(20,20,70,100);


ctx.beginPath();
ctx.moveTo(400,400);
ctx.lineTo(300,400);
ctx.lineTo(400,300);
ctx.lineTo(500,350);
ctx.closePath();
ctx.stroke();
ctx.fill();

ctx.beginPath();
ctx.fillStyle="#00ff00";
ctx.arc(180,120,50,Math.PI/4,Math.PI);
ctx.fill();
//ctx.closePath();
ctx.stroke();


ctx.font = "30px arial";
ctx.fillText("Hello World",20,300);

ctx.stroke();
