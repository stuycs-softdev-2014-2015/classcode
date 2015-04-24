console.log("HELLO");

data1 = [80,10,30,15,35,47,70];
data2 = data1.slice();
data2.sort();

var width=800,
		height=400,
		padding=20;


var xScale = d3.scale.linear()
				.domain([0,7])
				.range([padding,width-padding]);

var yScale = d3.scale.linear()
				.domain([0,100])
				.range([height-padding,padding]);

var yAxis = d3.svg.axis().scale(yScale).orient("left");

var svg = d3.select("#content").append("svg")
				.attr("width",width)
				.attr("height",height)
				.classed("bordered",true)
				.attr("id","svg")


svg.selectAll(".dots")
		.data(data1)
		.enter()
		.append("g")
		.classed('dots',true);

svg.selectAll(".dots")
		.append("circle")
		.attr("cx",function(d,i){return xScale(i);})
		.attr("cy",function(d){return yScale(d);})
		.attr("r",10)
		.attr("fill","green");


var linef = d3.svg.line()
				.x(function(d,i){return xScale(i);})
				.y(function(d,y){return yScale(d);})
				.interpolate("cardinal");

svg.append("path")
		.attr("d",linef(data1))
		.attr("stroke","red")
		.attr("stroke-width",2)
		.attr("fill","none");

d3.select("#change").on('click',function(){
		svg.selectAll("path")
				.transition()
				.duration(1000)
				.attr("d",linef(data2))
				.attr("stroke","red")
				.attr("stroke-width",2)
				.attr("fill","none");

		svg.selectAll("circle")
				.data(data2)
				.transition()
				.delay(function(d,i){return 1000+i*1000;})
				.duration(1000)
				.attr("cx",function(d,i){return xScale(i);})
				.attr("cy",function(d){return yScale(d);})
				.attr("r",10)
				.attr("fill","green");

							 
});
