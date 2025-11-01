const express = require("express");
const jwt = require("jsonwebtoken");

const JWT_SECRET = "Krish572";
const app = express();
const users = [];

app.use(express.json());

//Since there are multiple authenticated end points, it's best practice to write user authentication in a middleware rather than writing that logic in every authenticated endpoint.
const authMiddleware = (req, res, next) => {
    const token = req.headers.token;

    if(!token){
        return res.json({
            message: "You are not logged in"
        })
    }
    const userinfo = jwt.verify(token, JWT_SECRET);

    if(!userinfo.username){
        return res.json({
            message: "Invalid Token"
        })
    }

    req.username = userinfo.username;
    next();
}

//To console the request method.
const logger = (req, res, next) => {
    console.log(`${req.method} request came`);
    next();
}

app.use(logger);

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/public/index.html");
})

app.post("/signup", function(req, res){
    const {username, password} = req.body;

    if(users.find(user => user.username === username)){
        return res.json({
            message: "Username already exists"
        })
    }

    users.push({
        username,
        password
    });

    console.log(users);

    res.json({
        message : "Signed up successfully"
    })
})

app.post("/signin", function(req, res){
    const {username, password} = req.body;

    if(!users.find(user => user.username === username && user.password === password)){
        return res.json({
            message : "Invalid username or password"
        })
    }

    const token = jwt.sign({"username": username}, JWT_SECRET);
    res.json({
        "token": token
    })
})


app.get("/me",authMiddleware, function(req, res) {
    const username = req.username;

    const user = users.find(user => user.username === username);

    if(!user){
        res.json({
            message: "user not found"
        })
    }else{
        res.json({
            "username": username,
            "password": user.password
        })
    }
})




app.listen(3000, function(){
    console.log("Server is listening on Port 3000");
})