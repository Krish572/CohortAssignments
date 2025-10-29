const express = require("express");
const app = express();

let errorCount = 0;

app.get("/user", (req, res) => {
    throw new Error("no found");
    res.json({
        message: "Hi there"
    })
})

app.get("/errorcount", (req, res) => {
    res.json({
        "error-count" : errorCount
    })
})

//Why I wrote this middleware last - If I put middleware before /user route, Since it passed the middleware already, now it's ready to serve the data (which is actually error), in precise its not yet in the middleware chain that caches errors.  - These erros do not reach to error handler(middleware), it's sent to default client.
app.use(function (err, req, res, next) {
    res.status(404).send({
        error : "not found"
    })
    errorCount++;
})

app.listen(3000, () => {
    console.log("Server is listening on Port 3000");
})