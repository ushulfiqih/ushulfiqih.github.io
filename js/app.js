// Dom7
var $$ = Dom7;

// Framework7 App main instance
var app  = new Framework7({
  root: '#app', // App root element
  id: 'io.framework7.testapp', // App bundle ID
  name: 'ushulfiqih.com', // App name
  theme: 'auto', // Automatic theme detection

  // App root methods
  methods: {
    helloWorld: function () {
      app.dialog.alert('Hello World!');
    },
  },
  // App routes
  routes: routes,
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













var thehours = new Date().getHours();
	var themessage;
	var dini = ('Selamat dini hari,');
	var pagi = ('Selamat pagi,');
	var siang = ('Selamat siang,');
	var sore = ('Selamat sore,');
	var senja = ('Selamat menikmati senja,');
	var petang = ('Selamat petang,');
	var malam = ('Selamat malam,');

	if (thehours >= 0 && thehours < 4) {
		themessage = dini;

	} else if (thehours >= 4 && thehours < 10) {
		themessage = pagi;

	} else if (thehours >= 10 && thehours < 14) {
		themessage = siang;

	} else if (thehours >= 14 && thehours < 17) {
		themessage = sore;

	} else if (thehours >= 17 && thehours < 18) {
		themessage = senja;

	} else if (thehours >= 18 && thehours < 19) {
		themessage = petang;

	} else if (thehours >= 19 && thehours < 24) {
		themessage = malam;
	}

	$('.greeting').append(themessage);






function dark_toggle() {
    var el1 = document.getElementById("dark-reader");
    if(el1.disabled) {
        el1.disabled = false;
        localStorage.setItem("darkreader", "enabled");
    } else {
        el1.disabled = true;
        localStorage.setItem("darkreader", "disabled");
    }
}
 if (localStorage.getItem("darkreader") == "enabled") {
     document.getElementById("dark-reader").disabled = false;
 } else {
     document.getElementById("dark-reader").disabled = true;
 }




$(document).ready(function(){
   $('#ambil').load("http://app.smpn21purworejo.sch.id/v7/pages/pengumuman.html");
});

   function onBackKeyDown() {
      mainView.router.navigate('/', {});
}

var app = new Framework7({
  lazy: {
      treshold: 50,
      sequential: false,
  }
})



