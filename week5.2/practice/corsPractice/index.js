const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(bodyParser.json());

//This make sure our frontend can communicate with back end with out CORS, even origin of our backend and frontend is different.
app.use(cors());



//since the background is request is coming from the same origin (localhost:3000), we won't receive any CORS error
app.get("/", function(req, res) {
    res.sendFile(__dirname +  "/frontend/index.html");
})

app.post("/sum", function(req, res) {
    let a = parseInt(req.body.a);
    let b = parseInt(req.body.b);
    res.json({
        "answer" : a + b
    })
})



app.listen(3000, function() {
    console.log("Server is listening on Port 3000");
})