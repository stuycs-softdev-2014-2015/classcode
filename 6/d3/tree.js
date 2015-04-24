treedata = {
		name: 'softdev',
		children : [
				{name: 'pd6',
				 children: [
						 {name:'Jane'},
						 {name:'Zane'},
						 {name:'Kelvin'},
				 ]},
				{name: 'pd7',
				 children: [
						 {name:'Ben'},
						 {name:'Marlena'},
						 {name:'Judy'},
				 ]}
		]
};

var height=600,width=600,padding=20;

var svg = d3.select("#content")
				.append('svg')
				.attr('width',width)
				.attr('height',height)
				.attr('class','bordered');

var tree = d3.layout.tree()
				.size([height-100,width-100]);

var nodes = tree.nodes(treedata);

svg.selectAll('.nodes')
		.data(nodes)
		.enter()
		.append("g")
		.attr('transform','translate(25,50)')
		.classed('nodes',true);

svg.selectAll('.nodes')
		.append('circle')
		.attr('r',10)
		.attr('cx',function(d) {return d.y;})
		.attr('cy',function(d) {return d.x;})
		.attr('fill','steelblue');

svg.selectAll('.nodes')
		.append('text')
		.attr('transform','translate(-20,-10)')
		.attr('x',function(d) {return d.y;})
		.attr('y',function(d) {return d.x;})
		.text(function(d){return d.name;});


var links = tree.links(nodes);
var diagonal = d3.svg.diagonal()
				.projection(function(d){ return [d.y,d.x];});

svg.selectAll('.links')
		.data(links)
		.enter()
		.append('path')
		.attr('transform','translate(25,50)')
		.attr('fill','none')
		.attr('stroke','black')
		.attr('stroke-width','1px')
		.attr('class','link')
		.attr('d',diagonal);
