
Place = Backbone.Model.extend({
				initialize:function(){
						this.on({
								"change":function(){
										console.log("Changed"+this);
								}
						});
				}
		});


Collection = Backbone.Collection.extend({
		model:Place,
		initialize:function() {
				this.on({'add':function() {
						console.log("added");
						this.view.render();
				}});
		}
});

p1 = new Place({name:"Terry's",
					 rating:3
					});
p2 = new Place({name:"Ferry's",
					 rating:7
							 });

c = new Collection();


PView = Backbone.View.extend(
		{
				template: $("#place_template").html(),
				tagName:"tr",
				render:function(x) {
						
						var t = _.template(this.template);
						var rendered = this.$el.html(t(this.model.attributes));
						return this;
				},
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
						}
				}

				
		}); 

CView = Backbone.View.extend({
		el:"body",
		events:{
				"submit form#form":'addone'
		},
		addone: function(e){
				e.preventDefault();
				var pname = $("#place").val();
				$("#place").val("");
				var m = new Place({name:pname,rating:"0"});
				this.collection.add(m);
				this.render();
				console.log(m);
		},
		render:function(){
				$("#table").empty();
				this.collection.each(function(i){
						var v = new PView({model:i});
						var x = v.render();
						//console.log(x);
						$("#table").append(x.$el);

				});
		}
});
		
cv = new CView({collection:c});
c.view = cv;

c.add([p1,p2]);
pv = new PView({model:p1});

