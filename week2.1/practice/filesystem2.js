const fs = require("fs");

function fun(err, data){
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
}

//Why is the structure of fs.reafile is as follows - fs.readFile("a.txt", "utf-8", fun) => Whoever wrote the function "readFile" function in "fs" object wrote in that way, which means readFile function is having three arguments to passed into it namely filepath, encoding and a function - Here function which ever you pass will get called by passing the parameters namely error and data - contents inside the file. Because of the people who wrote readFile function and fs object. 
// const fs = {
//     readFileSync : "",
//     readFile : function (filepath, encoding, callback_or_OP) {
//         After reading the data{
//             callback_or_OP("Error!", "Hi there")
//         }
//     }
// } After reading the data readFile function will call the function you wrote by passing the error, contents parameters into it. Because the ReadFile function already written in a way that it will pass the error and data into the function that you pass, you also has to obey and write the function according to that. Whoever wrote that readFile function decided that whenever I call the function, I will call that with passing error and data. So we just have adhere to that.

// NOTE : Important to remember - Here speed of reading the files does not determine the CPU spped. Once this line of code start running, cpu will hand over this work to OS, since it is I/O bound task. Now, It's all in the OS hands now, which means now that Single thread will move on to next lines to run and excecute. When OS completes the task, it will be in the Call Back Queue untill thread gets free - whenever thread gets free it will call that function (fun).

fs.readFile("a.txt", "utf-8", fun); // even though a.txt is much greater interms of content inside than b.txt, We cannot say 100% that b.txt will get consoled first. It completely random. 

fs.readFile("b.txt", "utf-8", fun); // If a.txt is busy than b.txt will print first. 

fs.readFile("unknowFile.txt", "utf-8", fun); // Since file does not exist, OS may not take much time to determine that. That's why this line executes first in these 3 fs's. - This may or may not true.

setTimeout(() => {
    console.log("Sample Test");
}, 0);

console.log("Done!");

