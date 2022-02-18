

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

$(function() {
  var popup = $('#mainpopup');
  var openSeconds = $("#mainpopup").attr("data-open");
  var dataSrc = $("#mainpopup").attr("data-href");
  

  setTimeout(function(e) {
    popup.modal('show');
    setInterval(function(){}, 1000)
    }, openSeconds * 1000);
  
    $.ajax({
    url: dataSrc,
    dataType: "html",
    success: function(data) {
      $(".modal-body").html(data);
    }
  });
});

function gameOver(){
  var popup = $('#mainpopup');
  //var openSeconds = $("#mainpopup").attr("data-open");
  var dataSrc = $("#mainpopup").attr("data-href");
  
  setTimeout(function(e) {
    popup.modal('show');
    
    $.ajax({
      url: dataSrc,
      dataType: "html",
      success: function(data) {
        $(".modal-body").html(data);
      }
    });
  });
};


function timer() {
  var countDownTime = new Date().getTime() + 300000;
  // Update the count down every 1 second
  var x = setInterval(function () {
      var now = new Date().getTime();
      var distance = countDownTime - now;
      // Time calculations for hours, minutes and seconds
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      // Display the result in the element with id="countdown-spin"
      $('#countdown').html(`
          <div id="countdown-box">
              <div class="countdown-timer">${hours}<div class="countdown-text">HOURS</div></div>
              <div class="countdown-timer">${minutes}<div class="countdown-text">MINS</div></div>
              <div class="countdown-timer">${seconds}<div class="countdown-text">SECS</div></div>
          </div>
      `);
      // Check when timer runs out
      if (distance < 0) {
        $('#countdown-spin').html('GAME EXPIRED'); 
        gameOver();
        //$('#countdown').html('GAME Over'); // Set countdown text to expire when timer runs out
      }
  }, 1000);
}
/*
//Timer
//$(function() {
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
var pretty = ( (mins < 10) ? "0" : "" ) + mins + ":" + ( (secs < 10) ? "0" : "" ) + secs;

document.getElementById("countdown").innerHTML = pretty;
}

startTimer(2*60); // 2 minutes in seconds}
*/
