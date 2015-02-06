
 
var c = document.getElementById("c");
var ctx = c.getContext("2d");

ctx.fillStyle="#0000ff";
ctx.fillRect(20,20,70,100);

ctx.strokeStyle="#ff0000";
ctx.strokeRect(20,20,70,100);

ctx.beginPath();
ctx.strokeStyle="#0000ff";
ctx.moveTo(200,200);
ctx.lineTo(300,300);
ctx.lineTo(200,350);
ctx.closePath();
ctx.stroke();
ctx.fill();
ctx.beginPath();
ctx.arc(400,100,50,Math.PI,2*Math.PI);
ctx.stroke();
ctx.fill();
ctx.fillStyle="#ffff00";

ctx.font = "30px arial";
ctx.fillText("Hello World",200,250);
ctx.stroke();
