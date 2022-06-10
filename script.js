'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 15;
let highscore = 0;

const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //   When there is no input
  if (!guess) {
    displayMessage('Input a number!');

    //When the input is correct
  } else if (guess === secretNumber) {
    startConfetti();
    displayMessage('Correct Number!');
    document.querySelector('.check').disabled = true;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }

  // When guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the game!');
      document.querySelector('.check').disabled = true;
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#751212';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = '15';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.check').disabled = false;
  document.querySelector('.guess').value = '';
  stopConfetti();
  score = 15;
});
