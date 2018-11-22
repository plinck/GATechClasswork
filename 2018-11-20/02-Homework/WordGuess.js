class WordGuess {
  constructor(word, guesses) {
    this.reset(word, guesses);
  }

  reset(word, guesses) {
    this.gameInProgress = true;      // true if playing game, false if ended
    this.wins = 0;
    this.wordToGuess = word;
    this.currentGuess = "";
    this.lettersGuessed = "";
    this.guessesRemaining = guesses;
    this.lettersCorrectlyGuessed = "";
    this.nbrLettersGuessedCorrect = 0;
    this.lettersIncorrectlyGuessed = "";
    this.nbrLettersGuessedIncorrect = 0;
    this.guessedCorrectly = false;

    this.makeBlankGuess(word);
  }

  // Make the blank layout of the word
  makeBlankGuess(word) {
    var text = "";
    for (var member in word) {
      // text += "list[member]";
      text += "_";
    }
    this.currentGuess = text;
  }

  // put the letter in the correct spot
  updateCurrentGuess(indicesFound, replacement) {
    var newGuess = this.currentGuess;
    var currGuess = this.currentGuess;

    // Get all the matches in case same letter multiple times
    for (var i = 0; i < indicesFound.length; i++) {
      newGuess =
        currGuess.substr(0, indicesFound[i]) +
        replacement +
        currGuess.substr(indicesFound[i] + replacement.length);
      currGuess = newGuess;
    }

    this.currentGuess = newGuess;
    console.log("newGuess:'" + newGuess + "'");

    if (this.currentGuess == this.wordToGuess.toLowerCase()) {
      this.guessedCorrectly = true;
      this.gameInProgress = false;  // end game, win
    }
  }

  makeAGuess(letter) {
    var lowerLetter = letter.toLowerCase();
    var lowerWord = this.wordToGuess.toLowerCase();

    // var n = lowerWord.search(lowerLetter);

    var indicesFound = [];
    var nbrFound = 0;
    for (var i = 0; i < lowerWord.length; i++) {
      if (lowerWord[i] == lowerLetter) {
        nbrFound += 1;
        indicesFound.push(i);
      }
    }

    // add to letters guessed if they didnt aleady guess it
    // If they already guessed this letter, give them a pass and another try
    if (this.lettersGuessed.search(lowerLetter) < 0) {
      this.lettersGuessed += lowerLetter;
      this.guessesRemaining -= 1;

      if (nbrFound > 0) {
        // add to letters correctly guessed
        this.lettersCorrectlyGuessed += lowerLetter;
        this.nbrLettersGuessedCorrect += 1;

        this.updateCurrentGuess(indicesFound, lowerLetter);
      } else {
        // add to letters Incorrectly guessed
        this.lettersIncorrectlyGuessed += lowerLetter;
        this.nbrLettersGuessedIncorrect += 1;
      }

      // end the game if no more guesses
      if (this.guessesRemaining < 1) {
        this.gameInProgress = false;  // end game, loss
      }

    } else {
      console.log("Already guessed the letter: " + lowerLetter);
    }
  }

  // Print self/this
  print() {
    document.write("wins:" + this.wins + "<br>");
    document.write("wordToGuess:'" + this.wordToGuess + "'" + "<br>");
    document.write("currentGuess:'" + this.currentGuess + "'" + "<br>");
    document.write("lettersGuessed:'" + this.lettersGuessed + "'" + "<br>");
    document.write("guessesRemaining:" + this.guessesRemaining + "<br>");
    document.write("lettersCorrectlyGuessed:'" + this.lettersCorrectlyGuessed + "'" + "<br>");
    document.write("nbrLettersGuessedCorrect:" + this.nbrLettersGuessedCorrect + "<br>");
    document.write("lettersIncorrectlyGuessed:'" + this.lettersIncorrectlyGuessed + "'" + "<br>");
    document.write("nbrLettersGuessedIncorrect:" + this.nbrLettersGuessedIncorrect + "<br>");
  }

  // Log self/this
  log() {
    console.log("wins:" + this.wins);
    console.log("wordToGuess:'" + this.wordToGuess + "'");
    console.log("currentGuess:'" + this.currentGuess + "'");
    console.log("lettersGuessed:'" + this.lettersGuessed + "'");
    console.log("guessesRemaining:" + this.guessesRemaining);
    console.log("lettersCorrectlyGuessed:'" + this.lettersCorrectlyGuessed + "'");
    console.log("nbrLettersGuessedCorrect:" + this.nbrLettersGuessedCorrect);
    console.log("lettersIncorrectlyGuessed:'" + this.lettersIncorrectlyGuessed + "'");
    console.log("nbrLettersGuessedIncorrect:" + this.nbrLettersGuessedIncorrect);
  }
}

// Word Guess
var wordGuess = new WordGuess("Queen", 5);
showState();

console.log("Word to Guess: '" + wordGuess.wordToGuess + "'");
console.log("Wins: " + wordGuess.wins);

// Get the keyboard input
document.addEventListener('keyup', function (event) {

  // wait for a spacebar to keep game going if you just finished
  if (wordGuess.gameInProgress) {
    // Get the character
    var charValue = String.fromCharCode(event.keyCode);
    console.log("You pressed:" + charValue);

    wordGuess.makeAGuess(charValue);
    showState();

    if ((wordGuess.guessesRemaining < 1) || (wordGuess.guessedCorrectly)) {
      if (wordGuess.guessedCorrectly) {
        endGame("You WON! Word is: " + wordGuess.wordToGuess + " - Press Spacebar to restart");
      } else {
        endGame("Game Over, word is: " + wordGuess.wordToGuess + " - you lost, Press Spacebar to restart");
      }

    }
  } else { // wait for spacebar
    if (event.keyCode == 32) {
      wordGuess.reset("Queen", 5);
      showState();
    }
  }

});

function endGame(str) {
  document.getElementById("gameMessage").innerHTML = str;
  // Now wait for spacebar
  continueGame = false;
}

function showState() {
  document.getElementById("currentGuess").innerHTML = wordGuess.currentGuess;
  document.getElementById("guessesRemaining").innerHTML = wordGuess.guessesRemaining;
  document.getElementById("lettersGuessed").innerHTML = wordGuess.lettersGuessed;
  document.getElementById("lettersCorrectlyGuessed").innerHTML = wordGuess.lettersCorrectlyGuessed;
  document.getElementById("lettersIncorrectlyGuessed").innerHTML = wordGuess.lettersIncorrectlyGuessed;
  if (wordGuess.gameInProgress) {
    document.getElementById("gameMessage").innerHTML = "playing ...";
  }
}

/*
var guess;
while (true) {
  guess = prompt("Guess A Letter");

  wordGuess.makeAGuess(guess);

  if (wordGuess.guessesRemaining < 1) {
    console.log("Guesses Remaining: " + wordGuess.guessesRemaining);
    break;
  }
}

wordGuess.log();
wordGuess.print();
*/