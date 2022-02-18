window.onload = function () {

    var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
          'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
          't', 'u', 'v', 'w', 'x', 'y', 'z'];

    
    var categories;         // Array of topics
    var chosenCategory;     // Selected catagory
    var getHint ;          // Word getHint
    var word ;              // Selected word
    var guess ;             // Guess
    var geusses = [ ];      // Stored guesses
    var lives ;             // Lives
    var counter ;           // Count correct guesses
    var space;              // Number of spaces in word '-'
  
    // Get elements
    var showLives = document.getElementById("mylives");
    var showCatagory = document.getElementById("scatagory");
    var getHint = document.getElementById("hint");
    var showClue = document.getElementById("clue");
    var score_hangman = document.getElementById("score");
  
  
  
    // create alphabet ul
    var buttons = function () {
      myButtons = document.getElementById('buttons');
      letters = document.createElement('ul');
  
      for (var i = 0; i < alphabet.length; i++) {
        letters.id = 'alphabet';
        list = document.createElement('li');
        list.id = 'letter';
        list.innerHTML = alphabet[i];
        check();
        myButtons.appendChild(letters);
        letters.appendChild(list);
      }
    }
      
    
    // Select Catagory
    var selectCat = function () {
      if (chosenCategory === categories[0]){
        catagoryName.innerHTML = "What is the name of the name of the supporting wall of the eyeball?";
      } 
      else if (chosenCategory === categories[1]) {
        catagoryName.innerHTML = "What acts as the eye's outermost lens?";
      } 
      else if (chosenCategory === categories[2]) {
        catagoryName.innerHTML = "The ______ of The eye provides protection and lubrication of the eye by the production of mucus and tears(Fill up the blanks).";
      }
      else if (chosenCategory === categories[3]) {
        catagoryName.innerHTML = "What is transparent, convex structure and located behind the cornea?";
      }
      else if (chosenCategory === categories[4]) {
        catagoryName.innerHTML = "What type of eye muscle help to change the shape of the lens when our eyes focus on a near object?";
      }
      else if (chosenCategory === categories[5]) {
        catagoryName.innerHTML = "What controls the amount of light entering into the eye?";
      }
      else if (chosenCategory === categories[6]) {
        catagoryName.innerHTML = "What is the name of the chamber that is filled between the lens and retina?";
      }
      else if (chosenCategory === categories[7]) {
        catagoryName.innerHTML = "What is name of the membrane that connects the ciliary body and lens of the eye together?";
      }
      else if (chosenCategory === categories[8]) {
        catagoryName.innerHTML = "What is the process that the shape of an eye changes when our eye focus on a near object?";
      }
      else if (chosenCategory === categories[9]) {
        catagoryName.innerHTML = "In dim light, the pupil becomes ___ and more light enters the eye(Fill up the blanks).";
      }
    }
  
    // Create geusses ul
     result = function () {
      wordHolder = document.getElementById('hold');
      correct = document.createElement('ul');
  
      for (var i = 0; i < word.length; i++) {
        correct.setAttribute('id', 'my-word');
        guess = document.createElement('li');
        guess.setAttribute('class', 'guess');
        if (word[i] === "-") {
          guess.innerHTML = "-";
          space = 1;
        } else {
          guess.innerHTML = "_";
        }
  
        geusses.push(guess);
        wordHolder.appendChild(correct);
        correct.appendChild(guess);
      }
    }
    
    // Show lives
     comments = function () {
      showLives.innerHTML = "You have " + lives + " lives";
      if (lives < 1) {
        showLives.innerHTML = "Game Over";
      }
      for (var i = 0; i < geusses.length; i++) {
        if (counter + space === geusses.length) {
          showLives.innerHTML = "You win!";
        }
      }
    }
  
        // Animate man
    var animate = function () {
      var drawMe = lives ;
      drawArray[drawMe]();
    }
  
    
     // Hangman
    canvas =  function(){
  
      myStickman = document.getElementById("stickman");
      context = myStickman.getContext('2d');
      context.beginPath();
      context.strokeStyle = "#fff";
      context.lineWidth = 2;
    };
    
      head = function(){
        myStickman = document.getElementById("stickman");
        context = myStickman.getContext('2d');
        context.beginPath();
        context.arc(60, 25, 10, 0, Math.PI*2, true);
        context.stroke();
      }
      
    draw = function($pathFromx, $pathFromy, $pathTox, $pathToy) {
      
      context.moveTo($pathFromx, $pathFromy);
      context.lineTo($pathTox, $pathToy);
      context.stroke(); 
  }
  
     frame1 = function() {
       draw (0, 150, 150, 150);
     };
     
     frame2 = function() {
       draw (10, 0, 10, 600);
     };
    
     frame3 = function() {
       draw (0, 5, 70, 5);
     };
    
     frame4 = function() {
       draw (60, 5, 60, 15);
     };
    
     torso = function() {
       draw (60, 36, 60, 70);
     };
    
     rightArm = function() {
       draw (60, 46, 100, 50);
     };
    
     leftArm = function() {
       draw (60, 46, 20, 50);
     };
    
     rightLeg = function() {
       draw (60, 70, 100, 100);
     };
    
     leftLeg = function() {
       draw (60, 70, 20, 100);
     };
    
    drawArray = [rightLeg, leftLeg, rightArm, leftArm,  torso,  head, frame4, frame3, frame2, frame1]; 
  
  
    // OnClick Function
     check = function () {
      list.onclick = function () {
        var geuss = (this.innerHTML);
        this.setAttribute("class", "active");
        this.onclick = null;
        for (var i = 0; i < word.length; i++) {
          if (word[i] === geuss) {
            geusses[i].innerHTML = geuss;
            counter += 1;
            score_hangman = counter * 10
          }
        }
        var j = (word.indexOf(geuss));
        if (j === -1) {
          lives -= 1;
          comments();
          animate();
        } else {
          comments();
        }
        console.log(score_hangman);
        score_hangman.innerHTML = "Score: " + score_hangman
      }
    }
    
      
    // Play
    play = function () {
      categories = [
          ["sclera"],
          ["cornea"],
          ["conjunctiva"],
          ["lens"],
          ["ciliary-muscles"],
          ["iris"],
          ["vitreous-chamber"],
          ["suspensory-ligaments"],
          ["accommodation"],
          ["larger"]      
      ];
  
      chosenCategory = categories[Math.floor(Math.random() * categories.length)];
      word = chosenCategory[Math.floor(Math.random() * chosenCategory.length)];
      word = word.replace(/\s/g, "-");
      console.log(word);
      buttons();
  
      geusses = [ ];
      lives = 10;
      counter = 0;
      space = 0;
      result();
      comments();
      selectCat();
      canvas();
    }
  
    play();
    //startTimer();
    
    // Hint
  
      hint.onclick = function() {
  
        hints = [
          ["It is included in the outer fibrous layer"],
          ["It is included in the outer fibrous layer"],
          ["It is included in the outer fibrous layer"],
          ["It is function if to focus light on the retina and fovea centralis"],
          ["It is located in the ciliary body"],
          ["It is located in the vascular layer"],
          ["it is located in the inner layer of the eye"],
          ["This picture:"],
          ["It is conducted in the ciliary muscle"],
          ["The circular muscles of the iris relax, radial muscles contract"]

       ];
  
      var catagoryIndex = categories.indexOf(chosenCategory);
      var hintIndex = chosenCategory.indexOf(word);
      showClue.innerHTML = "Clue: " +  hints [catagoryIndex][hintIndex];
    };
  
     // Reset
  
    document.getElementById('reset').onclick = function() {
      correct.parentNode.removeChild(correct);
      letters.parentNode.removeChild(letters);
      showClue.innerHTML = "";
      context.clearRect(0, 0, 400, 400);
      play();
    }
  }


//export{score_hangman}
  
  