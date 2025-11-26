const fs = require("fs");

fs.readFile("a.txt", "utf-8", function(err, data){
    if(err){
        if(err.code === "ENOENT"){
            console.log("File not found");
        }else{
            console.log("Error reading the file: " + err);
        }
        return;
    }
    console.log(data);
})

let c = 0;
for(let i = 0; i < 1000000000; i++){
    c++;
}
console.log(c);
