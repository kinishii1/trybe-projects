const createDaysOfTheWeek = () => {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
};

createDaysOfTheWeek();

const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
  17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

// Escreva seu código abaixo.
const getDaysList = document.querySelector('#days');
const holidayDays = [24, 31, 25];
const fridayDays = [4, 11, 18, 25];
const btn = document.querySelector('#btn-add');
const input = document.querySelector('#task-input');
const list = document.querySelector('#task-list');

function createDaysOfTheMonth() {
  for (const day of decemberDaysList) {
    const dayItem = document.createElement('li');
    dayItem.innerHTML = day;
    dayItem.classList.add('day');
    if (holidayDays.includes(day)) {
      dayItem.classList.add('holiday');
    }
    if (fridayDays.includes(day)) {
      dayItem.classList.add('friday');
    }
    getDaysList.appendChild(dayItem);
  }
}

createDaysOfTheMonth();

const hollyDayBtn = document.getElementById('btn-holiday');

const changeColor = () => {
  const hollyDays = document.querySelectorAll('.holiday');
  for (let i = 0; i < hollyDays.length; i += 1) {
    if (hollyDays[i].style.backgroundColor === 'blue') {
      hollyDays[i].style.backgroundColor = 'rgb(238,238,238)';
    } else {
      hollyDays[i].style.backgroundColor = 'blue';
    }
  }
};

hollyDayBtn.addEventListener('click', changeColor);

const fridaysArray = [4, 11, 18, 25];

const fridayBtn = document.getElementById('btn-friday');

function changeText() {
  const fridays = document.querySelectorAll('.friday');
  const newText = 'sexta chegou';

  for (let i = 0; i < fridays.length; i += 1) {
    if (fridays[i].innerText !== newText) {
      fridays[i].innerHTML = newText;
    } else {
      fridays[i].innerHTML = fridaysArray[i];
    }
  }
}

fridayBtn.addEventListener('click', changeText);

function addZoomClick() {
  const daysForZoom = document.querySelector('#days');

  daysForZoom.addEventListener('mouseover', (event) => {
    event.target.style.fontSize = '30px';
  });

  daysForZoom.addEventListener('mouseout', (event) => {
    event.target.style.fontSize = '20px';
  });
}

function changeDayColor() {
  const colorSelected = document.querySelector('.selected');
  if (!colorSelected) return;

  const dayToChangeColor = document.querySelector('#days');
  const color = colorSelected.style.backgroundColor;

  dayToChangeColor.addEventListener('click', (event) => {
    const selectedTask = document.querySelector('.selected');

    if (!selectedTask || event.target.style.color === color) {
      event.target.style.color = 'rgb(119, 119, 119)';
    } else {
      event.target.style.color = color;
    }
  });
}

function setTaskClass() {
  const tasks = document.getElementsByClassName('task');
  const tasksArray = Array.from(tasks);
  tasksArray.forEach((element) => {
    element.addEventListener('click', (event) => {
      const isSelectedPrevious = document.querySelector('.selected');

      event.target.classList.add('selected');
      changeDayColor();
      if (isSelectedPrevious !== null) {
        isSelectedPrevious.classList.remove('selected');
      }
    });
  });
}

function btnAdd() {
  function addTask() {
    if (input.value.length === 0) {
      alert('Mensagem de erro.');
    } else {
      const inputCreated = document.createElement('li');
      inputCreated.innerText = input.value;
      list.appendChild(inputCreated);
      input.value = '';
    }
  }
  btn.addEventListener('click', addTask);
  input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      addTask();
    }
  });
}

btnAdd();
setTaskClass();
addZoomClick();
