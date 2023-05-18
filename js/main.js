const form = document.getElementById('form');
const taskInput = document.getElementById('taskInput');
const tasksList = document.getElementById('tasksList');
const emptyList = document.getElementById('emptyList');

function addTask(event) {
    event.preventDefault();
    const task = taskInput.value;    
    tasksList.insertAdjacentHTML("beforeEnd", `<li class="list-group-item d-flex justify-content-between task-item">
    <span class="task-title">${task}</span>
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




form.addEventListener('submit', addTask);