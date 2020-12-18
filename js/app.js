// Dom7
var $ = Dom7;

// Theme
var theme = 'auto';
if (document.location.search.indexOf('theme=') >= 0) {
  theme = document.location.search.split('theme=')[1].split('&')[0];
}

// Init App
var app = new Framework7({
  id: 'io.framework7.testapp',
  root: '#app',
  theme: theme,
	view: {
		pushState :true,
		stackPages: true,            
	},
  data: function () {
    return {
      user: {
        firstName: 'John',
        lastName: 'Doe',
      },
    };
  },
  methods: {
    helloWorld: function () {
      app.dialog.alert('Hello World!');
    },
  },
  routes: routes,
  popup: {
    closeOnEscape: true,
  },
  sheet: {
    closeOnEscape: true,
  },
  popover: {
    closeOnEscape: true,
  },
  actions: {
    closeOnEscape: true,
  },
  vi: {
    placementId: 'pltd4o7ibb9rc653x14',
  },
});








// Create Popup with swipe to close
var swipeToClosePopup = app.popup.create({
  el: '.sample',
  swipeToClose: true,
});
        
// Create Popup with swipe to close
var swipeToClosePopup = app.popup.create({
  el: '.daftar',
  swipeToClose: true,
});
        
// Create Popup with swipe to close
var swipeToClosePopup = app.popup.create({
  el: '.lupapwd',
  swipeToClose: true,
});
        
// Create Popup with swipe to close
var swipeToClosePopup = app.popup.create({
  el: '.kf1',
  swipeToClose: true,
});
        
var swipeToClosePopup = app.popup.create({
  el: '.kf2',
  swipeToClose: true,
});
        
var swipeToClosePopup = app.popup.create({
  el: '.kf3',
  swipeToClose: true,
});
        
var swipeToClosePopup = app.popup.create({
  el: '.kf4',
  swipeToClose: true,
});
        
var swipeToClosePopup = app.popup.create({
  el: '.kf5',
  swipeToClose: true,
});
        
var swipeToClosePopup = app.popup.create({
  el: '.kf6',
  swipeToClose: true,
});
        
var swipeToClosePopup = app.popup.create({
  el: '.kf7',
  swipeToClose: true,
});
        
var swipeToClosePopup = app.popup.create({
  el: '.kf8',
  swipeToClose: true,
});
        
var swipeToClosePopup = app.popup.create({
  el: '.kf9',
  swipeToClose: true,
});
        
var swipeToClosePopup = app.popup.create({
  el: '.kf10',
  swipeToClose: true,
});
        
var swipeToClosePopup = app.popup.create({
  el: '.kf11',
  swipeToClose: true,
});
        
var swipeToClosePopup = app.popup.create({
  el: '.kf12',
  swipeToClose: true,
});
        
var swipeToClosePopup = app.popup.create({
  el: '.kf13',
  swipeToClose: true,
});
        
var swipeToClosePopup = app.popup.create({
  el: '.kf14',
  swipeToClose: true,
});
        
var swipeToClosePopup = app.popup.create({
  el: '.kf15',
  swipeToClose: true,
});
        
var swipeToClosePopup = app.popup.create({
  el: '.kf16',
  swipeToClose: true,
});
        
var swipeToClosePopup = app.popup.create({
  el: '.kf17',
  swipeToClose: true,
});
        
var swipeToClosePopup = app.popup.create({
  el: '.kf18',
  swipeToClose: true,
});
        
var swipeToClosePopup = app.popup.create({
  el: '.kf19',
  swipeToClose: true,
});
        
var swipeToClosePopup = app.popup.create({
  el: '.kf20',
  swipeToClose: true,
});
        
var swipeToClosePopup = app.popup.create({
  el: '.kf21',
  swipeToClose: true,
});
        
var swipeToClosePopup = app.popup.create({
  el: '.kf22',
  swipeToClose: true,
});
        
var swipeToClosePopup = app.popup.create({
  el: '.kf23',
  swipeToClose: true,
});
        
var swipeToClosePopup = app.popup.create({
  el: '.kf24',
  swipeToClose: true,
});
        
var swipeToClosePopup = app.popup.create({
  el: '.kf25',
  swipeToClose: true,
});
        
var swipeToClosePopup = app.popup.create({
  el: '.kf26',
  swipeToClose: true,
});
        
var swipeToClosePopup = app.popup.create({
  el: '.kf27',
  swipeToClose: true,
});
        
var swipeToClosePopup = app.popup.create({
  el: '.kf28',
  swipeToClose: true,
});
        
var swipeToClosePopup = app.popup.create({
  el: '.kf29',
  swipeToClose: true,
});
        
var swipeToClosePopup = app.popup.create({
  el: '.kf30',
  swipeToClose: true,
});


