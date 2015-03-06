console.log("HELLO");

var Place = Backbone.Model.extend({
		showchange: function(){
						console.log("Changing: "+this.toString());
		},
		initialize:function(){
				this.once("change",this.showchange);
				this.once("destroy",function() {
						this.off("change",showchange);
				});
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

var p1 = new Place({name:"Terry's",rating:5});
