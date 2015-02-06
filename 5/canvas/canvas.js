var c = document.getElementById("c");
var ctx = c.getContext("2d");

ctx.fillStyle="#00ff00";
ctx.fillRect(20,20,70,100);

ctx.strokeStyle="#0000ff";
ctx.strokeRect(20,20,70,100);

ctx.beginPath();
ctx.strokeStyle="#00ff00";
ctx.moveTo(300,300);
ctx.lineTo(350,350);
ctx.lineTo(300,0);
ctx.closePath();
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.arc(100,100,50,Math.PI/4,Math.PI);
ctx.fillStyle="#ff0000";
ctx.fill();
ctx.fillStyle="#ffff00";

ctx.font = "30px arial";
ctx.fillText("Hello World",100,100);
ctx.stroke();
