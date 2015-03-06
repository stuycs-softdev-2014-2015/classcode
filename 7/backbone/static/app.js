console.log("HELLO");

var Place = Backbone.Model.extend({
		onChange : function() {
				console.log("Changed");
		},
		initialize : function(){
				this.on("change",this.onChange);
		},
		destroy:function(){
				this.off("change",this.onChange);
		},
		defaults: {
				name : "Name goes here",
				rating : 5
		},
		validate : function(attr,options){
				if (isNaN(attr.rating)){
						return "Need a number";
				}
		}
});

var p1 = new Place({name:"Terry's",rating:5});
