const express = require('express');
const app = express();

function middleware(req, res, next){
    console.log("Request Method : " + req.method);
    next();
}

app.use(middleware);

app.get("/", function(req, res){
    res.status(200).json({message: "This is home page"})
})

app.listen(3000, function(){
    console.log("Server is listening on port 3000");
})