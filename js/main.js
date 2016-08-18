require.config({
	shim: {
		underscore: {
			exports: '_'
		},
		backbone: {
			deps: [
				'underscore',
				'jquery'
			],
			exports: 'Backbone'
		}		
	},	
	paths: {
		"jquery": "../node_modules/jquery/dist/jquery",
		"underscore": "../node_modules/underscore/underscore",
		"backbone": "../node_modules/backbone/backbone",
		"bootstrap": "../node_modules/bootstrap/dist/js/bootstrap",
		"text": "../node_modules/requirejs-text/text"
	}
});


define(['views/calenderView', 'views/dateView','collections/dateCollection'], function(
		CalenderView,
		DateView,
		DateCollection){
	
	
	
	//var model1 = new Model();
	var dateCollection = new DateCollection();
	console.log(dateCollection);
	var calView = new CalenderView({ collection : dateCollection });
	//var dateView = new DateView({ model : model1 });
	
	
})






