// Whack a Mole Game, except that the Moles are visually Daleks from Doctor Who
//There are five functions : 
// startGame - start button is hit, cue the theme song, and start the game
// randomTime - time for the mole to pop up
// randomHole - hole from which the mole will pop up from
// hit - the function where the moles are hit, each mole scores a point of one
// level - players move through the levels of increasing speed and shortened game play time of 80% of the previous level. 
// Inspired by Wes Bos'JavaScript 30 course and SEI 19's Teo Boon Hock Whack a mole project

// Define the global variables; selecting all
var holes = document.querySelectorAll('.hole');//DOM manipulation for the holes
var scoreBoard = document.querySelector('.score');//DOM manipulation for the score display
var moles = document.querySelectorAll('.mole');//DOM manipulation for the mole display
var lastHole;//defining the last hole variable is to ensure that the moles don't keep popping out of the same holes 
var timeUp = false;// global game play state is not timeUp
var score = 0;// starting score is 0, score increment is calculated in the function 
var scoreRequirement = 3; //score requirement to move on to next level
var level = 1;//starting level for the game
var globalminTime = 400;// minimum time for "moles" to be up. 
var globalmaxTime = 1500;// maximum time for "moles" to be up.
var globalTimeUp = 12000;//total game play time

//Create the randomTime function to make the moles peep from the hole
  function randomTime(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }
  //
  function randomHole(holes) {
    var index = Math.floor(Math.random() * holes.length);
    var hole = holes[index];
     if (hole === lastHole) {
       console.log('Repeated hole');// the essence of a "whack a mole" game is randomness, so if the hole is repeated, the randomfunction has to be run again.  
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
    setTimeout(() => timeUp = true, globalTimeUp)//controls the timer for game play, passing in the global variable for the game play time
    audioClick();
  }
  function nextLevel() {
    scoreBoard.textContent = 0;
    timeUp = false;
    score = 0;//resets score back to 0 for the next level
    // scoreRequirement += 1; 
    level += 1;
    globalminTime = globalminTime * 0.8;//reduces time for the figure to be visible by 80%
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
        else alert("Time's up! You exterminated Daleks on level " + (level-1) + "!");
    
      } 
    }, time);
    
    audioClick(); 
    audioPeep();
    
  }

  function hit(e) {
    if(!e.isTrusted) return; // the .isTrusted event checks whether the "hit" was generated by clicks from the user
    score++;
    this.parentNode.classList.remove('up');//if mole is hit, remove the 'up' state. 
    scoreBoard.textContent = score;//inserts score on scoreboard after each hit
   
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
