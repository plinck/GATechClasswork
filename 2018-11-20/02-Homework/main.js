/* **********************************************************************************
 * Main Program
 * main is the "view controller" that interacts with web page which is the view
 * WordGuess stores the game info, words, and progress (the "model") and contains the logic
 * to run the game - like amn app controller.
 * NOTE:  I have this all done in one class per the instructions, but it really should
 * be divided into a few.  WordGuess would be the overall game running mutiple
 * times and storing the list of word choices.
 * Another class "word" we be the logic and data for a guess.  WordGuess
 * would create 1..n "word" objects for each time they tried.
 ********************************************************************************** */

var audioStart = new Audio("sounds/Pacman_Introduction_Music-KP.mp3"); // Audio to start the game
var audioCorrect = new Audio("sounds/Strong_Punch-Mike_Koenig.mp3"); // Audio if you got it correct
var audioIncorrect = new Audio("sounds/Buzzer-SoundBible.com.mp3"); // Audio if you got it wrong

// Create wordGuess game object to run the game
var wordGuess = new WordGuess("Queen", 5);
displayGameStatus();

// Get the keyboard input - whenever a key is press
// I use *spacebar* to strat the game so the user does not accidentally start it
document.addEventListener('keyup', function (event) {
  
  // Get user input guesses if the game is in progress, otherwise
  // wait for the spacebar key to start the game
  if (wordGuess.gameInProgress) {
    // Get the character pressed
    var charValue = String.fromCharCode(event.keyCode);

    // Make sure the character is a valid letter and if it is not, just igore it and move on
    // Only accept keycodes for 'a' (65) through 'z' (90)
    if ((event.keyCode >= 65) && (event.keyCode <= 90)) {
      wordGuess.makeAGuess(charValue);
      displayGameStatus();

      if ((wordGuess.guessesRemaining < 1) || (wordGuess.guessedCorrectly)) {
        if (wordGuess.guessedCorrectly) {
          endGame("You WON! Word is: " + wordGuess.wordToGuess + " - Press Spacebar to restart");
        } else {
          endGame("Game Over, word is: " + wordGuess.wordToGuess + " - you lost, Press Spacebar to restart");
        }
      }
    } // if keycodes 'a' - 'z'

  } // if game in progress
  else { 
    // wait for spacebar
    if (event.keyCode == 32) {
      wordGuess.reset("Queen", 5);
      wordGuess.gameInProgress = true; // start the gamne
      displayGameStatus();
      audioStart.play();
    }
  } // else 

});

// End the current game
function endGame(str) {
  // Display Message
  document.getElementById("gameMessage").innerHTML = str;

  // Play game end audio
  if (wordGuess.guessedCorrectly) {
    audioCorrect.play();
  } else {
    audioIncorrect.play();
  }

}

function displayGameStatus() {
  document.getElementById("currentGuess").innerHTML = wordGuess.currentGuess;
  document.getElementById("guessesRemaining").innerHTML = wordGuess.guessesRemaining;
  document.getElementById("lettersGuessed").innerHTML = wordGuess.lettersGuessed;
  document.getElementById("lettersCorrectlyGuessed").innerHTML = wordGuess.lettersCorrectlyGuessed;
  document.getElementById("lettersIncorrectlyGuessed").innerHTML = wordGuess.lettersIncorrectlyGuessed;
  if (wordGuess.gameInProgress) {
    document.getElementById("gameMessage").innerHTML = "playing ...";
  }
  document.getElementById("nbrWins").innerHTML = "Number of Wins: " + wordGuess.nbrWins;
}