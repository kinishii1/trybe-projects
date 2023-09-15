const submitBtn = document.querySelector('#submit-btn');
const clearBtn = document.querySelector('#clear-btn');
const inputElements = document.querySelectorAll('input');
const agreementCheckbox = document.querySelector('#agreement');

submitBtn.disabled = true;

agreementCheckbox.addEventListener('change', () => {
  submitBtn.disabled = !agreementCheckbox.checked;
});

clearBtn.addEventListener('click', () => {
  inputElements.forEach((input) => {
    input.value = '';
  });
});

submitBtn.addEventListener('click', (event) => {
  event.preventDefault();
});
