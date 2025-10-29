const express = require("express");

const app = express();

let noOfRequestForUser = [];

setInterval(function() {
    noOfRequestForUser = []
}, 10000);

app.use(function(req, res, next) {
    const userId = req.headers["user-id"];
    if(noOfRequestForUser[userId]){
        noOfRequestForUser[userId]++;
        if(noOfRequestForUser[userId] > 5){
            res.json({
                message: "No entry"
            })
        }else{
            next();
        }
    }else{
        noOfRequestForUser[userId] = 1;
        next();
    }
})

app.get("/user", (req, res) => {
    res.json({
        message: "Hi there"
    })
})


app.listen(3000, function( ) {
    console.log("Server is listening on Port 3000");
})

