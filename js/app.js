// state variables

// randNum variable
let randNum
// prevGuesses (array)
let prevGuesses = []

// cached element references

//// Guess button
const guessBtn = document.getElementById('guess-button')
//// reset button
const resetBtn = document.getElementById('reset-button')
//// previous guesses element (container)
const previousGuessesEl = document.querySelector('.previous-guesses')
//// <input>
const inputEl = document.querySelector('input')
//// message element
const messageEl = document.getElementById('message')


// event listeners

//// listener for Guess button that calls checkGuess on click or on 'Enter'
guessBtn.addEventListener('click', checkGuess)

//// listener for reset button that calls init
resetBtn.addEventListener('click', init)


// functions

init()

// checkGuess
function checkGuess() {
  resetBtn.style.display = ''
  // (responsible for ...)
  let guess = parseInt(inputEl.value)
  if (guess !== NaN || guess < 1 || guess > 100) {
    // generate error message
    messageEl.textContent = 'Whoops! Please enter a number from 1 to 100!'
  }

  console.log(guess)
}

// generateRandomNum
function generateRandomNum() {
  // (responsible for setting randNum using Math.random())
  randNum = Math.floor((Math.random() * 100) + 1)
  console.log(randNum)
}


// init
function init() {
  generateRandomNum()
  resetBtn.style.display = 'none'
  // (responsible for resetting message element AND calling generateRandomNum)
}

// render
function render() {
  // (responsible for displaying previous guesses, displaying a message indicating high/low, show error if number is out of range or not a number, show reset button (on first guess))
}