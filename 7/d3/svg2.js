console.log("HELLO");

bardata = [
		{'label':'a','y':80},
		{'label':'b','y':20},
		{'label':'c','y':30},
		{'label':'d','y':70},
		{'label':'e','y':60},
		{'label':'f','y':15},
		{'label':'g','y':45},
];

var width=600,
		height=400,
		padding=20;

var yMax = d3.max(bardata,function(d){return d.y;})+20;

var yScale = d3.scale.linear()
				.domain([0,yMax])
				.range([height,20]);

var xScale = d3.scale.linear()
				.domain([0,bardata.length+1])
				.range([0,width]);

var yAxis = d3.svg.axis().scale(yScale).orient("left");

var svg = d3.select("#content")
				.append("svg")
				.attr('width',width)
				.attr('height',height)
				.attr("id","svg")
				.classed('bordered',true)
				.append("g")
				.attr("transform","translate(40,-30)")
				.call(yAxis);

svg.selectAll(".bars")
		.data(bardata)
		.enter()
		.append("g")
		.classed('bars',true);

svg.selectAll(".bars")
		.append("rect")
		.attr("x",function(d,i){return xScale(i);})
		.attr("y",function(d){return yScale(d.y);})
		.attr("width",width/bardata.length-20)
		.attr("height",function(d){return height-yScale(d.y);})
		.attr("fill","#0000ff");

svg.selectAll(".bars")
		.append("text")
		.attr("x",function(d,i){return xScale(i);})
		.attr("y",function(d){return yScale(d.y);})
		.attr("font-family",'sans-serif')
		.attr("font-size","25px")
		.attr("fill","#000000")
		.text(function(d){return d.y;});

svg.selectAll(".bars")
		.append("text")
		.attr("transform","translate(0,55)")
		.attr("x",function(d,i){return xScale(i);})
		.attr("y",function(d){return height-30;})
		.attr("font-family",'sans-serif')
		.attr("font-size","30px")
		.attr("fill","black")
		.text(function(d){return d.label;});



