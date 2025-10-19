const fs = require("fs");

function writeFilePromisified(filename, contents){
    return new Promise(function(resolve, reject) {
        fs.writeFile(filename, contents, function(err) {
            if(err){
                reject(err);
            }else{
                resolve();
            }
        } )
    });
}

const p = writeFilePromisified("b.txt", "Hi, I am b.txt");

function callback(){
    console.log("File written successfully");
}

function err(err){
    console.log(err);
}

p.then(callback).catch(err);