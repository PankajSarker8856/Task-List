let form = document.querySelector('#task_form');
let taskList = document.querySelector('#tasks');
let clearBtn = document.querySelector('#clear_task_btn');
let filter = document.querySelector('#task_filter');
let taskInput = document.querySelector('#new_task');

form.addEventListener('submit', addTask);
taskList.addEventListener('click', removeTask);
clearBtn.addEventListener('click', clearTask);
filter.addEventListener('keyup', filterTask);
document.addEventListener('DOMContentLoaded', getTasks);


function addTask(e) {
    e.preventDefault();
    if (taskInput.value === '') {
        alert('Add A Task!');
    } else {
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(taskInput.value + ' '));
        let button = document.createElement('button');
        button.setAttribute('id', 'remove-task');
        button.innerText = 'x';
        li.appendChild(button);
        taskList.appendChild(li);
        storeTaskInLocalStorage(taskInput.value);
        taskInput.value = '';
    }
    e.preventDefault();
}

function removeTask(e) {
    if (e.target.hasAttribute('href')) {
        if (confirm('Are you sure?')) {
            let ele = e.target.parentElement;
            ele.remove();
        }
    }
}

function clearTask(e) {
    taskList.innerHTML = '';
}

function filterTask(e) {
    let text = e.target.value.toLowerCase();
    document.querySelectorAll('li').forEach((list) => {
        let item = task.firstChild.tetContent;
        if (item.toLowerCase().indexOf(text) != -1) {
            task.style.display = 'block';
        } else {
            task.style.display = 'none';
        }
    });
}

function storeTaskInLocalStorage(task) {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function getTasks() {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];

    } else {
        tasks = JSON.parse(localStorage.getIteam('tasks'));
    }
    tasks.foreach(task => {
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(task + " "));
        let link = document.createElement('a');
        link.setAttribute('href', '#');
        link.innerHTML('x');
        li.appendChild(link);
        taskList.appendChild(li);
    })
}

function removeFromLS(taskItem) {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];

    } else {
        tasks = JSON.parse(localStorage.getIteam('tasks'));
        let li = taskItem;
        li.removeChild(li.lastChild);
        tasks.forEach((tasks, index) => {
            if (li.textContent.trim() === task) {
                tasks.splice(inde, 1);
            }
        })
    }
    localStorage.setItem('tasks', JSON.stringify(tasks));
}