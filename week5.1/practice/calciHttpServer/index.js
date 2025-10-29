const express = require("express");
const app = express();

app.get("/add", function(req, res) {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    res.send(a+b);
})

app.get("/substract", (req, res) => {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    res.json(a-b);
})

app.get("/multiply", (req, res) => {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    res.json(a*b);
})

app.get("/divide", (req, res) => {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    res.json(a/b);
})

app.listen(3000, () => {
    console.log("server is listening on port 3000");
})