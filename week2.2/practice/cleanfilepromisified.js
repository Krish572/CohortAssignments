const fs = require("fs");

function cleanFilePromisified(filepath){
    return new Promise(function(resolve, reject) {
        fs.readFile
    })
}

function callback(){
    console.log("File cleaned successfully");
}

function err(err){
    console.log(err);
}