define(['backbone', 'underscore', 'text!../templates/calenderTemplate.html', 'views/dateView'], function(
		Backbone,
		_,
		calenderTemplate,
		DayView){
	
	var CalenderView = Backbone.View.extend({
		
		
		el: '.container',
		
		template : _.template(calenderTemplate),
		
		
		initialize : function(){			
			
			//today date view for this
			this.date = new Date();
			this.currentDate = new Date();
			this.render(this.formData());
			
			
			this.$monthName = this.$('#month-name');
			this.$yearName = this.$('#year-name');
			this.$dateDiv = this.$('#dates');
			
			
			this.collection.on('add', function(e){				
				var dayView = new DayView({ model : e});				
				if(e.get('date').getDate() === this.currentDate.getDate() && e.get('date').getMonth() === this.currentDate.getMonth() && e.get('date').getFullYear() === this.currentDate.getFullYear()){
					dayView.$el.addClass('current');
				}
				
				this.on('dim', function(){
					dayView.$el.addClass('dim');
				}, this)
				this.renderDay(dayView);
			}, this);
			
			
			this.renderCalender();
			
		},
		
		events : {
			'click .nextBtn' : 'next',
			'click .backBtn' : 'prev'
		},		
		render : function(data){
			this.$el.html(this.template(data));			
		},
		
		next : function(){			
			this.date.setMonth(this.date.getMonth()+1);
			this.setMonth(this.getMonth(), this.getYear());
			this.collection.reset([]);
			console.log(this.collection);
			this.$dateDiv.html('');
			this.renderCalender();
		},
		prev : function(){
			this.date.setMonth(this.date.getMonth()-1);
			this.setMonth(this.getMonth(), this.getYear());
			this.$dateDiv.html('');
			this.renderCalender();
		},
		setMonth : function(monthNumber, year){
			var month= new Array();
				month[0] = "January";
				month[1] = "February";
				month[2] = "March";
				month[3] = "April";
				month[4] = "May";
				month[5] = "June";
				month[6] = "July";
				month[7] = "August";
				month[8] = "September";
				month[9] = "October";
				month[10] = "November";
				month[11] = "December";
			this.$monthName.html(month[monthNumber]);
			this.$yearName.html(year);
		},
		
		formData : function(){
			var month = new Array();
				month[0] = "January";
				month[1] = "February";
				month[2] = "March";
				month[3] = "April";
				month[4] = "May";
				month[5] = "June";
				month[6] = "July";
				month[7] = "August";
				month[8] = "September";
				month[9] = "October";
				month[10] = "November";
				month[11] = "December";
			
			var data = {
				month : month[this.date.getMonth()],
				date : this.date.getDate(),
				year : this.date.getFullYear()
			}
			
			return data;
		},
		getCurrentDay : function(){
			return this.date.getDay();
		},
		getCurrentDate : function(){
			return this.date.getDate();
		},
		getMinDate : function(){
			return this.getCurrentDate() % 7;
		},
		getFirstDayDate : function(){
			return 1 - this.getMinDate() + this.getCurrentDay();
		},
		getMonth : function(){
			return this.date.getMonth();
		},
		getYear : function(){
			return this.date.getFullYear();
		},
		getMaxDays : function(){			
			var d = new Date( this.getYear(), this.getMonth()+1, 0);			
			return d.getDate();
		},
		
		
		
		renderDay : function(view){
			this.$dateDiv.append(view.render().el);
		},
		
		
		
		renderCalender : function(){
			var month = this.getMonth();			
			var year = this.getYear();
			var max = this.getMaxDays();
			
			//handling firdt day of the month
			
			var firstDay = this.getFirstDayDate();
			
			if( firstDay === 2 ){
				//append one div
				var d = new Date( year, month, 0);			
				this.collection.add({date: d});
				this.trigger('dim');
				
			}
			else if( firstDay === 3 ){
				for(var j=2-firstDay; j<=0; j++){
					var d = new Date( year, month, j);			
					this.collection.add({date: d});
					this.trigger('dim');
				}				
			}
			else if( firstDay === -3 ){
				for(var j=-firstDay-5; j<=0; j++){
					var d = new Date( year, month, j);			
					this.collection.add({date: d});
					this.trigger('dim');
				}
				
			}
			else if( firstDay === -2 ){
				for(var j=-5-firstDay; j<=0; j++){
					var d = new Date( year, month, j);			
					this.collection.add({date: d});
					this.trigger('dim');
				}
			}
			else if( firstDay === -1 ){
				for(var j=-5-firstDay; j<=0; j++){
					var d = new Date( year, month, j);			
					this.collection.add({date: d});
					this.trigger('dim');
				}
			}
			else if( firstDay === 0 ){
				for(var j=-5-firstDay; j<=0; j++){
					var d = new Date( year, month, j);			
					this.collection.add({date: d});
					this.trigger('dim');
				}
			}			
			for(var i=1; i<=max; i++){
				
				var d = new Date( year, month, i);				
				//console.log(d);
				this.collection.add({date: d});				
			}
		}
		
		
	});
	return CalenderView;
	
	
})