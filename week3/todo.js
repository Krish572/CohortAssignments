let inputEl = document.querySelector("input");
let divEl = document.querySelector("#divEl");

const addTodo = () => {
    console.log(inputEl.value);
    let child = document.createElement("div");
    child.innerHTML = `<span>${inputEl.value}<span> <button>Delete</button>`;
    divEl.appendChild(child);
}