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
});

App.StaticView = Marionette.ItemView.extend({
		template : "#static-template"
});

App.PlaceView = Marionette.ItemView.extend({
		template : "#place-template",
		tagName : "tr",
		modelEvents: {
				"change":function(){
						this.render();
						}}
});

var Place = Backbone.Model.extend();
var p1 = new Place({name:"Terry's",rating:5});

App.start();
