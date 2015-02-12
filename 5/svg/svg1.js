

//var c1 = document.createElement("circle");
var c1 = document.createElementNS("http://www.w3.org/2000/svg",
																	"circle");
c1.setAttribute('cx',300);
c1.setAttribute('cy',100);
c1.setAttribute('r',50);
c1.setAttribute('fill',"#00ff25");



var s = document.getElementById("s");
s.appendChild(c1);
