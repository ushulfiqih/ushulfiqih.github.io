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
	name: $('.fullname').val(),
	email: $('.email').val(),
	subject: $('.subject').val(),
	message: $('.message').val()
});

$('.success-message').show();

$('#contactForm')[0].reset();
});
