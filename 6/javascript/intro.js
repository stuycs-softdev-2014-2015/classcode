

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

}

var addItem = function(text) {
		var list = document.getElementsByTagName('ol')[0];
		var newitem = document.createElement('li');
		newitem.innerHTML=text;
		list.appendChild(newitem);
}
