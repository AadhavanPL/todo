let input = document.getElementById('input-box');
let addbutton = document.getElementById('add');
let todolist = document.getElementById('list-elements');

document.addEventListener('DOMContentLoaded', gettodo);
addbutton.addEventListener('click', addtodo);
todolist.addEventListener('click', donecheck);

function addtodo(event) {
    event.preventDefault();

    let tododiv = document.createElement('div');
    tododiv.classList.add('todo-div');
    
    let newtodo = document.createElement('li');
    newtodo.innerHTML = input.value;
    newtodo.classList.add('todo-item');
    tododiv.appendChild(newtodo);

    save(input.value);

    const donebutton = document.createElement('button');
    donebutton.innerHTML = '&#10003';
    donebutton.classList.add('done-button');
    tododiv.appendChild(donebutton);

    todolist.appendChild(tododiv);

    input.value = "";
}

function donecheck(e) {
    let element = e.target;
    if(element.classList[0]=='done-button') {
        let deleting = element.parentElement;
        deletelocal(element);
        deleting.remove();
    }
}

function save(todo) {
    let todos;
    if(localStorage.getItem('todos')===null) {
        todos = [];
    }
    else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }

    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
}

function gettodo() {
    let todos;
    if(localStorage.getItem('todos')===null) {
        todos = [];
    }
    else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.forEach(function(todo) {
        let tododiv = document.createElement('div');
        tododiv.classList.add('todo-div');
        
        let newtodo = document.createElement('li');
        newtodo.innerHTML = todo;
        newtodo.classList.add('todo-item');
        tododiv.appendChild(newtodo);

        const donebutton = document.createElement('button');
        donebutton.innerHTML = '&#10003';
        donebutton.classList.add('done-button');
        tododiv.appendChild(donebutton);

        todolist.appendChild(tododiv)
    });
}

function deletelocal(todo) {
    let todos;
    if(localStorage.getItem('todos')===null) {
        todos = [];
    }
    else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    const index = todo.parentElement.children[0].innerHTML;
    todos.splice(todos.indexOf(index), 1);
    localStorage.setItem('todos', JSON.stringify(todos));
}
