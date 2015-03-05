console.log("HELLO");

var Place = Backbone.Model.extend({
		initialize : function(){
				this.on("change",function() {
						alert("CHANGED: "+this);
				});
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
