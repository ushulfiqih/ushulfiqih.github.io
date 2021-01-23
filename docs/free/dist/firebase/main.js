// Paste the code from Firebase
var config = {
	apiKey: "AIzaSyBnyCkwL36UUWTavh_Li-Ksbzky2aRxxfQ",
	authDomain: "ushulfiqih-89047.firebaseapp.com",
	databaseURL: "https://ushulfiqih-89047-default-rtdb.firebaseio.com",
	projectId: "ushulfiqih-89047",
	storageBucket: "ushulfiqih-89047.appspot.com",
	messagingSenderId: "643670286454",
	appId: "1:643670286454:web:6f0ced96ff67c8caaabf57",
	measurementId: "G-SL8P3RB8RW"
};
firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('datapengguna');

$('#contactForm').submit(function(e) {
e.preventDefault();

var newMessageRef = messagesRef.push();
newMessageRef.set({
	nama: $('.fullname').val(),
	email: $('.email').val(),
	whatsapp: $('.whatsapp').val(),
	gender: $('.gender').val(),
	ulangtahun: $('.ulangtahun').val(),
	instagram: $('.instagram').val(),
	twitter: $('.twitter').val(),
	youtube: $('.youtube').val(),
	password: $('.password').val(),
});

$('.success-message').show();

$('#contactForm')[0].reset();
});

messagesRef.once('value').then((snapshot) => {
    Object.keys(snapshot.val()).forEach((key) => {
        console.log(`nama: ${snapshot.val()[key].nama}`);
        console.log(`email: ${snapshot.val()[key].email}`);
        console.log(`whatsapp: ${snapshot.val()[key].whatsapp}`);
        console.log(`gender: ${snapshot.val()[key].gender}`);
				console.log(`ulangtahun: ${snapshot.val()[key].ulangtahun}`);
				console.log(`instagram: ${snapshot.val()[key].instagram}`);
				console.log(`twitter: ${snapshot.val()[key].twitter}`);
				console.log(`youtube: ${snapshot.val()[key].youtube}`);
				console.log(`password: ${snapshot.val()[key].password}`);
    });
});
