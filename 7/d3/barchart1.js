console.log("HELLO");

var chartData = [20,10,60,80,50];
var colors = ['blue','red','green','magenta','violet','gray'];

var chart = d3.select("#chart");
chart.selectAll("div")
		.data(chartData)
		.enter()
		.append("div")
		.style({'background-color':function(d,i){return colors[i%colors.length];},
						'color':'yellow',
						'margin':'5px',
						'padding':'5px',
						'font-size':"20px",
						'text-align':'right',
						'width':function(d){ return 10*d+"px";}
					 })
		.text(function(d) {return d;})
;

var labeledData = [
		{label:'carrots',count:55},
		{label:'potatos',count:50},
		{label:'doughnuts',count:3},
		{label:'burgers',count:20}
];

d3.select("body").append("hr");
var labeledChart = d3.select("body").append("div").attr("id","label");
labeledChart.selectAll("div")
		.data(labeledData)
		.enter()
		.append("div")
		.style({'background-color':function(d,i){return colors[i%colors.length];},
						'color':'yellow',
						'margin':'5px',
						'padding':'5px',
						'font-size':"20px",
						'text-align':'right',
						'width':function(d){ return 10*d.count+"px";}
					 })
		.text(function(d) {return d.label;})
;

var change = function(){
		var d2 = chartData.slice();
		d2.sort();
		var c = d3.select("#chart").selectAll("div");
		c.data(d2)
				.transition()
				.ease('bounce')
				.duration(3000)
				.delay(function(d,i){return 1000*i;})
				.style('width',function(d){ return 10*d+"px";})
				.text(function(d) {return d;});
};
