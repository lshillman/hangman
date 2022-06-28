console.log("I'm a JavaScript file linked to this page!");

var gameContainer = document.getElementById("game");
var guessContainer = document.getElementById("guessContainer");
var winEl = document.getElementById("wins");
var lossEl = document.getElementById("losses");
var timerHeader = document.getElementById("timeRemaining");

var randomWord;
var randomWordArray;
var blanks = [];
var wins;
var losses;
var secondsRemaining = 40;


// As a user, I want to start the game by clicking on a button. 
    // get the id of the button and add an eventlistener
var startGameBtn = document.getElementById("startGameBtn");
startGameBtn.addEventListener("click", startGame);

    // add an eventlistener to the window to listen for keypresses
document.addEventListener("keydown", keyPressed);
var clock = document.getElementById("timer");

function keyPressed(k) {
    evaluateGuess(k.key);
}

function evaluateGuess(key) {
    if (randomWord.includes(key)) {
        console.log("GOOD JOB!");
        for (i=0; i < randomWord.length; i++) {
            if (randomWord[i] == key) {
                blanks[i] = key;
            }
        }
        guessContainer.innerHTML = blanks.join("");
        if (blanks.toString() == randomWord.toString() && secondsRemaining > -1) {
            finishGame("win");
        }
    } else {
        console.log("sad trombone");
    }
}



function startGame() {
    console.log("Start game was clicked!");
    startGameBtn.setAttribute("style", "display: none;")
    gameContainer.setAttribute("style", "display: block;")
    timerHeader.setAttribute("style", "display: block;")
    chooseWord();
    updatePositions();
    startCountDown();
}

    // have an array of some words.
var words = ["supercalifragilisticexpialidocious", "nitwit", "blubber", "oddment", "tweak", "bulbous", "bouffant", "mukluks", "macadamia"];

    // select a word from the array of words at random
function chooseWord() {
    blanks = [];
    randomWord = words[Math.floor(Math.random() * words.length)].split("");
    for (i=0; i < randomWord.length; i++) {
        blanks.push("_")
    }
}

    // display blanks to the user for each letter of the selected word
function updatePositions() {
    guessContainer.innerHTML = blanks.join("");
}



// As a user, I want to try and guess a word by filling in a number of blanks that match the number of letters in that word.


    // add an eventlistener to the window to listen for keypresses
    // replace blanks with correct guesses
    // if we were nice: keep track of incorrect guesses

// As a user, I want the game to be timed
    // setInterval thing

var interval;
function startCountDown(){
    interval = setInterval(function(){
        if (secondsRemaining > -1){
            clock.innerHTML = secondsRemaining;
            secondsRemaining--;
        } else {
            clearInterval(interval);
            finishGame("lose");
        }
    }, 1000);
}

function finishGame(condition) {
    if (condition == "win") {
        console.log ("YOU WON");
        wins++;
        localStorage.setItem("wins", wins);
    } else {
        console.log ("YOU LOST");
        losses++;
        localStorage.setItem("losses", losses);
    }
    renderStats()
    clearInterval(interval);
    secondsRemaining = 40;
    clock.innerHTML = secondsRemaining;
    startGameBtn.setAttribute("style", "display: block;");
    gameContainer.setAttribute("style", "display: none;");
    timerHeader.setAttribute("style", "display: none;");

}


function renderStats() {
    if (localStorage.getItem("wins") != null) {
        wins = localStorage.getItem("wins");
    } else {
        wins = 0;
    }
    if (localStorage.getItem("losses") != null) {
        losses = localStorage.getItem("losses");
    } else {
        losses = 0;
    }
    winEl.innerHTML = wins;
    lossEl.innerHTML = losses;
}

function init() {
    renderStats();
}

init();

// As a user, I want to win the game when I have guessed all the letters in the word.
    // if all blanks have been replaced, AND there is time left, I win

// As a user, I want to lose the game when the timer runs out before I have guessed all the letters.
    // if blanks remain when timer reaches 0, I lose

// As a user, I want to see my total wins and losses on the screen.
    // at the end of each game, increment wins or losses, and display to user via "wins" and "losses" in the page footer

