const express = require("express");

const app = express();

let requestCount = 0;

app.use(function(req, res, next) {
    requestCount = requestCount+1;
    next();
})

app.get("/user", (req, res) => {
    res.json({
        message: "Hi there"
    })
})

app.get("/request-count", (req, res) => {
    res.json({
        "no of requests" : requestCount
    })
})

app.listen(3000, function() {
    console.log("Server is listening on Port 3000");
})