
console.log("HELLO");

var Place = Backbone.Model.extend({});

var Places = Backbone.Collection.extend({
		model : Place,
		initialize : function() {
				this.on("add",function(){
						this.view.render();
				});
				this.on("remove",function(){
						this.render();
				});
		}
});

var PView = Backbone.View.extend({
		tagName:"tr",
		template :  _.template( $("#place_template").html() ),
		events : {
				"click .del" : function(e){
						this.remove();
				},
				"click #up" : function(e){
						var r = this.model.get("rating");
						r = parseInt(r);
						r = r + 1;
						this.model.set("rating",r);
						this.render();
				},
				"click #down" : function(e){
						var r = this.model.get("rating");
						r = parseInt(r);
						r = r - 1;
						this.model.set("rating",r);
						this.render();
				}
				
		},
		initialize : function() {
				this.render();
		},
		render:function() {
				var e = this.template(this.model.toJSON());
				this.$el.empty();
				this.$el.append(e);
				return this;
		}
});

var CView = Backbone.View.extend({
		el : "#places",
		render : function(){
				this.$el.empty();
				var that=this;
				this.collection.each(function (item) {
						var v = new PView({model:item});
						var h = v.render();
						that.$el.append(h.$el);
				});
				return this;
		}
});

var p1 = new Place({name:"Terry's",rating:5});
var p2= new Place({name:"Ferry's",rating:7});

var c = new Places();
var cv = new CView({collection:c});
c.view = cv;
c.add([p1,p2]);
cv.render();
