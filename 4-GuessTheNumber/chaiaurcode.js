const form = document.querySelector('form');
let ans = parseInt(Math.random() * 100 + 1);

const userInput = document.querySelector('#guessField');
const sub = document.querySelector('#subt');
const guesses = document.querySelector('.guesses');
const guessesRemaining = document.querySelector('.lastResult');
const lOrH = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');
const p = document.createElement('p');

let prevGuess = [];
let numGuesses = 0;
let playGame = true;

if (playGame) {
  sub.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert(`Please enter a valid number!`);
  } else if (guess > 100 || guess < 1) {
    alert(`Please enter a number between 1 and 100 only!`);
  } else {
    prevGuess.push(guess);
    displayGuess(guess);
    if (numGuesses === 10) {
      displayMessage(`Game Over! The correct no. was ${ans}`);
      endGame();
    } else {
      checkGuess(guess);
    }
  }
}
function checkGuess(guess) {
  if (guess === ans) displayMessage(`You guessed it right!`);
  else if (guess < ans) displayMessage(`You guessed it too low!`);
  else if (guess > ans) displayMessage(`You guessed it too high!`);
}
function displayGuess(guess) {
  userInput.value = '';
  guesses.innerHTML += `${guess}, `;
  numGuesses++;
  guessesRemaining.innerHTML = `${10 - numGuesses}`;
}

function displayMessage(message) {
  lOrH.innerHTML = `<h2>${message}</h2>`;
}
function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function () {
    ans = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuesses = 0;
    guesses.innerHTML = '';
    guessesRemaining.innerHTML = '10';
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    lOrH.innerHTML = '';
    playGame = true;
  });
}
function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id = 'newGame'> Start a new game </h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}
