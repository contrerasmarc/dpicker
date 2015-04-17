# Overview

This is un example for to include a basic datepicker in [Sproutcore](http://www.github.com/sproutcore/sproutcore).
The framework is based on the work of Juan Pablo Goldfinger, Dave Porter, Evin Grano, Mike Ball and Dave Porter.

For implementing you must include:

A. in Buildfile:

		config :dpicker, :required => [ :sproutcore, 'desktop' ]

B. in you View, for the text fields:

		txtDateRight: SC.DateFieldView.extend({
			layout: { left: 192, width: 112, top: 40, height: 24  },
			marginBefore: 8,
			value: SC.DateTime.create(),
			useDatePicker: YES,
			dismissPickerOnChange: YES,
			updateOnPickerChange: YES,
			firstDayOfTheWeek: 'Monday'
		}),
		
C. in your View, the buttons:

		btnDateRight: SC.ImageButtonView.extend({
			layout: { left: 312, width: 24, top: 40, height: 24  },
			classNames: ['calendar'],
			action: 'btnDateRightWasClicked'
		}),
		
		btnDateRightWasClicked: function(){
			console.log('botón presionado');
			var dateRight = this.get('txtDateRight');
			dateRight.fieldDidFocus();
		}

I mofified the date_picker.js for shows Monday as the first day of the week.


