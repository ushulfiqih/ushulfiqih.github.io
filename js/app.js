// Dom7
var $$ = Dom7;

// Framework7 App main instance
var app  = new Framework7({
  root: '#app', // App root element
  id: 'io.framework7.testapp', // App bundle ID
  name: 'Framework7', // App name
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


// Create swipe-to-close Sheet
app.sheet.create({
  el: '.my-sheet-swipe-to-close',
  swipeToClose: true,
  backdrop: true,
});


// Alert
$$('.open-alert').on('click', function () {
  app.dialog.alert('Hello');
});

// Confirm
$$('.open-confirm').on('click', function () {
  app.dialog.confirm('Are you feel good today?', function () {
    app.dialog.alert('Great!');
  });
});

// Prompt
$$('.open-prompt').on('click', function () {
  app.dialog.prompt('What is your name?', function (name) {
    app.dialog.confirm('Are you sure that your name is ' + name + '?', function () {
      app.dialog.alert('Ok, your name is ' + name);
    });
  });
});

// Login
$$('.open-login').on('click', function () {
  app.dialog.login('Enter your username and password', function (username, password) {
    app.dialog.alert('Thank you!<br>Username:' + username + '<br>Password:' + password);
  });
});

// Password
$$('.open-password').on('click', function () {
  app.dialog.password('Enter your password', function (password) {
    app.dialog.alert('Thank you!<br>Password:' + password);
  });
});

// Vertical Buttons
$$('.open-vertical').on('click', function () {
  app.dialog.create({
    title: 'Vertical Buttons',
    text: 'Dialog with vertical buttons',
    buttons: [
      {
        text: 'Button 1',
      },
      {
        text: 'Button 2',
      },
      {
        text: 'Button 3',
      },
    ],
    verticalButtons: true,
  }).open();
});

// Preloader
$$('.open-preloader').on('click', function () {
  app.dialog.preloader();
  setTimeout(function () {
    app.dialog.close();
  }, 3000);
});

// Preloader with custom text
$$('.open-preloader-custom').on('click', function () {
  app.dialog.preloader('My text...');
  setTimeout(function () {
    app.dialog.close();
  }, 3000);
});

// Progress
$$('.open-progress').on('click', function () {
  var progress = 0;
  var dialog = app.dialog.progress('Loading assets', progress);
  dialog.setText('Image 1 of 10');
  var interval = setInterval(function () {
    progress += 10;
    dialog.setProgress(progress);
    dialog.setText('Image ' + ((progress) / 10) + ' of 10');
    if (progress === 100) {
      clearInterval(interval);
      dialog.close();
    }
  }, 300)
});

// Progress Infinite
$$('.open-progress-infinite').on('click', function () {
  app.dialog.progress();
  setTimeout(function () {
    app.dialog.close();
  }, 3000);
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



