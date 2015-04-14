console.log("HELLO");

var thediv = d3.select("#thediv");
var listitems = d3.selectAll("li");

//d3.select("#thediv").style("font-size","30px");
/*
thediv.style("font-size","30px");
thediv.style("border-style",'solid');
thediv.style("border-width",2);
thediv.classed("green",true);
thediv.text("New text");
 */

thediv.style("font-size","30px")
		.style("border-style",'solid')
		.style('border-width',2)
		.classed("green",true)
		.text("New text");

thediv.append("p")
		.style('font-size','20px')
		.style('color','red')
		.text("new paragraph");

var makeUL = function(){
		var list = d3.select("ul");
		for (var i=0;i<3;i++){
				list.append("li").text("HELLO");
		}
};

var makeUL2 = function(){
		var list = d3.select("ul");
		for (var i=0;i<3;i++){
				list.append("li");
		}

		var items = d3.select("ul").selectAll("li");
		items.text(function(d,i) {
				return "Item number: "+i;
		})
				.style('font-size',function(d,i){
						return 20+10*i+"px";
				});
};

var d = [30,15,60,80];

makeUL2();
