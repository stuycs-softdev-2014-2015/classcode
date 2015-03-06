console.log("HELLO");

var Place = Backbone.Model.extend({
		initialize: function() {
				this.on({"change":function() {
						alert("Changed"+this.toJSON())}});
		},
		defaults:{'name':'name goes here',
							'rating':0},
		validate:function(attrs,options){
				if (isNaN(attrs.rating)){
						return "Rating must be numeric";
				}
		}
});

var p1 = new Place({name:"Terry's", rating:5});
var p2 = new Place({name:"Ferry's", rating:7});
