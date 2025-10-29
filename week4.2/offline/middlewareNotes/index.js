//Express is routing and middleware framework that has minimal functionality of its own ; An Express application is essentially a series of middleware function calls.
const express = require("express");

const app = express();

//Middleware functions are the functions which have access to the req, res, next middleware function in the application's request-response cycle.
//What does middle can do :
//1)Excecute any code 2)Make changes to the req, res objects. 3)End the req-res cycle. 4)call the next middleware function in the stack by - next();
function isOldEnough(req, res, next){
    const age = parseInt(req.query.age);
    if(age > 18){
        next();
    }else{
        res.json({
            message: "You are not old enough, so grow first"
        })
    }
}

//If every route needs to be passed through this middleware then you can use this.
app.use(isOldEnough);


app.get("/motoriding", function (req, res) {
    res.json({
        message: "Your motoride was successfully booked"
    })
})

//If there is any specific route, which needs middleware can used like this.
app.get("/gaintwill", isOldEnough, function (req, res) {
    res.json({
        message: "Your gaintwill raid was successfully booked"
    })
})

//writing it here is useless, since it's last thing which will happen. (before it the routes will go by)
app.use(isOldEnough)

app.listen(3000, function() {
    console.log("Server is listening on Port 3000");
})