const express = require("express");
const jwt = require("jsonwebtoken");

const JWT_SECRET = "krish572"
const app = express();
const users = [];

app.use(express.json());

app.post("/signup", function(req, res) {
    const username = req.body.username;
    const password = req.body.password;

    users.push({
        username,
        password
    })

    res.json({
        message: "Sign up succesfull, you can go to sign in page and sign in"
    })
})

app.post("/signin", function(req, res){
    const {username, password} = req.body;

    const user = users.find(user => user.username === username && user.password === password);
    
    if(!user){
        res.json({
            message: "Invalid username or password"
        })
    }else{
        const token = jwt.sign({
            "username": username //If payload(data(jsondaata)) is long you will get a longer token
        }, JWT_SECRET);
        res.json({
            "token" : token
        });
    }
})

app.get("/me", (req, res) => {
    const token = req.headers.token;
    const userinfo = jwt.verify(token, JWT_SECRET);
    
    const user = users.find(user => user.username === userinfo.username);

    if(!user){
        res.json({
            message: "Invalid token"
        })
    }else{
        res.json({
            "username": userinfo.username,
            "password" : user.password
        })
    }
})

//Having JWT have advantages like token will be stateless and at the same time we don't have to hit the database everytime to check wheather user with this token are there are not to access any Authenticated Endpoint
//to understand this visualize this 
app.get("/courses", (req, res) => {

    //Manual token (to authenticate)
    const token = req.headers.token;
    var user = users.find((user) => user.token === token);

    //JWT token
    const userinfo = jwt.verify(req.headers.token, JWT_SECRET);
    var user = userinfo.username;

    //Here we stored username in JWT, but in real appliation we try to store userId.
    //Now we have the userId decoded then we can access his course by hitting DB.

})

//When ever you are logging out from any application, it's just means that the browser just removed the cookie(token) from it's headers from the next following request. Now you will have to log in again in order to get the cookie back.

app.listen(3000, function(){
    console.log("Server is listening on Port 3000");
})