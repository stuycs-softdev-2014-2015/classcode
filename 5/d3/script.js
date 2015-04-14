console.log("HELLO");

				// select stuff
var div= d3.select("#thediv");
var listitems = d3.selectAll("li");

/*
div.text("THIS IS TEXT ADDED TO THE DIV");
div.style("border",'solid');
div.style('border-width',2);
 */

div.style("border",'solid')
		.style("border-width",2)
		.text("chained function example");


div.append("p").text("This is a paragraph");

var makeUL = function(){
		var u = d3.select("ul");
		for (var i=0;i<2;i++){
				u.append("li")
						.text(i)
						.attr("id","id"+i)
						.classed('item',true);
		}
};

var makeUL2 = function(){
		var u = d3.select("ul");
		for (var i=0;i<2;i++){
				u.append("li")
						.attr("id","id"+i)
						.classed('item',true);
		}
		var ulitems = d3.selectAll("ul li");
		ulitems.text("HELLO")
				.style('font-size',function(d,i) {
						return 20+20*i+"px";
				});
};

var d = [20,30,5,15];
