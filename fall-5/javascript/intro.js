
console.log("HELLO WORLD");

var i = 10;
var s = "this is a a string";

console.log(i);

/*
function f(x) {
		var i = x;
		i=i+1;
		console.log(i);
}
 */

var f = function(x) {
		return x + 1;
};


var fact = function(n){
		var p = 1;
		for (; n>1;n--)
				p=p*n;
		return p;
};

var o = {'name':'joe',
				 age:15,
				 n:[1,2,3,4,5],
				 f : function(x) {
						 return x+10;
				 }
				};

var removeItem = function(num){
		var list = document.getElementsByTagName('li');
		list[num].remove();

}

var addItem = function(text) {
		var list = document.getElementsByTagName('ol')[0];
		var newitem = document.createElement('li');
		newitem.innerHTML=text;
		list.appendChild(newitem);
}


var red = function() {
		var listitems = document.getElementsByTagName('li');
		for ( var i = 0 ; i < listitems.length ; i++) {
				listitems[i].classList.add('red');
		}
}

var stripe = function() {
		var listitems = document.getElementsByTagName('li');
		for ( var i = 0 ; i < listitems.length ; i++) {
				if (i%2==0) {
						listitems[i].classList.add('red');
				} else {
						listitems[i].classList.add('blue');
				}
		}
}

var liCallback = function(e) {
		console.log(e);
		console.log(this);
		this.classList.add('red');
}

var buttonCallback = function(e) {
		console.log(e);
		console.log(this);
}

var thelist = document.getElementById("thelist");
var litems = thelist.children;
for (var i = 0; i < litems.length; i++){
		litems[i].addEventListener('click',liCallback);
		litems[i].addEventListener('mouseover',function (e) {
				this.classList.toggle('green');
		});
		litems[i].addEventListener('mouseout',function (e) {
				this.classList.toggle('blue');
		});
}




b.addEventListener('click',buttonCallback);

