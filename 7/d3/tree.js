console.log("HELLO");

var treedata = {
		name:'doughnuts',
		children:[
				{name:'mixed'},
				{name:'filled',
				 children:[
						 {name:'jelly'},
						 {name:'lemon'},
						 {name:'boston creme'}
				 ]
				},
				{name:'frosted',
				 children:[
						 {name:'chocolate'},
						 {name:'glazed'},
						 {name:'coconut'},
						 {name:'coffeecake'}
				 ]
				}
		]};


var height=600, width=600, padding=20;

var svg = d3.select("#content")
				.append("svg")
				.attr("height",height)
				.attr("width",width)
				.attr('class','bordered');

var tree = d3.layout.tree()
				.size([height-100,width-100]);

var nodes = tree.nodes(treedata);

svg.selectAll(".node")
		.data(nodes)
		.enter()
		.append("g")
		.attr("transform","translate(20,50)")
		.classed('node',true);

svg.selectAll('.node')
		.append('circle')
		.attr('r',10)
		.attr('cx',function(d){return d.y;})
		.attr('cy',function(d){return d.x;})
		.attr('fill','steelblue');

svg.selectAll('.node')
		.append("text")
		.attr("transform","translate(-20,-10)")
		.attr('x',function(d){return d.y;})
		.attr('y',function(d){return d.x;})
		.text(function(d){return d.name;});

var links = tree.links(nodes);
var diagonal = d3.svg.diagonal()
				.projection(function(d){return [d.y,d.x];});

svg.selectAll('.link')
		.data(links)
		.enter()
		.append('path')
		.attr("transform","translate(20,50)")
		.attr('fill','none')
		.attr('stroke-width',"1px")
		.attr('stroke','black')
		.attr('d',diagonal);


