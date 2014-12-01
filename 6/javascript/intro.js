

console.log("HELLO");

var x,y;
var i = "hello";
console.log(i);

function f1(x) {
		var i=20;
		return i+x;
}


var f2 = function (x) {
		return x+10;
};

var o = { name : 'joe',
					"age" : 15,
					items : ["item1","item2",3,4],
					stuff : { a: 1,
										b: 2
									},
					func : function(x) {
							return x+1;
					}
				};

var fact = function(n){
		var prod = 1;
		for (; n > 1 ; n--){
				prod = prod * n;
		}
		return prod;
};


var removeItem = function(num){
		var list = document.getElementsByTagName('li');
		list[num].remove();

};

var addItem = function(text) {
		var list = document.getElementsByTagName('ol')[0];
		var newitem = document.createElement('li');
		newitem.innerHTML=text;
		list.appendChild(newitem);
};

var red = function() {
		var items = document.getElementsByTagName("li");
		for (var i = 0; i < items.length; i++){
				items[i].classList.toggle('red');
		}
};

var stripe = function() {
		var items = document.getElementsByTagName("li");
		for (var i = 0; i < items.length; i++){
				if (i%2==0){
						items[i].classList.add('red');
				} else {
						items[i].classList.add('blue');
				}
		}
};

var buttonCallback = function(e){
		console.log(e);
		console.log(this);
};
var button = document.getElementById("b");
button.addEventListener('click',buttonCallback);

var redCallback = function(){
		console.log(this);
		this.classList.add('red');
}

var thelist = document.getElementById("thelist");
var litems = thelist.children;
for (var i = 0 ; i < litems.length ; i++ ){
		litems[i].addEventListener('click',redCallback);
		litems[i].addEventListener('mouseover',function(e){
				this.classList.toggle('green');
		});
}

