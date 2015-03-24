console.log("HELLO");

var App = new Marionette.Application();

App.addRegions({
		firstRegion: "#first-region",
		secondRegion:"#second-region",
		thirdRegion: "#third-region",
		fourthRegion:"#fourth-region"
});
App.on("start",function(){
		console.log("STARTING");
		var staticView = new App.StaticView();
		App.firstRegion.show(staticView);

		var placeView = new App.PlaceView({model:p1});
		App.secondRegion.show(placeView);

		var placesView = new App.PlacesView({collection:c});
		App.thirdRegion.show(placesView);

		var compView = new App.CompView({collection:c});
		App.fourthRegion.show(compView);
});

App.StaticView = Marionette.ItemView.extend({
		template : "#static-template"
});

App.PlaceView = Marionette.ItemView.extend({
		template : "#place-template",
		tagName : "tr",
		events : {
				"click #delete" : function() { this.remove();}
		},
		modelEvents: {
				"change":function(){
						this.render();
						}}
});

App.PlacesView = Marionette.CollectionView.extend({
		childView : App.PlaceView
});

App.CompView = Marionette.CompositeView.extend({
		template : "#composite-template",
		childView : App.PlaceView,
		childViewContainer : "tbody",
		events : {
				"click #add" : function(){
						var n = $("#newname").val();
						if (n.length > 0){
								this.collection.add(new Place({name:n, rating:0}));
								$("#newname").val("");
								this.collection.sort();
						}
				}
		}
});

var Place = Backbone.Model.extend();
var Places = Backbone.Collection.extend({
		model:Place,
		comparator:"name"
});

var p1 = new Place({name:"Terry's",rating:5});
var p2 = new Place({name:"Ferry's",rating:8});
var c = new Places([p1,p2]);
App.start();
