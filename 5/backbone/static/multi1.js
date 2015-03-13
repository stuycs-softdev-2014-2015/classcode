console.log("HELLO");

var PlaceView = Backbone.View.extend({
		tagName:"tr",
		template: _.template($("#place_template").html()),
		events: {
				"click #up" : function(e) {
						var r = this.model.get("rating");
						r = parseInt(r);
						r = r + 1;
						this.model.set('rating',r);
						this.render();
				},
				"click #down" : function(e) {
						var r = this.model.get("rating");
						r = parseInt(r);
						r = r - 1;
						this.model.set('rating',r);
						this.render();
				},
		},
		initialize:function(){
				this.render();
		},
		render: function(){
				var e = this.template(this.model.toJSON());
				this.$el.empty();
				this.$el.append(e);
				return this;
		}


});


var Place = Backbone.Model.extend({
		initialize: function() {
				this.on({"change":function() {
						console.log("Changed"+this.toJSON())}});
		},
		defaults:{'name':'name goes here',
							'rating':0},
		validate:function(attrs,options){
				if (isNaN(attrs.rating)){
						return "Rating must be numeric";
				}
		}
});

var MultiView = Backbone.View.extend({
		el:"#places",
		initialize:function(){
				this.render();
		},
		render: function(){
				this.$el.empty();
				for (var i = 0; i < this.model.length; i++){
						var v = new PlaceView({model:this.model[i]});
						console.log(this.el);
						this.$el.append(v.el);
				}
				return this;
		}
});

var p1 = new Place({name:"Terry's", rating:5});
var p2 = new Place({name:"Ferry's", rating:7});

var c = [p1,p2];
var cv = new MultiView({model:c});
