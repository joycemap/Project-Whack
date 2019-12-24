// Whack a Mole Game, except that the Moles are visually Daleks from Doctor Who
//There are five functions : 
// startGame - start button is hit, cue the theme song, and start the game
// randomTime - time for the mole to pop up
// randomHole - hole from which the mole will pop up from
// hit - the function where the moles are hit, each mole scores a point of one
// level
// Inspired by https://javascript30.com 

// Define the global variables; selecting all
var holes = document.querySelectorAll('.hole');
var scoreBoard = document.querySelector('.score');
var moles = document.querySelectorAll('.mole');
var lastHole;
var timeUp = false;
var score = 0;
var scoreRequirement = 3; //score requirement to move on to next level
var level = 1;
var globalminTime = 400;
var globalmaxTime = 1500;
var globalTimeUp = 15000;

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
    level = 1;
    peep(globalminTime,globalmaxTime);
    setTimeout(() => timeUp = true, globalTimeUp)
    audioClick();
  }
  function nextLevel() {
    scoreBoard.textContent = 0;
    timeUp = false;
    score = 0;
    scoreRequirement += 1; 
    level += 1;
    globalminTime = globalminTime * 0.8;
    globalmaxTime = globalmaxTime * 0.8;
    globalTimeUp = globalTimeUp * 0.8;
    peep(globalminTime,globalmaxTime);
    setTimeout(() => timeUp = true, globalTimeUp);
    audioClick();
  }

  function peep(minTime,maxTime) {
    var time = randomTime(minTime, maxTime);{
      console.log(time)
    }
    var hole = randomHole(holes);
    hole.classList.add('up');
    setTimeout(() => {
      hole.classList.remove('up');
      if (!timeUp) peep(minTime,maxTime); 
      else { 
        if (score >= scoreRequirement) {
         if (confirm("Run or face more Daleks on level " + (level+1) + "?"))
          nextLevel();
          else alert("See you another wibbly wobbly, timey wimey then!");
        }
        else alert("Time's Up! You exterminated Daleks on level " + (level-1) + "!");
    
      } 
    }, time);
    
    audioPeep();
    audioClick();  
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