const quotes = [
	{
		"quote" : "اَلْاُمُوْرُ بِمَقَاصِدِهَا",
		"source" : "Setiap perkara itu sesuai dengan maksudnya",
		"contoh" : ""
	},
	{
		"quote" : "مَا لَا يُشْتَرَطُ لَهُ التَعَرَّضُ جُمْلَةً وَتَفْصِيْلًا اِذَا عَيَّنَهُ وَاَخْطَاءَ لَمْ يَضُرَّ",
		"source" : "Sesuatu yang tidak disyaratkan menentukannya secara keseluruhan dan detail / terperinci, apabila salah dalam menunjukkan / menentukannya, kesalahan itu tidak merugikan (tidak berbahaya, tidak berpengaruh)",
		"contoh" : ""
	},
	{
		"quote" : "مَا يُشْتَرَطُ فِيْهِ التَعْيِـيْن ُفَالْخَطَاءُ فِيْهِ مُبْطِلٌ",
		"source" : "Sesuatu yang di dalamnya disyaratkan menentukan secara detail / spesifik (ta’yin), maka kesalahan dalam menentukannya akan membatalkan (batal demi hukum)",
		"contoh" : ""
	},
	{
		"quote" : "مَا يُشْتَرَطُ التَعَرُّضُ جُمْلَةً لَا تَفْصِيْلًا اِذَا عَيَّنَهُ وَاَخْطَاءَ ضَرَّ",
		"source" : "Sesuatu yang diharuskan / disyaratkan menentukannya secara lengkap – tidak secara rinci – maka jika ditentukan dan salah dalam menentukannya akan berbahaya",
		"contoh" : ""
	},
	{
		"quote" : "مَقَاصِدُ اللَّفْظِ عَلَى نِـيَّـةِ الْلَافِظِ",
		"source" : "Tujuan lafal tergantung pada maksud pengucapannya / niat orang yang mengucapkannya",
		"contoh" : ""
	},
	{
		"quote" : "اَلْيَقِيْنُ لَايُزَالُ بِالشَكِّ",
		"source" : "Kepastian / keyakinan itu tidak bisa dihilangkan dengan keraguan.",
		"contoh" : ""
	},
	{
		"quote" : "اَلْأَصْلُ بَقَاءُ مَا كَانَ عَلَى مَا كَانَ",
		"source" : "Yang menjadi patokan adalah tetapnya sesuatu menurut keadaan semula.",
		"contoh" : ""
	},
	{
		"quote" : "اَلْأَصْلُ بَرَاءَةُ الذِّمَّةِ",
		"source" : "Menurut asalnya setiap orang itu bebas dari kewajiban / tanggungan.",
		"contoh" : ""
	},
	{
		"quote" : "مَنْ شَكَّ أَفَعَلَ شَيْأً اَمْ لَا فَالْأَصْلُ أَنَّهُ لَمْ يَفْعَلْهُ",
		"source" : "Jika seseorang ragu apakah dia sudah melakukan sesuatu atau tidak, prinsip dasarnya adalah da dianggap belum melakukannya.",
		"contoh" : ""
	},
	{
		"quote" : "مَنْ تَيَقَّنَ الْفِعْلَ وَ شَكَّ فِيْ القَلِيْلِ اَوِالْكَثِيْرِحُمِلَ عَلَى الْقَلِيْلِ",
		"source" : "Seseorang yag yakin telah melakukan pekerjaan namun ragu-ragu tentang sedikit banyaknya perbuatan, maka yang dianggap adalah yang sedikit",
		"contoh" : ""
	},
	{
		"quote" : "اَلْأَصْلُ اَلْعَدَمُ",
		"source" : "Asal (dari segala hukum) adalah ketiadaan (tidak adanya suatu beban)",
		"contoh" : ""
	},
	{
		"quote" : "اَلْأَصْلُ فِيْ كُلِّ حَادِثٍ اَنْ يُقَدَّرَ بِاَقْرَبِ الزَّمَانِ",
		"source" : "Pada dasarnya penetapan suatu peristiwa didasarkan / diperkirakan pada waktu yang terdekat (dengan peristiwa tersebut)",
		"contoh" : ""
	},
	{
		"quote" : "اَلْأَصْلُ فِي الْاَشْيَاءِ اَلْاِبَاحَةْ حَتَّى يَدُلُّ اَلدَّلِيْلُ عَلَى التَّحْرِيْمِ",
		"source" : "Asal dari segala seuatu adalah boleh, sampai ada bukti / petunjuk (dalil) yang menyatakan / menunjukkan bahwa itu adalah haram",
		"contoh" : ""
	},
	{
		"quote" : "اَلْأَصْلُ فِي الْاَبْضَاعِ اَلْحَظْرُ/ اَلتَّحْرِيْمُ",
		"source" : "Hukum asal farji adalah larangan / haram",
		"contoh" : ""
	},
	{
		"quote" : "اَلْأَصْلُ فِي اْلكَلَامِ اَلْحَقِيْقَةِ",
		"source" : "Asal dalam ucapan / perkataan adalah yang benar (hakiki)",
		"contoh" : ""
	},
	{
		"quote" : "اَلْأَصْلُ فِي الْأُمُوْرِ الْعَارِضَةِ اَلْعَدَمُ",
		"source" : "Asalnya dalam setiap asalah / perkara yang datang kemudian adalah tidak ada",
		"contoh" : ""
	},
	{
		"quote" : "اَلْمَشَقَّةُ تَجْلِبُ التَيْسِيْرَ",
		"source" : "Kesukaran membawa / mengharuskan adanya kemudahan",
		"contoh" : ""
	},
	{
		"quote" : "اِذَا ضَاقَ الْاَمْرُ اِتَّسَعَ",
		"source" : "Jika suatu masalah / perkara itu sempit, maka (hukum) menjadi longgar",
		"contoh" : ""
	},
	{
		"quote" : "اِذَا اِتَّسَعَ الْاَمْرُ ضَاقَ",
		"source" : "Jika suatu masalah / perkara itu longgar, maka (hukum) menjadi sempit",
		"contoh" : ""
	},
	{
		"quote" : "اَلضَّرَرُ يُزَالُ",
		"source" : "Kerusakan (kemudharatan) dihilangkan",
		"contoh" : ""
	},
	{
		"quote" : "اَلضَّرُوْرَةُ تُبِيْحُ الْمَحْظُوْرَاتِ",
		"source" : "Keadaan darurat membolehkan sesuatu yang dilarang",
		"contoh" : ""
	},
	{
		"quote" : "مَا اُبِيْحُ لِلضَّرُوْرَةِ يُقَدَّرُ بِقَدْرِضَرَرِهَا",
		"source" : "Sesuatu yang dibolehkan karena darurat, disesuaikan dengan kadar kedaruratannya.",
		"contoh" : ""
	},
	{
		"quote" : "اَلضَّرَرُ لَايُزَالُ بِالضَّرَرِ",
		"source" : "Kemudharatan tidak boleh dihilangkan dengan kemudharatan yang lain (yang setingkat)",
		"contoh" : ""
	},
	{
		"quote" : "إِذَا تَعَارَضَ اَلْمَفْسَدَتَانِ رُوْعِيَ اَعْظَمُهُمَا ضَرَرًا بِاِرْتِكَابِ اَخَفِّهِمَا",
		"source" : "Jika dua kerusakan saling bertentangan / berlawanan, maka sembunyikan yang lebih berat kemudharatannya dengan melaksanakan yang lebih ringan (madharatnya)",
		"contoh" : ""
	},
	{
		"quote" : "دَرْءُ الْمَفَاسِدِ اَوْلَى مِنْ جَلْبِ الْمَصَالِحِ",
		"source" : "Mencegah kejahatan / kerusakan (mafsadah) lebih didahulukan daripada mewujudkan kemaslahatan",
		"contoh" : ""
	},
	{
		"quote" : "اَلْحَاجَةُ تَنْزِلُ مَنْزِلَةَ الضَّرُوْرَةِ عَامَةً كَانَتْ اَوْ خَاصَةً",
		"source" : "Kebutuhan itu menempati tempatnya darurat, baik kebutuhan umum maupun khusus",
		"contoh" : ""
	},
	{
		"quote" : "اَلْعَادَةُ مُحَـكَّمَةٌ",
		"source" : "Adat / kebiasaan bisa dijadikan sumber hukum",
		"contoh" : ""
	},
]

function randomQuote() {
  let random = quotes[Math.floor(Math.random() * quotes.length)];
  quotation.innerText = `“${random.quote}.”`;
  source.innerText = random.source;
	contoh.innerText = random.contoh;
}

randomQuote();

document.querySelector("quotebutton").addEventListener('click', randomQuote)
