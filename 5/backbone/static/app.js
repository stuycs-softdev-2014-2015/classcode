console.log("HELLO");

var PlaceView = Backbone.View.extend({
		el:"#place",
		initialize:function(){
				this.render();
		},
		render: function(){
				var t = _.template("<tr><td><%= name %></td><td><%= rating %></td></tr>");
				
				var e = t(this.model.toJSON());
				//this.$el.empty();
				this.$el.append(e);
				return this;
		}


});


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
var v1 = new PlaceView({model:p1});
