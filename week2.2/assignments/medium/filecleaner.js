const fs = require("fs");

fs.readFile("a.txt", "utf-8", function(err, data) {
    if(err){
        console.log("Error while reading the file " + err);
    }else{
        data = data.replace(/\s+/g, " ").trim();
        fs.writeFile("a.txt", data, function(err){
            if(err){
                console.log("Error while writing the file: " + err);
            }else{
                console.log("File has cleaned and written successfully");
            }
        })
    }
})






let sentence = "hello     world    my    name   is       raman";

sentence = sentence.replace(/\s+/g, " ").trim()

