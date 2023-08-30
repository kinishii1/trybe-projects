const cardInput = document.getElementById('carta-texto');
const generatedCard = document.getElementById('carta-gerada');
const generateBtn = document.getElementById('criar-carta');
const countWordsText = document.getElementById('carta-contador');

const styleClasses = [
  ['newspaper', 'magazine1', 'magazine2'],
  ['medium', 'big', 'reallybig'],
  ['rotateleft', 'rotateright'],
  ['skewleft', 'skewright']];

generatedCard.innerHTML = 'Por favor, digite o conteúdo da carta.';

function addRandomStyle(element) {
  for (const styleGroup of styleClasses) {
    const randomIndex = Math.floor(Math.random() * styleGroup.length);
    const randomClass = styleGroup[randomIndex];
    element.classList.add(randomClass);
  }
}

function clearStyle(word) {
  const wordToClear = word;
  wordToClear.classList = [];
}

function randomClassWord() {
  const words = document.querySelectorAll('span');
  words.forEach((word) => {
    word.addEventListener('click', (event) => {
      const clickedWord = event.target;
      clearStyle(clickedWord);
      addRandomStyle(clickedWord);
    });
  });
}

const countCards = () => {
  const words = document.querySelectorAll('span');
  const countWord = words.length;
  countWordsText.innerText = countWord;
};

generateBtn.addEventListener('click', () => {
  generatedCard.innerHTML = '';
  if (cardInput.value.trim() === '') {
    generatedCard.innerHTML = 'Por favor, digite o conteúdo da carta.';
  } else {
    const texto = cardInput.value;
    const palavras = texto.split(' ');

    for (const palavra of palavras) {
      const span = document.createElement('span');
      span.textContent = palavra;
      addRandomStyle(span);
      generatedCard.appendChild(span);
      randomClassWord();
      countCards();
    }
  }
});
