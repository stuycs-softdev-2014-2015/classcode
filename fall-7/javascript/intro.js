
console.log("HELLO");

var i="hello";
var j=20;

var f = function(x) {
		var j=30;
		return j+x;
};

var o = { 'name' : 'joe',
					age : 15,
					items : [10, 20, 30, 40],
					morestuff : {a : 1, b : 'hello'},
					func : function(x) {
							return x+30;
					}
				};

var fact = function(n){
		var prod=1;
		for ( ; n > 1 ; n--){
				prod = prod * n;
		}
		return prod;
};

var addItem = function(text){
		var list = document.getElementById("thelist");
		var newitem = document.createElement("li");
		newitem.innerHTML = text;
		list.appendChild(newitem);
};

var removeItem = function(n) {
		var listitems = document.getElementsByTagName('li');
		listitems[n].remove();
};

var red = function() {
		var items = document.getElementsByTagName("li");
		for(var i = 0; i < items.length; i++) {
				items[i].classList.add('red');
		}
};

var stripe = function() {
		var items = document.getElementsByTagName("li");
		for(var i = 0; i < items.length; i++) {
				if (i%2==0){
						items[i].classList.add('red');
				} else {
						items[i].classList.add('blue');
				}
		}
};

var buttonCallback = function(e) {
		console.log(e);
		console.log(this);
}

var b = document.getElementById('b');
b.addEventListener('click',buttonCallback);

var redCallback = function(e) {
		console.log(this);
		this.classList.add('red');
}

var thelist = document.getElementById("thelist");
var litems = thelist.children;
for(var i = 0; i < litems.length; i++) {
		litems[i].addEventListener('click',redCallback);
		litems[i].addEventListener('mouseover',function(e){
				console.log("in"+this);
				this.classList.toggle('green');
		});
		litems[i].addEventListener('mouseout',function(e){
				console.log("out"+this);
				this.classList.toggle('blue');
		});
}
