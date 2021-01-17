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
