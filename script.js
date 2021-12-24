'use strict';

// document.querySelector('.message').textContent = '🎉 Угадал!';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 23;
// document.querySelector('.guess').value = 18;

// for (
//     size = 8;
//   let i = ` # # # # # # # # \n# # # # # # # #\n`;;
//   i = i + i
// ) {
//   console.log(i.size());
// }

// for (let n = 1; n <= 100; n++) {
//   let output = '';
//   if (n % 3 == 0) output += 'Fizz';
//   if (n % 5 == 0) output += 'Buzz';
//   console.log(output || n);
// }
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //Когда число не введено
  if (!guess) {
    // document.querySelector('.message').textContent = 'Вы не ввели число ((';
    displayMessage('👮🏽 Вы не ввели число.');

    // Когда число угадано
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '🎉 Угадал!';
    displayMessage('🎉 Угадал!');

    document.querySelector('body').style.backgroundImage =
      'linear-gradient(to top, #cc208e 0%, #6713d2 100%)';

    document.querySelector('.number').style.width = '30rem';

    document.querySelector('.number').textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? 'Меньше' : 'Больше';
      displayMessage(guess > secretNumber ? 'Меньше' : 'Больше');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent =
      //   '🍌 Вы проиграли. Попробуйте ещё раз!';
      displayMessage('🍌 Вы проиграли. Попробуйте ещё раз!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('body').style.backgroundImage =
    'linear-gradient(to top, #30cfd0 0%, #330867 100%)';
  document.querySelector('.number').style.width = '15rem';

  // document.querySelector('.message').textContent = '⭐️ Начать угадывать';
  displayMessage('⭐️ Начать угадывать');
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
});
