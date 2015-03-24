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

		var placesview = new App.PlacesView({collection:c});
		App.thirdRegion.show(placesview);

		var compositeview = new App.CompositeView({collection:c});
		App.fourthRegion.show(compositeview);
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

var Place = Backbone.Model.extend({});
var Places = Backbone.Collection.extend({
		model:Place
});

var p1 = new Place({name:"Terry's",rating:5});
var p2 = new Place({name:"Ferry's",rating:8});
var c = new Places([p1,p2]);
App.start();
