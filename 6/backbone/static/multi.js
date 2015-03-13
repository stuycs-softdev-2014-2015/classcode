console.log("HELLO");

var Place = Backbone.Model.extend({
		showchange: function(){
						console.log("Changing: "+this.toString());
		},
		initialize:function(){
		},
		destroy: function() {
		},
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

var PlaceView = Backbone.View.extend({
		tagName:"tr",
		template	:  _.template($("#place_template").html()),
		events:{
				"click #up" : function(e) {
						var r = this.model.get("rating");
						r = parseInt(r);
						r = r + 1;
						this.model.set("rating",r);
						this.render();
				},
				
				"click #down" : function(e) {
						var r = this.model.get("rating");
						r = parseInt(r);
						r = r - 1;
						this.model.set("rating",r);
						this.render();
				},
		},
		initialize:function(){
				this.render();
		},
		render: function() {
				var e = this.template(this.model.toJSON());
				this.$el.empty();
				this.$el.append(e);
				return this;
		}

});

var MultiView = Backbone.View.extend({
		el:"#places",
		initialize : function(){
				var that = this;

				this.render();
		},
		render: function(){
				this.$el.empty();
				for (var i = 0 ; i < this.model.length; i++ ){
						var v = new PlaceView({model:this.model[i]});
						this.$el.append(v.$el);
				}
				return this;
		}

});


var p1 = new Place({name:"Terry's",rating:5});
var p2 = new Place({name:"Ferry's",rating:8});
var v1 = new PlaceView({model:p1});


var c = [p1,p2];
var mv = new MultiView({model:c});
