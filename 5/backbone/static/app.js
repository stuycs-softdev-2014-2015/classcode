console.log("HELLO");

var Place = Backbone.Model.extend({
		initialize: function() {
				this.on({"change":function() {
						alert("Changed"+this)}});
		},
		defaults:{'name':'name goes here',
							'rating':0},
		validate:function(attrs,options){
				if (isNaN(attrs.rating)){
						return "Rating must be numeric";
				}
		}
});
