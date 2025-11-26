const fs = require("fs");

const data = "Fuck Mayweather";

fs.writeFile("a.txt", data, function(err) {
    if(err){
        console.log(err);
    }else{
        console.log("data written");
    }
})

let c = 0;
for(let i = 0; i < 1000000000; i++){
    c++;
}
console.log(c);