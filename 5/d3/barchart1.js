console.log("HELLO");

				// select stuff
var content= d3.select("#content");

var colors = ["red","green","blue",'gray','violet','yellow'];
var d = [20,25,5,15,30,60,10];

content.selectAll("div")
		.data(d)
		.enter()
		.append("div")
		.style({
				"background-color":function(d,i){return colors[i%colors.length];},
				"font-size":"20px",
				"padding":"10px",
				"margin":"10px",
				"text-align":"right",
				"width":function(d){
						return d*20+"px";
				}
		})
		.text(function(d) { return d;});

var with_labels = [
		{label:'potatos',count:50},
		{label:'carrots',count:25},
		{label:'doughnuts',count:3}
];

d3.select("#labels").selectAll("div")
		.data(with_labels)
		.enter()
		.append("div")
		.style({
				"background-color":function(d,i){return colors[i%colors.length];},
				"font-size":"20px",
				"padding":"10px",
				"margin":"10px",
				"text-align":"right",
				"width":function(d){
						return d.count*20+"px";
				}
		})
		.text(function(d) { return d.label;});

var d2 = [50,15,45,55,10,20,50];
var change = function(){
		var divs = d3.select("#content").selectAll("div");
		divs.data(d2)
				.transition()
				.style({
						"width":function(d){
								return d*20+"px";
						}
				})
				.text(function(d) { return d;})
				.duration(3000)
				.delay(function(d,i){return 1000*i;});
		;
		
};







