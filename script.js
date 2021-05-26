'use strict';

const highScoreContent = document.querySelector('.highscore');
const scoreContent = document.querySelector('.score');
const message = document.querySelector('.message');
const number = document.querySelector('.number');
const again = document.querySelector('.again');
const check = document.querySelector('.check');
const body = document.querySelector('body');

// generate a random number between 1 and 20.
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let highScore = 0;
let score = 20;
//document.querySelector('.number').textContent = secretNumber;

// check for number
check.addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // when there is no guess
  if (!guess) {
    message.textContent = '❌ No number';
    // correct guess
  } else if (guess === secretNumber) {
    number.textContent = secretNumber;
    displayMessage('💥 Correct number');
    body.style.backgroundColor = '#60b347';
    number.style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      highScoreContent.textContent = highScore;
    }
    // wrong guess
  } else if (guess !== secretNumber) {
    if (score > 1) {
      guess > secretNumber
        ? displayMessage('⬆ Too high')
        : displayMessage('⬇ Too low');
      score--;
      scoreContent.textContent = score;
    } else {
      displayMessage('😟 You lost the game!');
      scoreContent.textContent = 0;
    }
  }
});

again.addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  number.textContent = '?';
  displayMessage('Start guessing...');
  scoreContent.textContent = score;
  number.style.width = '15rem';
  document.querySelector('.guess').value = '';
  body.style.backgroundColor = '#222';
});

const displayMessage = function (msg) {
  message.textContent = msg;
};
