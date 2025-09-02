const inputEl = document.querySelector("input");
let divEl = document.querySelector("#todos-div");

let c = 1;

let todo = [];

const getTodayDate = () => {
    const date = new Date();
    const today = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    return today;
}

getTodayDate();                     

const addTodo = () => {
    let value = inputEl.value;
    todo.push({
        "id" : c, 
        "title" : value, 
        "completed" : false,
        "date" : getTodayDate()
    });
    c++;
    render();
}

function createTodo(todo){
    let child = document.createElement("div");
    child.setAttribute("class", "todo");
    child.setAttribute("id", `todo-${todo.id}`);

    let spanElement1 = document.createElement('span');
    spanElement1.innerHTML = `${todo.title}`;
    spanElement1.setAttribute('onclick', `markCompleted(${todo.id})`);
    if(todo.completed){
        spanElement1.classList.add('span-completed');
    }
    let spanElement2 = document.createElement('span');
    spanElement2.innerHTML = ` - ${todo.date}`;

    let editButton = document.createElement('button');
    editButton.setAttribute('onclick', `updateTodo(${todo.id})`)
    editButton.innerHTML = "Edit";


    let deleteElement = document.createElement('button');
    deleteElement.setAttribute('onclick', `deleteTodo(${todo.id})`)
    deleteElement.innerHTML = "Delete";

    child.append(spanElement1);
    child.append(spanElement2);
    child.append(editButton);
    child.append(deleteElement);

    return child;
}

const updateTodo = (id) => {
    let updatedText = prompt("Enter the text here");
    const desiredTodo = todo.find(t => t.id === id);
    if(updatedText !== null && updatedText.trim() != ""){
        desiredTodo.title = updatedText.trim();
        render();
    }
}

function markCompleted(id){
    const desiredTodo = todo.find(t => t.id == id);
    if(desiredTodo){
        desiredTodo.completed = !desiredTodo.completed;
        render();
    }
}

function render(){
    divEl.innerHTML = "";
    for(let i = 0; i < todo.length; i++){
        const child = createTodo(todo[i]);
        divEl.appendChild(child);
    }
}


// const addTodo = () => {
//     let child = document.createElement("div");
//     child.setAttribute("class", "todo");
//     child.setAttribute("id", `todo-${c}`);
//     let spanElement = document.createElement('span');
//     spanElement.innerHTML = inputEl.value;
//     let deleteElement = document.createElement('button');
//     deleteElement.innerHTML = "Delete";
//     deleteElement.setAttribute('onclick', `deleteTodo(${c})`);
//     child.append(spanElement);
//     child.append(deleteElement);
//     divEl.appendChild(child);
//     c++;
// }

const deleteTodo = (id) => {
    todo = todo.filter(t => t.id != id);
    render();
}