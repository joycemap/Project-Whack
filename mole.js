// Whack a Mole Game, except that the Moles are visually Daleks from Doctor Who
//There are five functions : 
// startGame - start button is hit, cue the theme song, and start the game
// countdown - imposing a time restriction on game play to 15 seconds; 
// randomTime - time for the mole to pop up
// randomHole - hole from which the mole will pop up from
// hit - the function where the moles are hit, each mole scores a point of one
// Inspired by https://javascript30.com and 

// Define the global variables; selecting all
var holes = document.querySelectorAll('.hole');
var scoreBoard = document.querySelector('.score');
var moles = document.querySelectorAll('.mole');
var lastHole;
var timeUp = false;
var score = 0;

//Create the randomTime function to make the moles peep from the hole
  function randomTime(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }
  //
  function randomHole(holes) {
    var index = Math.floor(Math.random() * holes.length);
    var hole = holes[index];
     if (hole === lastHole) {
       console.log('Repeated hole');
       return randomHole(holes);
     }
     lastHole = hole;
    return hole;
   }
   function startGame() {
    scoreBoard.textContent = 0;
    timeUp = false;
    score = 0;
    peep();
    setTimeout(() => timeUp = true, 15000)
    audioClick();
  }

  function peep() {
    var time = randomTime(400, 1500);{
      console.log(time)
    }
    var hole = randomHole(holes);
    hole.classList.add('up');
    setTimeout(() => {
      hole.classList.remove('up');
      if (!timeUp) peep() 
      //}else{alert("Time's Up!") }
    }, time);
    
    audioPeep();
      
  }

  function hit(e) {
    if(!e.isTrusted) return; // cheater!
    score++;
    this.parentNode.classList.remove('up');
    scoreBoard.textContent = score;
   
  }

  moles.forEach(mole => mole.addEventListener('click', hit));
  
  
 
  function audioPeep() {
    var audio = document.getElementById("audioPeep");
    audio.play();
};

function audioClick() {
    var audio = document.getElementById("audioClick");
    audio.play();
};