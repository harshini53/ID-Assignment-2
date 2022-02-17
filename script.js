

function function_crossword(){
window.open("crossword.html");
}

function function_hangman(){
window.open("hangman.html");
}
function er1btnFunction(){
  window.open("https://www.science.edu.sg/for-schools/resources");
  }
function er2btnFunction(){
  window.open("https://www.science.edu.sg/for-schools/resources");
  }
function er3btnFunction(){
  window.open("https://www.teachstarter.com/au/learning-area/science/");
  }

function changeImage() {
  var image = document.getElementById('myImage');
  if (image.src.match("images/dilationofeye2")) {
    image.src = "images/dilationofeye1.jpg";
  } else {
    image.src = "images/dilationofeye2.jpg";
  }
}

$(document).ready(function() {
  $('[data-toggle="popover"]').popover({
     placement: 'top',
     trigger: 'hover'
  });
});

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}

//Timer
var timeInSecs;
var ticker;


function startTimer(secs) {
  timeInSecs = parseInt(secs);
  ticker = setInterval("tick()", 1000); 
}

function tick( ) {
  var secs = timeInSecs;
  if (secs > 0) {
  timeInSecs--; 
}
else {
  clearInterval(ticker);
  startTimer(2*60); // 2 minutes in seconds
}

var mins = Math.floor(secs/60);
secs %= 60;
var time = ( (mins < 10) ? "0" : "" ) + mins + ":" + ( (secs < 10) ? "0" : "" ) + secs;

document.getElementById("countdown").innerHTML = time;
}

startTimer(2*60); // 2 minutes in seconds

