console.log("HELLO");

var Place = Backbone.Model.extend({
		onChange : function() {
				console.log("Changed");
		},
		initialize : function(){

		},
		destroy:function(){
				this.off("change",this.onChange);
		},
		defaults: {
				name : "Name goes here",
				rating : 5,
				review :''
		},
		validate : function(attr,options){
				if (isNaN(attr.rating)){
						return "Need a number";
				}
		}
});

var EView = Backbone.View.extend({
		el : "#e",
		template :  _.template( $("#e_template").html() ),
		events : {
				"click #change":function() {
						var r = $("#t").val();
						this.model.set("review",r);
				}, 
				"click .up" : function(e){
						var r = this.model.get("rating");
						r = parseInt(r);
						r = r + 1;
						this.model.set("rating",r);
						this.render();
				},
				"click .down" : function(e){
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

var VView = Backbone.View.extend({
		el : "#v",
		template :  _.template( $("#v_template").html() ),
		initialize : function() {
				var that = this;
				this.model.on("change",function(){
						that.render();
				});
				this.render();
		},
		render:function() {
				var e = this.template(this.model.toJSON());
				this.$el.empty();
				this.$el.append(e);
				return this;
		}
});


var p1 = new Place({name:"Terry's",rating:5});
var ev = new EView({model:p1});
var vv = new VView({model:p1});
