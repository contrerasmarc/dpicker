// ==========================================================================
// Project:   Dpicker - mainPage
// Copyright: @2015 My Company, Inc.
// ==========================================================================
/*globals Dpicker */

// This page describes the main user interface for your application.
Dpicker.mainPage = SC.Page.design({

  // The main pane is made visible on screen as soon as your app is loaded.
  // Add childViews to this pane for views to display immediately on page
  // load.
  mainPane: SC.MainPane.design({
    childViews: ['labelView', 'imgDate', 'txtDateLeft', 'btnDateLeft', 'txtDateRight', 'btnDateRight'],

    labelView: SC.LabelView.design({
      classNames: ['welcome-label' ],
      layout: { left: 8, width: 300, top: 8, height: 24 },
      tagName: "h1",
      value: "Basic DatePicker in SproutCore"
    }),
		
		imgDate: SC.ImageView.extend({
	    	classNames: 'adate',
	    	layout: { left: 8, width: 24, top: 40, height: 24 }
	    }),
	
		txtDateLeft: SC.DateFieldView.extend({
		  layout: { left: 40, width: 112, top: 40, height: 24 },
			marginBefore: 8,
			value: SC.DateTime.create(),
			useDatePicker: YES,
			dismissPickerOnChange: YES,
			updateOnPickerChange: YES
		}),
		
		btnDateLeft: SC.ImageButtonView.extend({
			layout: { left: 160, width: 24, top: 40, height: 24  },
			classNames: ['calendar'],
			toolTip: 'Calendar',
			action: 'btnDateLeftClicked'
		}),
		
		btnDateLeftClicked: function(){
			console.log('botón presionado');
			var dateLeft = this.get('txtDateLeft');
			dateLeft.fieldDidFocus();
		},
		
		txtDateRight: SC.DateFieldView.extend({
			layout: { left: 192, width: 112, top: 40, height: 24  },
			marginBefore: 8,
			value: SC.DateTime.create(),
			useDatePicker: YES,
			dismissPickerOnChange: YES,
			updateOnPickerChange: YES,
			firstDayOfTheWeek: 'Monday'
		}),

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
		
		
  })

});
