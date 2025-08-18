const inputEl = document.querySelector("input");
let divEl = document.querySelector("#divEl");

let c = 1;

const addTodo = () => {
    let child = document.createElement("div");
    child.setAttribute("class", "todo");
    child.setAttribute("id", `todo-${c}`);
    let spanElement = document.createElement('span');
    spanElement.innerHTML = inputEl.value;
    let deleteElement = document.createElement('button');
    deleteElement.innerHTML = "Delete";
    deleteElement.setAttribute('onclick', `deleteTodo(${c})`);
    child.append(spanElement);
    child.append(deleteElement);
    divEl.appendChild(child);
    c++;
}

const deleteTodo = (id) => {
    console.log("Deleted");
    const deleteEl = document.getElementById(`todo-${id}`);
    deleteEl.parentNode.removeChild(deleteEl);
}