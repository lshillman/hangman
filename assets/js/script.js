console.log("I'm a JavaScript file linked to this page!");


// As a user, I want to start the game by clicking on a button. 
    // get the id of the button and add an eventlistener
var startGameBtn = document.getElementById("startGameBtn");
startGameBtn.addEventListener("click", startGame);

    // add an eventlistener to the window to listen for keypresses
document.addEventListener("keydown", keyPressed);

function keyPressed(k) {
    evaluateGuess(k.key);
}

function evaluateGuess(key) {
    if (randomWord.includes(key)) {
        console.log("GOOD JOB!");
    } else {
        console.log("sad trombone");
    }
}

var gameContainer = document.getElementById("game");
var guessContainer = document.getElementById("guessContainer");

var randomWord;

function startGame() {
    console.log("Start game was clicked!");
    startGameBtn.setAttribute("style", "display: none;")
    gameContainer.setAttribute("style", "display: block;")
    chooseWord();
    displayBlanks();
}

    // have an array of some words.
var words = ["supercalifragilisticexpialidocious", "nitwit", "blubber", "oddment", "tweak", "bulbous", "bouffant", "mukluks", "macadamia"];

    // select a word from the array of words at random
function chooseWord() {
    randomWord = words[Math.floor(Math.random() * words.length)];
}

    // display blanks to the user for each letter of the selected word
function displayBlanks() {
    var blanks = "";
    for (i=0; i < randomWord.length; i++) {
        blanks += "_";
    }
    guessContainer.innerHTML = blanks;
}



// As a user, I want to try and guess a word by filling in a number of blanks that match the number of letters in that word.


    // add an eventlistener to the window to listen for keypresses
    // replace blanks with correct guesses
    // if we were nice: keep track of incorrect guesses

// As a user, I want the game to be timed
    // setInterval thing

// As a user, I want to win the game when I have guessed all the letters in the word.
    // if all blanks have been replaced, AND there is time left, I win

// As a user, I want to lose the game when the timer runs out before I have guessed all the letters.
    // if blanks remain when timer reaches 0, I lose

// As a user, I want to see my total wins and losses on the screen.
    // at the end of each game, increment wins or losses, and display to user via "wins" and "losses" in the page footer

