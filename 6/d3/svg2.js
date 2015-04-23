console.log("HELLO");

var bardata = [
		{'label':'a','y':80},
		{'label':'b','y':20},
		{'label':'c','y':30},
		{'label':'d','y':65},
		{'label':'e','y':35},
		{'label':'f','y':48},
		{'label':'g','y':70},
];

var width=600,
		height=400,
		padding=20;

var maxY = d3.max(bardata,function(d){return d.y;})+padding;

var yScale = d3.scale.linear()
				.domain([0,maxY])
				.range([height,0]);

var xScale = d3.scale.linear()
				.domain([0,100])
				.range([0,width]);

var yAxis = d3.svg.axis().scale(yScale).orient("left");

var svg = d3.select("#content")
				.append("svg")
				.attr("width",width)
				.attr("height",height)
				.attr("id","svg")
				.classed("bordered",true)
				.append("g")
				.attr("transform","translate(40,-20)")
				.call(yAxis);

svg.selectAll(".bars")
		.data(bardata)
		.enter()
		.append("g")
		.classed("bars",true);

svg.selectAll(".bars")
		.append("rect")
		.attr("x",function(d,i){return xScale(i*10);})
		.attr("y",function(d){return yScale(d.y);})
		.attr("width",40)
		.attr("height",function(d){return height-yScale(d.y);})
		.attr("fill","#0000ff");

svg.selectAll(".bars")
		.append("text")
		.attr("x",function(d,i){return xScale(i*10);})
		.attr("y",function(d){return yScale(d.y);})
		.attr("font-family","sans-serif")
		.attr("font-size","15px")
		.attr("fill","#ff0000")
		.text(function(d){return d.y;});


svg.selectAll(".bars")
		.append("text")
		.attr("x",function(d,i){return xScale(i*10);})
		.attr("y",height-10)
		.attr("font-family","sans-serif")
		.attr("font-size","25px")
		.attr("fill","#f00f00")
		.attr("transform","translate(10,25)")
		.text(function(d){return d.label;});

