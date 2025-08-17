const inputEl = document.querySelector("input");
let divEl = document.querySelector("#divEl");

let c = 1;

const addTodo = () => {
    console.log(inputEl.value);
    let child = document.createElement("div");
    child.setAttribute("class", "todo");
    child.setAttribute("id", `todo-${c}`);
    child.innerHTML = `<span>${inputEl.value}</span> <button onclick={deleteTodo("todo-${c}")}>Delete</button>`;
    divEl.appendChild(child);
    c++;
}

const deleteTodo = (id) => {
    console.log("Deleted");
    const deleteEl = document.getElementById(id);
    deleteEl.parentNode.removeChild(deleteEl);
}