define(['backbone', 'underscore'], function(
		Backbone,
		_){
	
	
	var Model = Backbone.Model.extend({
		
		
		
		defaults : {
			
			date : new Date()
			
		},
		
		initialize : function(){
			
		},
		
		getCurrentDay : function(){
			return this.date.get('date').getDay();
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
		},
	
		
	});
	return Model;
	
	
})