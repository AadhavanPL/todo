let input = document.getElementById('input-box');
let addbutton = document.getElementById('add');
let todolist = document.getElementById('list-elements');

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

    const donebutton = document.createElement('button');
    donebutton.innerText = '\/';
    donebutton.classList.add('done-button');
    tododiv.appendChild(donebutton);

    todolist.appendChild(tododiv);

    input.value = "";
}

function donecheck(e) {
    let element = e.target;
    if(element.classList[0]=='done-button') {
        let deleting = element.parentElement;
        deleting.remove();
    }
}