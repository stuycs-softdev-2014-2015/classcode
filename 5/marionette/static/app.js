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
		App.fourthRegion.show(firstView);

		var placeview = new App.PlaceView({model:p1});
		App.secondRegion.show(placeview);

		var placesview = new App.PlacesView({collection:c});
		App.thirdRegion.show(placesview);

		var compositeview = new App.CompositeView({model:person, collection:c});
		App.firstRegion.show(compositeview);

		Backbone.history.start();
});

App.FirstView = Marionette.ItemView.extend({
		template: "#first-template"
});

App.PlaceView = Marionette.ItemView.extend({
		template : "#place-template",
		tagName  : "tr",
		events   : {
				"click #delete" : function(){
						this.remove();
				}
		},
		modelEvents : {
				"change" : function() {this.render()}
		}
		
});

App.PlacesView = Marionette.CollectionView.extend({
		childView : App.PlaceView
});

App.CompositeView = Marionette.CompositeView.extend({
		template: "#composite-template",
		childView: App.PlaceView,
		childViewContainer : "tbody",
		events : {
				"click #add" : function() {
						var n = $("#newname").val();
						if (n.length > 0){
								this.collection.add(new Place({name:n,rating:0}));
								$("#newname").val("");
						}

				}
		}
});

var myController = Marionette.Controller.extend({
		oneRoute : function(){
				console.log("OneRoute");
				App.firstRegion.show(new App.PlaceView({model:p1}));
				App.secondRegion.show(new App.PlaceView({model:p1}));
		},
		twoRoute : function(){
				App.firstRegion.show(new App.PlaceView({model:p2}));
				App.secondRegion.show(new App.PlaceView({model:p2}));
				console.log("TwoRoute");
		},
});

App.controller = new myController();
App.router = new Marionette.AppRouter({
		controller: App.controller,
		appRoutes:{
				"one":"oneRoute",
				"two":"twoRoute"
		}
});

var Place = Backbone.Model.extend({});
var Places = Backbone.Collection.extend({
		model:Place
});

var Person = Backbone.Model.extend({});
var person = new Person({first:'Archimedes',
												 last:'Zzzzyyyyyxxx',
												 stars:5
												});

var p1 = new Place({name:"Terry's",rating:5});
var p2 = new Place({name:"Ferry's",rating:8});
var c = new Places([p1,p2]);
App.start();
