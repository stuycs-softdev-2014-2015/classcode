console.log("HELLO");
var thediv = d3.select("#thediv");
var ollistitems = d3.select("ol").selectAll("li");

/*
 thediv.style("border-style",'solid');
 thediv.style("border-width",2);
 thediv.style("background-color","gray");
 thediv.classed("green",true);
 thediv.style("font-size","30px");
 thediv.text("replacement text");
thediv.style("border-style",'solid')
		.style('border-width',2)
		.style('background-color',"gray")
		.style('font-size',"30px")
		.classed("green",true)
		.text("replacement text");
 */

thediv.style("border-style",'solid')
		.style({'border-width':2,
						'background-color':"gray",
						'font-size':"40px"
					 })
		.classed("green",true)
		.text("replacement text");

var p = thediv.append("p");

p.style('color','yellow').
		style('font-size',"15px")
		.text("This is new text");

var makeUL = function() {
		var list = d3.select("ul");
		for (var i=0;i<3;i++){
				list.append("li");
		}
		var items = list.selectAll('li');
		items.style("font-size",function(d,i){
				return 15+10*i+"px";
		})
				.text(function(d,i){
						return "This is item: "+i;
				});

};

		//makeUL();

var d = [20,10,60,80,50];

