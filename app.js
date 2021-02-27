const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  userGuess: null,

  // HTML elements
  startButton: document.querySelector("#startButton"),
  userInput: document.querySelector("#gameInput"),
  guessButton: document.querySelector("#guessButton"),
  output: document.querySelector("#gameOutput"),
  
  // Function sets everything up for the game
  play: function() {
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
    this.startButton.innerHTML = "Restart the game!"
    this.userInput.placeholder = "Type your number here"
   

  // This code sets everything to default when the "Start/Restart the game!" button is pressed
    this.userInput.value = ""
    this.guessButton.innerHTML = this.title;
    this.output.innerHTML = "";
  },

  // This code gets the user input and sets it to the game's userGuess property
  getUserInput: function() {
    this.userGuess = this.userInput.value;
    this.output.innerHTML = "You guessed: " + this.userGuess;
    this.checkUserGuess();
  },

  // This code checks if the user's guess is correct and makes a suggestion if they're wrong
  checkUserGuess: function() {
    if (this.userGuess == this.secretNum) {
      this.output.innerHTML = "Awesome, you guessed the right number! The secret number was: " + this.secretNum;
    } else if (this.userGuess < this.secretNum) {
      this.output.innerHTML = this.output.innerHTML + "<br>Try a little higher!";
 
    } else {
      this.output.innerHTML = this.output.innerHTML + "<br>Try a little lower!";
    }
  }
}