const fs = require("fs");

//Thread will be stuck here until this line of code gets completed (Thread will be stand alone since it is I/O bound task, not CPU bound task)
console.log(fs.readFileSync("a.txt", "utf-8")); // Reads File Synchronously, which means until this line completes execution, further code will not start running.

console.log("Done!");
