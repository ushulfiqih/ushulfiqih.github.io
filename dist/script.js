var quotes = [
   ["You have to learn the rules of the game. And then you have to play better than anyone else.", "Albert Einstein"],
   ["In the end, it's not the years in your life that count. It's the life in your years.", "Abraham Lincoln"],
   ["Be yourself; everyone else is already taken.", "Oscar Wilde"],
   ["Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.", "Martin Luther King Jr."],
   ["If you don't stand for something you will fall for anything.", "Gordon A. Eadie"]
];

var colors = [
   ["#2ecc71", "#27ae60"],
   ["#1abc9c", "#16a085"],
   ["#e74c3c", "#c0392b"],
   ["#9b59b6", "#8e44ad"],
   ["#66cc66", "#17ad49"],
   ["#2A7E64", "#267359"],
   ["#4F82C4", "#6289CB"]
]


function randomNum(e) {
   return Math.floor(((Math.random() * e.length) + 1) - 1);
}

function randomBackgroundColor() {
   var ranNum = randomNum(colors);
   return colors[ranNum];
}

function randomQuote() {
   var ranNum = randomNum(quotes);
   return quotes[ranNum];
}

var card = document.getElementById('card');
var cardText = document.getElementById('quoteText');
var author = document.getElementById('author');
var authorText = document.getElementById('authorText');
card.onclick = function(){
   var ranColor = randomBackgroundColor();
   card.style.backgroundColor = ranColor[0];
   author.style.backgroundColor = ranColor[1];

   var ranText = randomQuote();
   authorText.innerHTML = ranText[1];
   cardText.innerHTML = ranText[0];
}