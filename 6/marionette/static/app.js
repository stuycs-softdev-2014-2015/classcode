console.log("HELLO");

var App = new Marionette.Application();

App.addRegions({
		firstRegion: "#first-region",
		secondRegion: "#second-region",
		thirdRegion: "#third-region",
		fourthRegion: "#fourth-region"
});


App.on("start",function(){
		console.log("Starting");
		var staticview = new App.StaticView();
		App.firstRegion.show(staticview);

		var placeview = new App.PlaceView({model:p1});
		App.secondRegion.show(placeview);

		var placesview = new App.PlacesView({collection:c});
		App.thirdRegion.show(placesview);
		
});

App.StaticView = Marionette.ItemView.extend({
		template : "#static-template"
});
App.PlaceView = Marionette.ItemView.extend({
		template : "#place-template",
		tagName : "tr",
		events : {
				"click #delete" : function(){this.remove();}
		},
		modelEvents : {
				"change" : function() { this.render(); }
		}
		
});


App.PlacesView = new Marionette.CollectionView.extend({
		childView : App.PlaceView
});

var Place = Backbone.Model.extend();
var Places = Backbone.Collection.extend({
		model:Place
});

var p1 = new Place({name:"Terry's",rating:5});
var p2 = new Place({name:"Ferry's",rating:8});
var c = new Places([p1,p2]);

App.start();
