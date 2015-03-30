
var p1,p2;


var app = new Marionette.Application();

app.on("start",function() {

		p1 = new app.Place({name:"Terry's",
												rating:3
											 });
		p2 = new app.Place({name:"Ferry's",
												rating:7
											 });


		app.c = new app.Collection();
		app.c.add([p1,p2]);
		app.cv = new app.CV({collection:app.c});
		app.mainRegion.show(app.cv);
});

app.addRegions({
		mainRegion:"#holder"
});

app.Place =  Backbone.Model.extend({
				initialize:function(){
						this.on({
								"change":function(){
										console.log("Changed"+this);
								}
						});
				}
		});

app.Collection = Backbone.Collection.extend({
		model:app.Place,
		initialize:function() {
				this.on({'add':function() {
						console.log("added");
				}});
		}
});

app.PV = Marionette.ItemView.extend({
		tagName:'tr',
		template:"#place_template",
				events:{
						"click .up":function(e){
								var r = this.model.get('rating');
								r = parseInt(r);
								r = r + 1;
								this.model.set('rating',r);
								console.log(this.model);
								this.render();
						},
						"click .down":function(e){
								var r = this.model.get('rating');
								r = parseInt(r);
								r = r - 1;
								this.model.set('rating',r);
								console.log('down');
								this.render();
						},
						"click .delete":function(e){
								this.remove();
								this.render();
						},
									/* on each click */
				"keypress": function(e){
						var code = e.keyCode || e.which;
						if(code == 13) {
								this.model.set('status',e.target.innerText);
								console.log(this.model.attributes);
								/* must now save the model */
								this.model.save({'name':e.target.innerText});
								e.preventDefault();
						}
				},
				"focusout .editable": function(e){
								this.model.set('status',e.target.innerText);
								console.log(this.model.attributes);
								/* must now save the model */
								this.model.save({'name':e.target.innerText});
						
				}
				
				}
});


/*
app.CV = Marionette.CollectionView.extend({
		events:{
				'click #add':function(e) {console.log("Z");}
		},
		el:"table",
		childView:app.PV
});
 */

app.CV  = Marionette.CompositeView.extend({
		events:{
				'click #add':function(e) {
						e.preventDefault();
						var pname = $("#place").val();
						$("#place").val("");
						var m = new app.Place({name:pname,rating:"0"});
						this.collection.add(m);
						this.render();
						console.log(m);
				}
		},
		template:"#cv_template",
		childViewContainer:'table',
		childView:app.PV
});


app.start();
