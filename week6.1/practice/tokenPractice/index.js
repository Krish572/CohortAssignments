const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// app.get("/", function(req, res){
//     res.json({
//         message: "Hi there"
//     })
// })
const users = [];

app.use(bodyParser.json());

function generateId(){
    return Math.random().toString(32).slice(2);
}

//Unfortunately it is working without app.use(express.json())
// app.post("/signup", function(req, res){
//     const {username} = req;
//     const {password} = res;

//     users.push({
//         username,
//         password
//     })
// })

app.post("/signup", function(req, res){
    const {username} = req.body;
    const {password} = req.body;
    
    users.push({
        username,
        password
    })

    console.log(users);

    res.json({
        message: "Sign up successful"
    })
})

app.post("/signin", function(req, res) {
    const username = req.body.username;
    const password = req.body.password;

    const user = users.find(function(user) {
        if(user.username === username && user.password === password){
            return true;
        }else{
            return false;
        }
    })

    if(!user){
        return res.json({
            message: "Username or Password is incorrect"
        })
    }

    const id = generateId();
    user.token = id;

    console.log(users);

    res.json({
        "token": id
    })
    
})


//Authenticated End Point (You can only access this if you has token)
app.get("/me", function(req, res){
    const token = req.headers.token;
    
    const user = users.find(function(user) {
        if(user.token === token){
            return true;
        }else{
            return false;
        }
    })

    if(user){
        res.json({
            "username" : user.username,
            "password": user.password
        })
    }else{
        res.json({
            "message": "Invalid Token"
        })
    }
})

app.listen(3000, function() {
    console.log("Server is listening on Port 3000");
})