
$(document).ready(function(){
  $("#myBtn").click(function(){
    $("#myModal").modal();
  });
});

$(document).ready(function(){
      $("#gamesModal").modal('show');
  });
const switchers = [...document.querySelectorAll('.switcher')]

switchers.forEach(item => {
item.addEventListener('click', function() {
  switchers.forEach(item => item.parentElement.classList.remove('is-active'))
  this.parentElement.classList.add('is-active')
})
})

function function_crossword(){
window.open("crossword.html");
}

function function_hangman(){
window.open("hangman.html");
}


