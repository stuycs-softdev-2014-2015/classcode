console.log("HELLO");

var App = new Marionette.Application();

App.addRegions({
		firstRegion:"#first-region",
		secondRegion:"#second-region",
		thirdRegion:"#third-region",
		fourthRegion:"#fourth-region"
});


App.on("start",function() {
		console.log("Started");
		var firstView = new App.FirstView();
		App.firstRegion.show(firstView);

		var placeview = new App.PlaceView({model:p1});
		App.secondRegion.show(placeview);
});

App.FirstView = Marionette.ItemView.extend({
		template: "#first-template"
});

App.PlaceView = Marionette.ItemView.extend({
		template : "#place-template",
		tagName  : "tr"		
});

var Place = Backbone.Model.extend({});
var p1 = new Place({name:"Terry's",rating:5});
App.start();
