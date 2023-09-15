const enterButton = document.querySelector('#enter-button');
const agreementCheckbox = document.querySelector('#agreement');
const submitButton = document.querySelector('#submit-btn');
const counterElement = document.querySelector('#counter');
const textarea = document.querySelector('#textarea');
const inputName = document.querySelector('#input-name');
const inputEmail = document.querySelector('#input-email');
const inputLastName = document.querySelector('#input-lastname');
const inputHouse = document.querySelector('#house');
const inputFamily = document.querySelectorAll('input[type="radio"][name="family"]');

const inputTechnologies = document.querySelectorAll('input[type="checkbox"][class="subject"]');
const inputRates = document.querySelectorAll('input[type="radio"][name="rate"]');
const inputTextArea = document.querySelector('#textarea');

const dataForm = document.querySelector('#form-data');
const mainForm = document.querySelector('#evaluation-form');

const validyLogin = () => {
  const email = document.querySelector('#enter-email').value;
  const password = document.querySelector('#enter-password').value;
  if (email === 'tryber@teste.com' && password === '123456') {
    return window.alert('Olá, Tryber!');
  }
  window.alert('Email ou senha inválidos.');
};

submitButton.disabled = true;
agreementCheckbox.checked = false;

function verifyAgreement() {
  if (agreementCheckbox.checked) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
}

textarea.addEventListener('input', () => {
  const counter = 500 - textarea.value.length;
  counterElement.innerText = `${counter} / 500`;
});

agreementCheckbox.addEventListener('click', verifyAgreement);
enterButton.addEventListener('click', validyLogin);

const nomeElement = document.getElementById('nome');
const emailElement = document.getElementById('email');
const casaElement = document.getElementById('casa');
const familiaElement = document.getElementById('familia');
const materiasElement = document.getElementById('materias');
const notaElement = document.getElementById('nota');
const obsElement = document.getElementById('obs');

const createRate = () => {
  let rateVal = '';
  inputRates.forEach((rate) => {
    if (rate.checked) {
      rateVal = rate.value;
    }
  });
  notaElement.innerText = `Avaliação: ${rateVal}`;
};

const createMessage = () => {
  obsElement.innerText = `Observações: ${inputTextArea.value}`;
};

const createTechnologies = () => {
  const tecs = [];
  inputTechnologies.forEach((tec) => {
    if (tec.checked) {
      tecs.push(tec.value);
    }
  });
  materiasElement.innerText = `Matérias: ${tecs.join(', ')}`;
};

const createFinalDocument = () => {
  nomeElement.innerText = `Nome: ${inputName.value} ${inputLastName.value}`;
  emailElement.innerText = `Email: ${inputEmail.value}`;
  casaElement.innerText = `Casa: ${inputHouse.value}`;

  inputFamily.forEach((family) => {
    if (family.checked) {
      const result = family.value;
      familiaElement.innerText = `Família: ${result}`;
    }
    createTechnologies();
    createRate();
    createMessage();

    mainForm.style.display = 'none';
    dataForm.style.display = 'block';
  });
};

submitButton.addEventListener('click', createFinalDocument);
