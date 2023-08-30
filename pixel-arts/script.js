const board = document.getElementById('pixel-board');

function createColors() {
  const colorList = document.getElementById('color-palette');
  const colors = ['blue', 'yellow', 'black', 'green'];

  for (const color of colors) {
    const liItem = document.createElement('li');
    liItem.innerText = color;
    liItem.className = 'color';
    liItem.style.backgroundColor = color;
    colorList.appendChild(liItem);
  }
}

function createBoard() {
  for (let i = 0; i < 25; i += 1) {
    const pixel = document.createElement('div');
    pixel.className = 'pixel';
    board.appendChild(pixel);
  }
}

function saveLocalStorage(index, selectedColor) {
  const existingPixelInfo = JSON.parse(localStorage.getItem('pixelBoard')) || [];

  const existingIndex = existingPixelInfo.findIndex((item) => item.index === index);

  if (existingIndex !== -1) {
    existingPixelInfo.splice(existingIndex, 1);
  }

  existingPixelInfo.push({ index, selectedColor });

  localStorage.setItem('pixelBoard', JSON.stringify(existingPixelInfo));
}

function paintColor() {
  const selectedItem = document.querySelector('.selected');
  const selectedColor = selectedItem.style.backgroundColor;
  const pixels = document.querySelectorAll('.pixel');

  pixels.forEach((pixel) => {
    pixel.addEventListener('click', (event) => {
      const clickedPixel = event.target;
      const indexPixel = Array.from(pixels).indexOf(clickedPixel);
      clickedPixel.style.backgroundColor = selectedColor;
      saveLocalStorage(indexPixel, selectedColor);
    });
  });
}

function selectColor() {
  const colors = document.querySelectorAll('li');

  colors.forEach((color) => {
    color.addEventListener('click', (event) => {
      colors.forEach((c) => {
        c.classList.remove('selected');
      });
      event.target.classList.add('selected');
      paintColor();
    });
  });
}

const clearLocalStorageBoard = () => {
  localStorage.clear('pixelBoard');
};

const clearBoard = () => {
  const pixels = document.querySelectorAll('.pixel');
  pixels.forEach((pixel) => {
    const pixelElement = pixel;
    pixelElement.style.backgroundColor = 'white';
    clearLocalStorageBoard();
  });
};

function createClearBtn() {
  const referenceElement = document.getElementById('color-palette');
  const clearBtn = document.createElement('a');
  clearBtn.id = 'clear-board';
  clearBtn.innerText = 'Limpar';
  clearBtn.addEventListener('click', clearBoard);
  referenceElement.insertAdjacentElement('afterend', clearBtn);
}

function generateRandomColor() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  const randomColor = `rgb(${red},${green},${blue})`;
  return randomColor;
}

function applyRandomColors() {
  const colorElements = document.querySelectorAll('.color');

  colorElements.forEach((color) => {
    const randomColor = generateRandomColor();
    const colorEl = color;
    colorEl.textContent = randomColor;
    colorEl.style.backgroundColor = randomColor;
  });
}

function createRandomBtn() {
  const referenceElement = document.getElementById('clear-board');
  const randomBtn = document.createElement('a');
  randomBtn.id = 'button-random-color';
  randomBtn.innerText = 'Cores aleatórias';
  randomBtn.addEventListener('click', applyRandomColors); //
  referenceElement.insertAdjacentElement('afterend', randomBtn);
}

function paintPreviousColor(index, color) {
  const pixels = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixels.length; i += 1) {
    if (i === index) {
      pixels[i].style.backgroundColor = color;
    }
  }
}

function loadPreviousColors() {
  const storageArray = JSON.parse(localStorage.getItem('pixelBoard'));

  if (storageArray && storageArray.length > 0) {
    for (const item of storageArray) {
      const indexColored = item.index;
      const colorOfElement = item.selectedColor;
      paintPreviousColor(indexColored, colorOfElement);
    }
  }
}

function generateChangeBoardSizeBtn() {
  const divChangeBtn = document.getElementById('changeBtnContainer');
  const boardSizeInput = document.createElement('input');
  boardSizeInput.id = 'board-size';
  boardSizeInput.type = 'number';
  boardSizeInput.min = '1';
  boardSizeInput.placeholder = 'Insira um número maior que zero';
  const boardSizeText = document.createElement('button');
  boardSizeText.innerText = 'VQV';
  boardSizeText.id = 'generate-board';
  divChangeBtn.appendChild(boardSizeInput);
  divChangeBtn.appendChild(boardSizeText);
}

const maxMinBoard = (input) => {
  if (input < 5) {
    return 5;
  }
  if (input > 50) {
    return 50;
  }
  return input;
};

function createNewBoard(size) {
  const boardSize = size * size;

  const boardWidth = `${size * 40}px`;
  const boardHeight = `${size * 40}px`;

  board.style.width = boardWidth;
  board.style.height = boardHeight;

  board.innerHTML = '';
  for (let i = 0; i < boardSize; i += 1) {
    const pixel = document.createElement('div');
    pixel.className = 'pixel';
    board.appendChild(pixel);
  }
}

const savingBoardSize = (size) => {
  localStorage.setItem('boardSize', size);
};

const loadingPrevBoard = () => {
  const prevBoardSize = localStorage.getItem('boardSize');
  if (prevBoardSize !== 0) {
    board.innerHTML = '';
    createNewBoard(maxMinBoard(prevBoardSize));
    loadPreviousColors();
  }
};

function changeBoardSize() {
  const button = document.getElementById('generate-board');
  const input = document.getElementById('board-size');

  button.addEventListener('click', () => {
    const inputValue = parseInt(input.value, 10);
    if (inputValue > 0) {
      savingBoardSize(inputValue);
      createNewBoard(maxMinBoard(inputValue));
    } else {
      return window.alert('Board inválido!');
    }
  });
}

createColors();
createBoard();
selectColor();
createClearBtn();
createRandomBtn();
generateChangeBoardSizeBtn();
changeBoardSize();
loadingPrevBoard();
