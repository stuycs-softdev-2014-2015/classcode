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
		
});

App.StaticView = Marionette.ItemView.extend({
		template : "#static-template"
});
App.PlaceView = Marionette.ItemView.extend({
		template : "#place-template",
		tagName : "tr"
});

var Place = Backbone.Model.extend();
var p1 = new Place({name:"Terry's",rating:5});


App.start();
