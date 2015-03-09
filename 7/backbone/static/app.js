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

var PlaceView = Backbone.View.extend({
		el : "#place",
		initialize : function() {
				this.render();
		},
		render:function() {
				var t = _.template("<tr><td><%= name %></td><td><%= rating %></td></tr>");
				
				var e = t(this.model.toJSON());
				// this.$el.empty();
				this.$el.append(e);
				return this;
		}
});


var p1 = new Place({name:"Terry's",rating:5});
var v1 = new PlaceView({model:p1});
