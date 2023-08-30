const colorToGuess = document.getElementById('rgb-color');
const balls = document.querySelectorAll('.ball');
const answer = document.getElementById('answer');
const resetBtn = document.getElementById('reset-game');
const scoreText = document.getElementById('score');

function getRandomRGBColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
}

balls.forEach((ball) => {
  const ballConst = ball;
  ballConst.style.backgroundColor = getRandomRGBColor();
});

function generateNewColors() {
  balls.forEach((ball) => {
    const ballConst = ball;
    ballConst.style.backgroundColor = getRandomRGBColor();
  });
}

function getRandomBallColor() {
  const randomIndex = Math.floor(Math.random() * balls.length);
  return balls[randomIndex].style.backgroundColor;
}

function generateAnswer() {
  colorToGuess.innerText = getRandomBallColor();
}

const restartGame = () => {
  colorToGuess.innerHTML = '';
  generateNewColors();
  generateAnswer();
  answer.innerText = 'Escolha uma cor';
};

// function incrementScore() {
//   let currentScore = parseInt(scoreText.innerText);
//   currentScore += 3;
//   scoreText.innerText = currentScore;
// }

function gameFlow() {
  answer.innerText = 'Escolha uma cor';
  generateNewColors();
  generateAnswer();
  balls.forEach((ball) => {
    ball.addEventListener('click', (event) => {
      if (event.target.style.backgroundColor === colorToGuess.innerText) {
        let currentScore = parseInt(scoreText.innerText, 10);
        currentScore += 3;
        scoreText.innerText = currentScore;
        restartGame();
        answer.innerText = 'Acertou!';
      } else {
        answer.innerText = 'Errou! Tente novamente!';
      }
    });
  });
}
resetBtn.addEventListener('click', gameFlow);
gameFlow();
