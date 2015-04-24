console.log("HELLO");

var graphdata = [80,20,30,70,60,15,45];
var graphdata2 = graphdata.slice();
graphdata2.sort();
var width=600,
		height=400,
		padding=20;
var yScale = d3.scale.linear()
				.domain([0,100])
				.range([height,20]);
var xScale = d3.scale.linear()
				.domain([0,graphdata.length+1])
				.range([0,width]);

var svg = d3.select("#content")
				.append("svg")
				.attr('width',width)
				.attr('height',height)
				.attr("id","svg")
				.classed('bordered',true);

svg.selectAll(".point")
		.data(graphdata)
		.enter()
		.append("g")
		.attr("transform",'translate(20,0)')
		.classed('point',true);

svg.selectAll(".point")
		.append("circle")
		.attr("cx",function(d,i){return xScale(i);})
		.attr("cy",function(d){return yScale(d);})
		.attr("r",10)
		.attr("fill","#0000ff");

var pathfunc = d3.svg.line()
				.x(function(d,i){return xScale(i);})
				.y(function(d){return yScale(d);})
				.interpolate('cardinal');


svg.append("path")
		.attr("transform",'translate(20,0)')
		.attr("d",pathfunc(graphdata))
		.attr('fill','none')
		.attr('stroke','red');

d3.select("#change").on('click',function(d){

		svg.selectAll("path")
				.transition()
				.duration(1000)
				.attr("d",pathfunc(graphdata2));

		svg.selectAll("circle")
				.data(graphdata2)
				.transition()
				.delay(function(d,i){return 500+1000*i;})
				.duration(1000)
				.attr("cx",function(d,i){return xScale(i);})
				.attr("cy",function(d){return yScale(d);})
				.attr("r",10)
				.attr("fill","#0000ff");
		
		
});
