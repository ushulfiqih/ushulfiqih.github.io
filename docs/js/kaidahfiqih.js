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
	{
		"quote" : "اَلْإِجْتِهَادُ لَايُنْقَضُ بِالْإِجْتِهَادِ",
		"source" : "Suatu ijtihad tidak dirusak oleh ijtihad yang lain",
		"contoh" : ""
	},
	{
		"quote" : "اِذَا اجْتَمَعَ فِى الْعِبَادَةِ جَانِبُ اْلحَضَرِ وَجَانِبُ السَّفَرِ غُلِبَ جَانِبُ الْحَضَرِ",
		"source" : "Apabila dalam hal ibadah berkumpul unsur hadlor (mukim) dan unsur safar (berpergian), maka dimenangkan unsur hadlor.",
		"contoh" : ""
	},
	{
		"quote" : "اِذَا تَعَارَضَ اَلْمَانِعُ وَالْمُقْتَضِى غُلِبَ اَلْمَانِعُ",
		"source" : "Apabila terjadi pertentangan antara mani’ (penghalang) dan muktadi (yang ditetapkan), maka dimenangkan mani’.",
		"contoh" : ""
	},
	{
		"quote" : "اَلْإِيْثَارُ فِى اْلقُرَبِ مَكْرُوْهٌ وَفِىْ غَيْرِهَا مَحْبُوْبٌ",
		"source" : "Mendahululkan orang lain dalam hal ibadah itu dimakruhkan, sedangkan dalam hal selain ibadah itu disunahkan.",
		"contoh" : ""
	},
	{
		"quote" : "اَلتَّابِعُ تَابِعٌ",
		"source" : "Pengikut itu mengikuti yang diikuti.",
		"contoh" : ""
	},
	{
		"quote" : "اَلتَّابِعُ لَا يُفْرَدُ بِالْحُكْمِ",
		"source" : "Pengikut itu tidak dihukumi secara tersendiri (dari yang diikuti)",
		"contoh" : ""
	},
	{
		"quote" : "اَلتَّابِعُ يَسْقُطُ بِسُقُوْطِ الْمَتْبُوْعِ",
		"source" : "Pengikut gugur disebabkan gugurnya yang diikuti.",
		"contoh" : ""
	},
	{
		"quote" : "اَلْفَرْعُ يَسْقُطُ اِذَا سَقَطَ اَلْأَصْلُ",
		"source" : "Cabang gugur apabila induknya gugur.",
		"contoh" : ""
	},
	{
		"quote" : "اَلتَّابِعُ لَا يَتَقَدَّمُ عَلَى الْمَتْبُوْعِ",
		"source" : "Pengikut tidak boleh mendahului yang diikuti.",
		"contoh" : ""
	},
	{
		"quote" : "يُغْتَفَرُ فِى التَّوَابِعِ مَا لَا يُغْتَفَرُ فِىْ غَيْرِهَا",
		"source" : "Dimaafkan dalam perkara yang mengikuti, sesuatu yang tidak dimaafkan dalam perkara lain.",
		"contoh" : ""
	},
	{
		"quote" : "يُغْتَفَرُ فِى الشَّيْئِ ضَمْنًا مَالَايُغْتَفَرُ فِيْهِ قَصْدًا",
		"source" : "Sesuatu yang dimaafkan karena ikut-ikutan tidak dapat dimaafkan karena ada kesengajaan.",
		"contoh" : ""
	},
	{
		"quote" : "يُغْتَفَرُ فِى الثَّوَانِى مَالَايُغْتَفَرُ فِى الْأَوَائِلِ",
		"source" : "Dapat dimaafkan (dima’fu) bagi yang menirukan, tapi tidak dapat dimaafkan bagi yang memulainya.",
		"contoh" : ""
	},
	{
		"quote" : "تَصَرُّفُ اْلإِمَامِ لِلرَّعِيَّةِ مَنُوْطٌ بِالْمَصْلَحَةِ",
		"source" : "Tindakan imam terhadap rakyatnya harus dikaitkan dengan kemaslahatan.",
		"contoh" : ""
	},
	{
		"quote" : "اَلْحُدُوْدُ تَسْقُطُ بِالشُّبُهَاتِ",
		"source" : "Hukuman (had) gugur apabila masih meragukan.",
		"contoh" : ""
	},
	{
		"quote" : "اَلشُّبْهَةُ تَسْقُطُ اَلْحُدَّ",
		"source" : "Kesyubhatan menggugurkan hukuman had",
		"contoh" : ""
	},
	{
		"quote" : "اَلشُّبْهَةُ لَاتَسْقُطُ اَلتَّعْزِيْرَ وَتَسْقُطُ اَلْكَفَارَةَ",
		"source" : "Kesyubhatan tidak menggugurkan ta’zir, tapi menggugurkan kafarah.",
		"contoh" : ""
	},
	{
		"quote" : "اَلْحُرُّ لَا يَدْخُلُ تَحْتَ الْيَدِ",
		"source" : "Orang yang merdeka tidak masuk dalam belenggu kekuasaan",
		"contoh" : ""
	},
	{
		"quote" : "اَلْحَرِيْمُ لَهُ حُكْمُ مَا هُوَ حَرِيْمٌ لَهُ",
		"source" : "Yang menjaga sesuatu, hukumnya sama dengan apa yang dijaga",
		"contoh" : "",
		"contoh" : ""
	},
	{
		"quote" : "اِذَا اجْتَمَعَ اَلْأَمْرَانِ فِىْ جِنْسٍ وَاحِدٍ وَلَمْ يَخْتَلِفْ مَقْصُوْدُهُمَا دَخَلَ اَحَدُهُمَا فِى اْلأَخَرِ غَالِبًا",
		"source" : "Apabila dua perkara sejenis berkumpul serta tidak berbeda maksudnya, maka yang satu dimasukkan pada yang lain menurut kebiasaannya",
		"contoh" : ""
	},
	{
		"quote" : "15اِعْمَالُ الْكَلَامِ اَوْلَى مِنْ اِهْمَالِهِ",
		"source" : "Penggunaan kalimat lebih diutamakan dari pengabaiannya",
		"contoh" : ""
	},
	{
		"quote" : "اَلْخَرَاجُ بِالضَّمَانِ",
		"source" : "Adanya keharusan dalam mengganti kerugian, membuat seseorang berhak mendapatkan hasilnya",
		"contoh" : ""
	},
	{
		"quote" : "اَلْخُرُوْجُ مِنَ الْخِلَافِ مُسْتَحَبٌّ",
		"source" : "Keluar dari pertentangan itu diutamakan",
		"contoh" : ""
	},
	{
		"quote" : "اَلدَّفْعُ اَقْوَى مِنَ الرَّفْعِ",
		"source" : "Menolak gugutan lebih baik daripada menghilangkan",
		"contoh" : ""
	},
	{
		"quote" : "اَلرُّخَصُ لَا تُنَاطُ بِالْمَعَاصِى",
		"source" : "Keringanan-keringanan tidak dikaitkan dengan kemaksiatan",
		"contoh" : ""
	},
	{
		"quote" : "اَلرُّخَصُ لَا تُنَاطُ بِالشَّكِّ",
		"source" : "Keringanan tidak dikaitkan dengan keraguan",
		"contoh" : ""
	},
	{
		"quote" : "اَلرِّضَا بِالشَّيْئِ رِضَا بِمَا يَتَوَلَّدُ مِنْهُ",
		"source" : "Rela akan sesuatu, berarti rela pula akan konsekuensi yang ditimbulkan.",
		"contoh" : ""
	},
	{
		"quote" : "اَلْمُتَوَلَّدُ مِنْ مَأْذُوْنٍ فِيْهِ لَا أَ ثَرَ لَهُ",
		"source" : "Hal-hal yang muncul dari sesuatu yang sudah mendapatkan rekomendasi, tidak dapat menimbulkan dampak apapun.",
		"contoh" : ""
	},
	{
		"quote" : "اَلسُّؤَالُ مُعَادٌ بِالْجَوَابِ",
		"source" : "Pertanyaan itu diulangai dalam jawaban",
		"contoh" : ""
	},
	{
		"quote" : "لَا يُـنْـسَبُ اِلَى سَـاكِـتٍ قَوْلٌ وَلَكِنْ اَلسُّكُوْتُ فِيْ مُعْرَضِ الْحَاجَةِ اِلىَ الْبَـيَانِ بَـيَانٌ",
		"source" : "Suatu perkataan tidak dapat disandarkan pada orang yang diam, akan tetapi jika diam pada tempat yang membutuhkan keterangan adalah merupakan keterangan",
		"contoh" : ""
	},
	{
		"quote" : "مَا كَانَ اَكْثَرُ فِعْلًا كَانَ اَكْثَرُ فَضْلًا",
		"source" : "Apa saja yang lebih banyak pekerjaanya, berarti lebih banyak pula keutamaannya",
		"contoh" : ""
	},
	{
		"quote" : "اَلْمُتَعَدِّى اَفْضَلُ مِنَ اْلقَاصِرِ",
		"source" : "Perbuatan yang mencakup kepentingan orang lain lebih utama daripada yang hanya sebatas kepentingan sendiri",
		"contoh" : ""
	},
	{
		"quote" : "اَلْفَرْضُ اَفْضَلُ مِنَ النَّفْلِ",
		"source" : "Fardhu itu lebih utama daripada sunnah",
		"contoh" : ""
	},
	{
		"quote" : "اَلْفَضِيْلَةُ الْمُتَعَلِّقَةُ بِنَفْسِ اْلعِبَادَةِ اَوْلَى مِنَ الْمُتَعَلِّقَةُ بِمَكَانِهَا اَوْزَمَانِهَا",
		"source" : "Keutamaan yang dikaitkan dengan esensi ibadah lebih baik daripada dikaitkan dengan tempatnya",
		"contoh" : ""
	},
	{
		"quote" : "اَلْوَاجِبُ لَا يُتْرَكُ إِلَّا لِوَاجِبٍ",
		"source" : "Sesutau yang wajib tidak dapat ditinggalkan kecuali dengan yang wajib pula",
		"contoh" : ""
	},
	{
		"quote" : "اَلْوَاجِبُ لَايُتْرَكُ لِلسُّنَّةِ / مَالَابُدَّ مِنْهُ لَايُتْرَكُ اِلَّا لِمَا لَابُدَّمِنْهُ / مَالَوْ لَمْ يُشْرَعْ لَمْ يَجُزْ دَلِيْلٌ عَلَى وُجُوْبِهِ / مَا كَانَ مَمْنُوْعًا اِذَا جَازَ وَجَبَ",
		"source" : "Sesuatu yang wajib tidak boleh ditinggalkan dengan melakukan yang sunnah/sesuatu yang pasti tidak boleh ditinggalkan kecuali dengan melakukan yang pasti pula/semua yang dilarang apabila diperbolehkan maka menjadi wajib",
		"contoh" : ""
	},
	{
		"quote" : "مَا اَوْجَبَ اَعْظَمَ الْأَمْرَيْنِ بِخُصُوْصِهِ لَايُوْجِبُ دُوْنَهُمَا بِعُمُوْمِهِ",
		"source" : "Apabila yang mewajibkan yang lebih besar dari dua perkara karena keputusannya, maka tidaklah diwajibkan yang lebih ringan dari keduanya karena keumumannya",
		"contoh" : ""
	},
	{
		"quote" : "مَا ثَبَتَ بِالشَّرْعِ مُقَدَّمٌ عَلَى مَا ثَبَتَ بِالشَّرْطِ",
		"source" : "Apa yang ditetapkan menurut syara’ lebih didahulukan daripada yang ditetapkan menurut syarat",
		"contoh" : ""
	},
	{
		"quote" : "مَاحَرُمَ اِسْتِعْمَالُهُ حَرُمَ اِتِّخَاذُهُ",
		"source" : "Apa saja yang penggunaanya diharamkan, berarti diharamkan pula memperolehnya",
		"contoh" : ""
	},
	{
		"quote" : "مَاحَرُمَ فِعْلُهُ حَرُمَ طَلْبُهُ",
		"source" : "Apa saja yang diharamkan melakukannya, berarti diharamkan pula mencarinya",
		"contoh" : ""
	},
	{
		"quote" : "مَاحَرُمَ أَخْذَهُ حَرُمَ إِعْطَاؤُهُ",
		"source" : "Apa yang haram mengambilnya, maka haram pula memberikannya",
		"contoh" : ""
	},
	{
		"quote" : "اَلْمَشْغُوْلُ لَا يُشْغَلُ",
		"source" : "Sesuatu yang telah dijadikan objek tertentu maka tidak boleh dijadikan objek yang lain",
		"contoh" : ""
	},
	{
		"quote" : "اَلْمُكَبِّرُ لَايُكَبِّرُ",
		"source" : "Yang sudah diperbesar tidak boleh diperbesar",
		"contoh" : ""
	},
	{
		"quote" : "مَنِ اسْتَعْجَلَ شَيْئًا قَبْلَ اَوَانِهِ عُوْقِبَ بِحِرْمَانِهِ",
		"source" : "Barang siapa yang tergesa-gesa terhadap sesuatu yang belum tiba waktunya, maka harus menanggung akibat tidak mendapatkan sesuatu itu",
		"contoh" : ""
	},
	{
		"quote" : "اَلنَّفْلُ اَوْسَعُ مِنَ الْفَرْضِ",
		"source" : "Ibadah sunnah lebih luas daripada ibadah fadlu",
		"contoh" : ""
	},
	{
		"quote" : "اَلْوِلَايَةُ اَلْخَاصَّةُ اَقْوَى مِنَ اْلوِلَايَةِ اَلْعَامَّةِ",
		"source" : "Kekuasaan khusus lebih kuat daripada kekuasaan umum",
		"contoh" : ""
	},
	{
		"quote" : "لَا عِبْرَةَ بِالظَّنِّ اَلْبَـيـِّنِ خَطَأُهُ",
		"source" : "Tidak dapat diperhitungkan sesuatu yang didasarkan kepada perkiraan yang jelas salahnya",
		"contoh" : ""
	},
	{
		"quote" : "اَلْإِسْتِغَالُ بِغَيْرِ الْمَقْصُوْدِ اِعْرَاضٌ عَنِ الْمَقْصُوْدِ",
		"source" : "Berbuat yang tidak dimaksud berarti berpaling dari yang dimaksud",
		"contoh" : ""
	},
	{
		"quote" : "لَا يُنْكِرُ اَلْمُخْتَلَفُ فِيْهِ وَاِنَّمَا يُنْكِرُ اَلْمُجْمَعُ عَلَيْهِ",
		"source" : "Hal-hal yang diperselisihkan itu tidak bisa diingkari, yang wajib diingkari adalah hal-hal yang sudah disepakati",
		"contoh" : ""
	},
	{
		"quote" : "يَدْخُلُ اَلْقَوِيُّ عَلَى الضَّعِيْفِ وَلَاعَكْسَ",
		"source" : "Yang kuat mencakup yang lemah, tapi tidak sebaliknya",
		"contoh" : ""
	},
	{
		"quote" : "يُغْتَفَرُ فِى اْلوَسَائِلِ مَالَا يُغْتَفَرُ فِى الْمَقَاصِدِ",
		"source" : "Dapat dimaafkan karena sebagai sarana, namun tidak dapat dimaafkan kepada maksud yang dituju",
		"contoh" : ""
	},
	{
		"quote" : "اَلْمَيْسُوْرُ لَا يَسْقُطُ بِالْمَعْسُوْرِ",
		"source" : "Sesuatu perbuatan yang mudah dijalankan tidak dapat digugurkan dengan perbuatan yang sukar dijalankan",
		"contoh" : ""
	},
	{
		"quote" : "مَالَايَقْبَلُ اَلتَّبْعِيْضُ فَاخْتِيَارُبَعْضِهِ كَاخْتِيَارُ كُلِّهِ وَإِسْقَاطُ بَعْضِهِ كَإِسْقَاطِ كُلِّهِ",
		"source" : "Sesuatu yang tidak dapat dibagi maka mengusahakan sebagian hukumnya sama dengan mengusahakan keseluruhan, demikian juga menghukum sebagian berarti menggugurkan pula keseluruhannya",
		"contoh" : ""
	},
	{
		"quote" : "اِذَا اجْتَمَعَ اَلْسَبَبُ اَوِالْغُرُوْرُ وَالْمُبَاشَرَةُ قُدِّمَ اَلْمُبَاشَرَةُ",
		"source" : "Apabila antara sebab, tipuan, maupun pelaksanaan langsung berkumpul maka didahulukan pelaksanaan langsung itu",
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
