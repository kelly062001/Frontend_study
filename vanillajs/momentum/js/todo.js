const todoForm = document.querySelector('#todo-form');
const todoInput = todoForm.querySelector('input');
const todoList = document.querySelector('#todo-list');

const todos = [];

function saveTodos(){
    localStorage.setItem('todos', JSON.stringify(todos));
}

function deleteTodo(event){
    const li = event.target.parentElement;
    li.remove();
}

function paintTodo(newTodo){
    const li = document.createElement('li');
    const span = document.createElement('span');
    span.innerText = newTodo;

    const button = document.createElement('button');
    button.innerText = '❌';
    button.addEventListener('click', deleteTodo);

    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
}

function handleTodoSubmit(event){
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value="";
    todos.push(newTodo);
    paintTodo(newTodo);
    saveTodos();
}

todoForm.addEventListener('submit', handleTodoSubmit);