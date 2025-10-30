const express = require("express");

const app = express();

function middleware(req, res, next){
    console.log(req.method);
    console.log(req.hostname + req.url);
    console.log(new Date());
    next();
}

app.use(middleware);

app.get("/user", function(req, res) {
    res.json({
        message: "Hi there"
    })
})

app.listen(3000, function() {
    console.log("Server is listening on Port 3000");
})