function changeText() {
  const textToChange = document.getElementById('text-to-change');
  textToChange.innerText = 'Daqui a dois anos, me vejo como um programador experiente .';
}

function changeColorYellow() {
  const elementToChange = document.querySelector('.main-content');
  elementToChange.style.backgroundColor = 'rgb(76, 164, 109)';
}

function changeColorRed() {
  const elementToChange = document.querySelector('.center-content');
  elementToChange.style.backgroundColor = 'white';
}

function correctTitle() {
  const elementToChange = document.querySelector('.title');
  elementToChange.innerText = 'Desafio - JavaScript';
}

function pToUpper() {
  const elementToChange = document.querySelector('p');
  elementToChange.innerText = 'TEXTO PADRÃO DO NOSSO SITE';
}

function allTags() {
  const centerContent = document.querySelector('.center-content');
  const paragraphs = centerContent.querySelectorAll('p');
  const footer = document.querySelector('footer p');

  const contentArray = [];

  for (let i = 0; i < paragraphs.length; i += 1) {
    contentArray.push(paragraphs[i].textContent);
  }

  footer.textContent = contentArray.join(' ');
}

pToUpper();
correctTitle();
changeColorRed();
changeColorYellow();
changeText();
allTags();
