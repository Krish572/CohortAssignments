const fs = require("fs");
const express = require("express");
const { error } = require("console");

const app = express();
const filepath = "./todo.json"

app.use(express.json());

function generateId(){
    return Math.random().toString(32).slice(2);
}

function getTodos(){
    return JSON.parse(fs.readFileSync(filepath, "utf-8"));
}

function updateTodos(todos){
    fs.writeFileSync(filepath,JSON.stringify(todos));
}

app.get("/todos", (req, res) => {
    const todos = getTodos();
    res.status(200).json(todos);
})

app.post("/todos", (req, res) => {
    const {title} = req.body;

    if(!title){
        return res.status(400).json({error: "Title is required"});
    }

    const todo = {
        "id" : generateId(),
        title,
        "isCompleted" : false
    }

    const todos = getTodos();
    todos.push(todo);
    updateTodos(todos);

    res.status(201).json(todo);
})

app.put("/todos/:id", (req, res) => {
    const {id} = req.params;
    const todos = getTodos();
    const todo = todos.find((t) => t.id === id);
    if(!todo){
        return res.status(404).json({error: "Todo not found"});
    }

    todo.isCompleted = true;
    updateTodos(todos);
    res.json(todo);
})

app.delete("/todos/:id", (req, res) => {
    const {id} = req.params;
    let todos = getTodos();

    const todo = todos.find((t) => t.id === id);
    if(!todo){
        return res.status(404).json({error: "Todo not found"});
    }

    todos = todos.filter((t) => t.id !== id);

    updateTodos(todos);

    res.json({message: "Todo deleted Successfully"});
})




app.listen(3000);