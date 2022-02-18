
//Links to different gamepages from game page
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

//Discovery page 2
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


