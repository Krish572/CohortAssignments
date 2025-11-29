const express = require("express");

const app = express();

let noOfRequestForUser = [];

setInterval(() => {
    noOfRequestForUser = []
}, 10000)

function ratelimitter(req, res, next){
    const id = req.headers["user-id"];
    if(!id){
        res.status(401).json({message: "user-id should be provided in headers"});
        return;
    }
    if(noOfRequestForUser[id]){
        noOfRequestForUser[id]++;
        if(noOfRequestForUser[id] > 5){
            res.status(404).json({message: "requests exceeded"});
            return;
        }
        next();
    }else{
        noOfRequestForUser[id] = 1;
        next();
    }
}





app.get("/post",ratelimitter, function (req, res){
    res.status(200).json({message: "Hi there"});
})

app.listen(3000, function() {
    console.log("Server is listening on port 3000")
})