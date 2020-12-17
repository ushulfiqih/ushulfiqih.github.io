// Dom7
var $$ = Dom7;

// Framework7 App main instance
var app  = new Framework7({
  root: '#app', // App root element
  id: 'io.framework7.testapp', // App bundle ID
  name: 'ushulfiqih.com', // App name
  theme: 'auto', // Automatic theme detection

    view: {
        pushState: true
    }

  // App root methods
  methods: {
    helloWorld: function () {
      app.dialog.alert('Hello World!');
    },
  },
  // App routes
  routes: routes,
});

// Init/Create views
var homeView = app.views.create('#view-home', {
  url: '/'
});
var literasiView = app.views.create('#view-1', {
  url: '/1/'
});
var settingsView = app.views.create('#view-2', {
  url: '/2/'
});
var settingsView = app.views.create('#view-3', {
  url: '/3/'
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





/* Detect browser can use web storage */
if (!typeof(Storage) !== 'undefined') {
  $('#yay').fadeIn('slow');
} else {
  $('#ooh').fadeIn('slow');
}

/* set it */
$('#set').click(function() {
  var test = $('#text').val();
  localStorage.setItem("Pemustaka", test);
});

/* get it */
$('#get').click(function() {
  $('#val').text(localStorage.getItem("Pemustaka"));
});

/* get it */
$('#get').click(function() {
  $('#val2').text(localStorage.getItem("Pemustaka"));
});

/* remove it */
$('#remove').click(function() {
  localStorage.removeItem("Pemustaka");
});

$('#val').text(localStorage.getItem("Pemustaka"));
$('#val2').text(localStorage.getItem("Pemustaka"));




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



