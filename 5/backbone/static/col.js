console.log("HELLO");

var PView = Backbone.View.extend({
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


CView = Backbone.View.extend({
		el:"#places",
		render:function(){
				this.$el.empty();
				console.log("ZZ");
				console.log(this.collection);
				this.collection.each(function(i){
						var v = new PView({model:i});
						var x = v.render();
						this.$el.append(x.$el);
				},this);
		}
		
});

var Place = Backbone.Model.extend({});

var Collection = Backbone.Collection.extend({
		url:'places',
		model : Place,
		initialize : function(){
				this.fetch();
				this.on({'add':function() {
						console.log("Added");
				}});
		}
});

var p1 = new Place({name:"Terry's", rating:5});
var p2 = new Place({name:"Ferry's", rating:7});
var c = new Collection();
c.add([p1,p2]);
var cv = new CView({collection:c});
c.view = cv;
cv.render();
