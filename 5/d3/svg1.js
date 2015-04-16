console.log("HELLO");

				// select stuff
var content= d3.select("#content");
var svg = content.append("svg")
				.attr("width",600)
				.attr("height",600)
				.attr("id","svg")
				.classed('bordered',true);

var c1 = svg.append("circle")
				.attr("cx",100)
				.attr("cy",100)
				.attr('r',20)
				.attr("fill",'red');

var c2 = svg.append("circle")
				.attr({'cx':300,
							 'cy':300,
							 'r' : 20,
							 'fill': 'green'
							});

var move = function(item,newx,newy){
		item.transition()
				.ease("bounce")
				.duration(5000)
				.attr('cx',newx)
				.attr('cy',newy);
};





