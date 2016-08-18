define(['backbone', 'underscore', 'models/model'], function(
		Backbone,
		_,
		DateModel){
	
	
	var DateCollection = Backbone.Collection.extend({
		
		Model : DateModel,
		
		initialize : function(){
			
		}
	});
	
	return DateCollection;
	
})