const {Command} = require("commander");
const fs = require("fs");
const program = new Command();
const path = "./todos.json";

function readFile(){
    return JSON.parse(fs.readFileSync(path, "utf-8"));
}

function writeFile(data){
    fs.writeFileSync(path, JSON.stringify(data));
}

program
    .name("Todo - Application")
    .description("It lets you add, delete your todo's");

program
    .command("add")
    .description("It lets you add todo")
    .argument("<todo>", "todo title")
    .action((todo) => {
        let todos = readFile();
        todos.push({
            "title" : todo,
            "isCompleted" : false
        })
        writeFile(todos)
    })

program
    .command("delete")
    .description("It lets you delete todo")
    .argument("<todo>", "todo title")
    .action((todo) => {
        let todos = readFile();
        todos = todos.filter((t) => t.title !== todo);
        writeFile(todos);
    })

program
    .command("done")
    .description("It lets you mark todo as done")
    .argument("<todo>", "todo title")
    .action((todo) => {
        let todos = readFile();
        let completedTodo = todos.find((t) => t.title === todo)
        completedTodo.isCompleted = true;
        writeFile(todos);
    })

program.parse();