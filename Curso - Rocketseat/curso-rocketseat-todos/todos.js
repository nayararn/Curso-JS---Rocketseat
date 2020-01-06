var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

//buscando array de to dos no localstorage com JSON
var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

//funcao para renderizar os to dos
function renderTodos() {
    listElement.innerHTML = "";
    for (todo of todos){
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        //criando botao de excluir um to do
        var linkElement = document.createElement('a');
        linkElement.setAttribute('href', '#');

        var pos = todos.indexOf(todo);
        linkElement.setAttribute('onclick', 'deleteTodo('+ pos +')');

        var linkText = document.createTextNode('Excluir');

        linkElement.appendChild(linkText);
        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);
        listElement.appendChild(todoElement);
    }
}

renderTodos();

//criando funcao para adicionar um novo to do
function addTodo() {
    var todoText = inputElement.value;

    todos.push(todoText);
    inputElement.value = "";
    renderTodos();
    saveToStorage();
}

buttonElement.onclick = addTodo;

//criando funcao para deletar to dos
function deleteTodo(pos) {
    todos.splice(pos, 1);
    renderTodos();
    saveToStorage();
}

function saveToStorage() {
    localStorage.setItem('list_todos', JSON.stringify(todos));
}