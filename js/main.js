const form = document.getElementById('form');
const taskInput = document.getElementById('taskInput');
const tasksList = document.getElementById('tasksList');
const emptyList = document.getElementById('emptyList');

let tasks = [];

function addTask(event) {
    event.preventDefault();
    const taskText = taskInput.value;

    
    // -------------------------------создаю объект newTask для localStorage---------------------------------
    const newTask = {
        id: Date.now(),
        text: taskText,
        done: false
    }
    tasks.push(newTask);
   


    tasksList.insertAdjacentHTML("beforeEnd", `<li id="${newTask.id}" class="list-group-item d-flex justify-content-between task-item">
    <span class="task-title">${newTask.text}</span>
    <div class="task-item__buttons">
        <button type="button" data-action="done" class="btn-action">
            <img src="./img/tick.svg" alt="Done" width="18" height="18">
        </button>
        <button type="button" data-action="delete" class="btn-action">
            <img src="./img/cross.svg" alt="Done" width="18" height="18">
        </button>
    </div>
    </li>`);
    taskInput.value = '';
    if (tasksList.children.length > 1) {
        emptyList.classList.add('none');
    }
}

function deleteTask(event) {
    if (event.target.dataset.action === 'delete') {
        const parentNode = event.target.closest('li');
        parentNode.remove();
        if (tasksList.children.length === 1) {
            emptyList.classList.remove('none');
        }
    }
}

function doneTask(event) {
    if (event.target.dataset.action === 'done') {
        const parentNode = event.target.closest('li');
        const taskText = parentNode.querySelector('span');
        taskText.classList.toggle('task-title--done');
    }
}







form.addEventListener('submit', addTask);

tasksList.addEventListener('click', deleteTask);

tasksList.addEventListener('click', doneTask);