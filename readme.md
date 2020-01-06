# Project-Whack
Project 1 Whack A mole "Whack a Dalek" - a homage to a classic Doctor Who monster.
It is hosted on: http://www.joyceliow.com/Project_1/mole.html
Instructions: 
The objective of this game is to click on as many figures that will pop up randomly from two rows of three holes each. 
One point is granted for each figure clicked on. The score is displayed on the scoreboard.
The game play for level 1 lasts 12 seconds. 
If the player has a score of 6 or more in level 1, she/he moves on to the next level, where the game play time is shortened by 80% and the speed of the figures popping up is sped up by 80%.
Players have the option of continuing to the next level or exiting the game via a confirmation window.
Technologies used: 
Separate HTML, CSS and vanilla JavaScript files (no jQuery) are used for the game. 
In the HTML file, direct links to the audio files that are locally hosted are maintained. All sources of the files are credited in the footer displayed.
In the CSS file, 
    - all the visual elements of the game are in the div with the class of "game". 
    - CSS flexbox technology is used for the "game" class. 
    -reference is made to the downloaded font family Dr Kabel to maintain a "Doctor Who" look. 
    - transitions are defined so that the figures will "pop" in and out of the holes, otherwise, the figures will just "blink" ie appear and disappear. 
In the JavaScript file,
    - global variables defined: time of game play, baseline minimum and maximum time for which the mole will be up, score, and score requirement to advance to the next level. 
    - DOM manipulation is used to control the mole movements, which holes moles pop out of and, for the updates of the score. 
    - random functions are used in the calculation of the length of  time the moles peep up and down from the holes, and the holes the moles peep from.
    - checks are made to ensure that it is an user event, in this case, defined as "clicks" are used to score (.isTrusted)
    - there is no additional installation required. 