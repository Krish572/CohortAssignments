const express = require("express");

const app = express();

let requestCount = 0;

function middleware(req, res, next) {
    requestCount = requestCount+1;
    next();
}
//We can write this code without middleware, but middleware will give that extra feature of that it have access of req, res, next. -> and this also can be possible if you pass req, res in the function while calling it in the endpoint functions.
//But you still has to call that function in every endpoint (DRY principle violation).
// app.use(middleware);


app.get("/user",middleware, (req, res) => {
    res.json({
        message: "Hi there"
    })
})


//Since u are using middleware only on /user, that request only will pass through the middlware.
app.get("/request-count", (req, res) => {
    res.json({
        "no of requests" : requestCount
    })
})

app.listen(3000, function() {
    console.log("Server is listening on Port 3000");
})