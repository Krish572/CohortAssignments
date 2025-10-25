// const {program} = require("commander");
const fs = require("fs");
const {Command} = require("commander");
const program = new Command();

function readFilePromisified(filepath){
    return new Promise((resolve, reject) => {
        fs.readFile(filepath, "utf-8", function(err, data) {
            if(err){
                reject("Error while reading the file");
            }else{
                resolve(data);
            }
        })
    })
}

function callback(text){
    let count = 0;
    if(text.trim() !== ""){
        count = text.split(" ").length;
    }
    console.log(`You have ${count} words in this file`)
}

program
.name('Counter')
.description('CLI to do file based tasks');

program.command('count')
.description("Count number of words in file")
.argument("<file>", "file to count")
.action((file) => {
    readFilePromisified(file).then(callback).catch((errmsg) => console.log(errmsg));
})



// program.allowExcessArguments(true);
// program.parse();

// const filePath = program.args[0];
// console.log(filePath);



// readFilePromisified(filePath).then(callback).catch(callback);

//Important
program.parse();
// Instead of writing node index.js, we can use any text but before that, that particular text should be aliased - alias cli="node index.js"


