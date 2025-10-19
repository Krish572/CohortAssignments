const fs = require("fs");

function readFilePromisified(filepath){
    return new Promise(function(resolve, reject) {
        fs.readFile(filepath, "utf-8", function(err, data){
            if(err){
                reject(err);
            }else{
                resolve(data);
            }
        })
    });
}

const p = readFilePromisified("a.txt");

function printer(data){
    console.log(data);
}

p.then(printer).catch(printer);