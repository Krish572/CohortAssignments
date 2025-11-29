const express = require("express");

const app = express();

let requestCount = 0;

function midddleware(req, res, next){
    requestCount++;
    next();
}

app.use(midddleware);

app.get("/", function(req, res){
    res.status(200).json({message: "this is home page"});
})

app.get("/requestCount", function(req, res){
    res.status(200).json({requestCount})
})

app.listen(3000, function() {
    console.log("Server is listening on port 3000");
})