const fs = require("fs");


//if you write it as function such as below, when you call the function fs.readFile will be executed by the thread, because it's async will handed over to the webapi's and thread will move forward and reaches end of the function.
// function readFile(filepath){
//     fs.readFile(filepath, "utf-8", function(err, data){
//         if(err){
//             console.log("Error");
//             return "Error while reading the file: " + err;
//         }else{
//             console.log(data);
//             return data;
//         }
//     })
// }

// readFile("a.txt")
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


