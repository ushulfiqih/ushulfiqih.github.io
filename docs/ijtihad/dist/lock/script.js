var rows = document.querySelectorAll(".ref p span");
for (var i = rows.length - 1; i >= 0; i--) {
	rows[i].style.animationDelay = Math.random() * -30 +"s";
};
var widths = [8, 6, 10, 12, 5, 9, 5, 3];
rows = document.querySelectorAll(".ref p");
for (var i = rows.length - 1; i >= 0; i--) {
	rows[i].querySelector("span:first-child").style.width = widths[i] + "vmax";
	rows[i].querySelector("span:nth-child(2)").style.left = "calc(50% - " + widths[i]/2 + "vmax - 1.2vmax)";
	rows[i].querySelector("span:last-child").style.left = "calc(50% + " + widths[i]/2 + "vmax + 1.2vmax)";
};

var updateTimeDate = function()
{
	var d = new Date();
	document.querySelector("h1").textContent = d.getHours() + ":" + (d.getMinutes() < 10 ? "0" + d.getMinutes() : d.getMinutes());

	var days = ["Ahad","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu"];
	var months = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September","Oktober","November","Desember"];
	document.querySelector("h2").textContent = days[d.getDay()] + ", " + d.getDate() + " "+ months[d.getMonth()] ;
	setTimeout(updateTimeDate,5000);
}
updateTimeDate();
