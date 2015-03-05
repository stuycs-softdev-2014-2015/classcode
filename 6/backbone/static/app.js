console.log("HELLO");

var Place = Backbone.Model.extend({
		defaults: {
				name :"Place name",
				rating:0
		},
		validate : function(attrs,options) {
				if (isNaN(attrs.rating)){
						return "need number";
				}
		}

});

