
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
}

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

