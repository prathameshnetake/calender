define(['backbone', 'underscore'], function(
		Backbone,
		_){
	
	
	
	var DayView = Backbone.View.extend({
		
		li : 'div',		
		
		template : _.template('<div><%= date %> </div>'),
		
		initialize : function(){
			
			this.$el.hover(this.hover.bind(this), this.blur.bind(this));
			
			this.model.on('destroy', this.remove);
		},
		events : {
			
		},
		
		hover : function(e){			
			$(e.target).css({
				"box-shadow":"2px 2px 10px gray",
				"background-color" : 'skyblue',
				color : 'white'
			});	
			//	console.log(this.model);
		},
		
		blur : function(e){
			//console.log(e);
			if(($(e.target).hasClass('dim'))){				
				$(e.target).css({
					"box-shadow":"none",
					"background-color" : 'transparent',
					color : '#BABABA'
				});
			}
			else if(($(e.target).hasClass('current'))){				
				$(e.target).css({
					"box-shadow":"1px 1px 5px black",
					"background-color" : 'darkblue',
					color : 'white',
					"border-radius": '0px'
				});
			}
			else{
				
				
				$(e.target).css({
					"box-shadow":"none",
					"background-color" : 'transparent',
					color : 'black'
				});
			}
		},
		
		render : function(){			
			this.$el.html(this.model.get('date').getDate());
			return this;
		},
		
		getCurrentDay : function(){
			return this.model.get('date').getDay();
		},
		getCurrentDate : function(){
			return this.model.get('date').getDate();
		},
		getMinDate : function(){
			return this.getCurrentDate() % 7;
		},
		getFirstDayDate : function(){
			return 1 - this.getMinDate() + this.getCurrentDay();
		},
		getMonth : function(){
			return this.model.get('date').getMonth();
		},
		getYear : function(){
			return this.model.get('date').getFullYear();
		},
		getMaxDays : function(){
			var d = new Date( this.getMonth(), this.getYear(), 0);
			return d.getDate();
		}		
		
		
	});
	
	return DayView;
	
	
})