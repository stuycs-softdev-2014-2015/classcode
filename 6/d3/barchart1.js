console.log("HELLO");


var chartData = [50,15,70,20,35];
var colors = ['red','blue','green','violet','gray','magenta'];

var chart = d3.select("#chart");

chart.selectAll("div")
		.data(chartData)
		.enter()
		.append("div")
		.style({'color':'yellow',
						'background-color':function(d,i){return colors[i%colors.length];},
						'padding':'5px',
						'margin':'5px',
						'font-size':"20px",
						'text-align':'right',
						'width':function(d) { return 10*d+"px";}
					 })
		.text(function(d){return d;});


var labeledData = [
		{label:"carrots",count:50},
		{label:'bananas',count:25},
		{label:'doughnuts',count:3},
		{label:'limes',count:55}
];
d3.select("body").append("hr");
var labeledChart =  d3.select("body").append("div").attr("id","labeled");
labeledChart.selectAll("div")
		.data(labeledData)
		.enter()
		.append("div")
		.style({'color':'yellow',
						'background-color':function(d,i){return colors[i%colors.length];},
						'padding':'5px',
						'margin':'5px',
						'font-size':"20px",
						'text-align':'right',
						'width':function(d) { return 10*d.count+"px";}
					 })
		.text(function(d){return d.label;});


var change = function(){
		var d2 = chartData.slice();
		d2.sort();
		chart.selectAll("div")
				.data(d2)
				.transition()
				.duration(4000)
				.ease('bounce')
				.delay(function(d,i){return i*2000;})
				.style({'color':'yellow',
								'background-color':function(d,i){return colors[i%colors.length];},
								'padding':'5px',
								'margin':'5px',
								'font-size':"20px",
								'text-align':'right',
								'width':function(d) { return 10*d+"px";}
							 })
				.text(function(d){return d;});

							
};
