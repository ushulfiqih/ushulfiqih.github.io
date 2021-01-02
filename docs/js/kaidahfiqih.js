const quotes = [
	{
		"quote" : "اَلْاُمُوْرُ بِمَقَاصِدِهَا",
		"source" : "Setiap perkara itu sesuai dengan maksudnya",
		"contoh" : "contoh 1"
	},
	{
		"quote" : "مَا لَا يُشْتَرَطُ لَهُ التَعَرَّضُ جُمْلَةً وَتَفْصِيْلًا اِذَا عَيَّنَهُ وَاَخْطَاءَ لَمْ يَضُرَّ",
		"source" : "Sesuatu yang tidak disyaratkan menentukannya secara keseluruhan dan detail / terperinci, apabila salah dalam menunjukkan / menentukannya, kesalahan itu tidak merugikan (tidak berbahaya, tidak berpengaruh)",
		"contoh" : "contoh 2"
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
