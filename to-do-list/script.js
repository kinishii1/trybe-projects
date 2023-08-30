const textInput = document.querySelector('#texto-tarefa');
const taskBtn = document.querySelector('#criar-tarefa');
const listTask = document.querySelector('#lista-tarefas');

const btnClearAll = document.querySelector('#apaga-tudo');
const btnClearCompleted = document.querySelector('#remover-finalizados');
const btnSaveTasks = document.querySelector('#salvar-tarefas');
const btnRemoveSelected = document.querySelector('#remover-selecionado');
const moveUpButton = document.querySelector('#mover-cima');
const moveDownButton = document.querySelector('#mover-baixo');

function addTask() {
  if (textInput.value !== '') {
    const newElement = document.createElement('li');
    newElement.innerText = textInput.value;
    listTask.appendChild(newElement);
  } else {
    window.alert('Digite uma tarefa');
  }
}

const clearInput = () => {
  textInput.value = '';
};

const clearSelected = () => {
  const selectedItem = document.querySelector('.selected');
  if (selectedItem) {
    selectedItem.classList.remove('selected');
  }
};

function addSelection(target) {
  target.classList.add('selected');
}

function toggleCompleted(target) {
  target.classList.toggle('completed');
}

function clearList() {
  listTask.innerHTML = '';
}

function clearCompleted() {
  const completedElements = document.querySelectorAll('.completed');
  for (const completed of completedElements) {
    completed.remove();
  }
}

function saveTasks() {
  const tasks = listTask.innerHTML;
  localStorage.setItem('tasks', tasks);
}

function loadTasks() {
  const loadedTasks = localStorage.getItem('tasks');
  listTask.innerHTML = loadedTasks;
}

function removeSelected(selected) {
  selected.remove();
}

moveUpButton.addEventListener('click', () => {
  const selectedItem = document.querySelector('.selected');

  if (selectedItem && selectedItem.previousElementSibling) {
    listTask.insertBefore(selectedItem, selectedItem.previousElementSibling);
  }
});

moveDownButton.addEventListener('click', () => {
  const selectedItem = document.querySelector('.selected');

  if (selectedItem && selectedItem.nextElementSibling) {
    selectedItem.nextElementSibling.after(selectedItem);
  }
});

loadTasks();

taskBtn.addEventListener('click', () => {
  addTask();
  clearInput();
});

listTask.addEventListener('click', (event) => {
  if (event.target.tagName === 'LI') {
    clearSelected();
    addSelection(event.target);
  }
});

listTask.addEventListener('dblclick', (event) => {
  if (event.target.tagName === 'LI') {
    toggleCompleted(event.target);
  }
});

btnClearAll.addEventListener('click', () => {
  clearList();
});

btnClearCompleted.addEventListener('click', () => {
  clearCompleted();
});

btnSaveTasks.addEventListener('click', saveTasks);

btnRemoveSelected.addEventListener('click', () => {
  const selected = document.querySelector('.selected');
  if (selected) {
    removeSelected(selected);
  }
});
