'use strict';
let cal=new Calendar();
cal.attachTo(document.getElementById('calendar'));

function openSidebar(){
	document.getElementById("mySidebar").style.display = "block"
}

function closeSidebar(){
	document.getElementById("mySidebar").style.display = "none"
}

function dropdown(el){
	if(el.className.indexOf('expanded')==-1){
		el.className=el.className.replace('collapsed','expanded');
	}else{
		el.className=el.className.replace('expanded','collapsed');
	}
}

function selectLang(el){
	el.children[0].checked=true;
	cal.setLanguage(el.children[0].value)
}

function setYear(){
	let el=document.getElementById('valYear');
	cal.setFullYear(el.value)
}

function setMonth(){
	let el=document.getElementById('valMonth');
	cal.setMonth(el.value)
}

function setTheme(){
	let el=document.getElementById('txtTheme');
	let n=parseInt(el.value);
	if(!isNaN(n))cal.setTheme(n);
	else cal.setTheme(el.value)
}

function setTodayTimeout(){
	let el=document.getElementById('valTimeout');
	cal.setTodayTimeout(el.value)
}
