
var cClicked = function(e) {
    e.preventDefault();
    console.log("cClicked");
    var c = this.getAttribute('fill');
    if (c=='red') {
				this.setAttribute('fill','green');
    } else if (c=='green'){
				this.setAttribute('fill','blue');
    } else {
				this.remove();
    }
};

var addCircle = function(s,x,y,r,c) {
    var c1 = document.createElementNS("http://www.w3.org/2000/svg","circle");
    c1.setAttribute('cx',x);
    c1.setAttribute('cy',y);
    c1.setAttribute('r',r);
    c1.setAttribute('fill',c);
    c1.addEventListener('click',cClicked);
    s.appendChild(c1);
    
};

var clicked = function(e) {
    e.preventDefault();
    if (e.toElement!=this) {return;}
    console.log("clicked");
    s = document.getElementById("s");
    var r = 5+30*Math.random();
    addCircle(s,e.offsetX,e.offsetY,r,'red');
};

var move = function() {
    var cs = document.getElementsByTagName("circle");
    for (var i=0;i<cs.length;i++) {
				var x = parseFloat(cs[i].getAttribute('cx'));
				var y = parseFloat(cs[i].getAttribute('cy'));
				var r = parseFloat(cs[i].getAttribute('r'));
				x = x + 2*Math.random()-1;
				y = y + 2*Math.random()-1;
				r = r + 2*Math.random()-1;
				if (r<5) {r=20;}
				cs[i].setAttribute('cx',x);
				cs[i].setAttribute('cy',y);
				cs[i].setAttribute('r',r);
    }
};

var t =0;
var go = function(e) {
    e.preventDefault();
    if (t==0){
				t = setInterval(move,100);
    } else {
				clearInterval(t);
				t=0;
    }
};

var s = document.getElementById("s");
s.addEventListener('click',clicked);
var g = document.getElementById("go");
g.addEventListener("click",go);
