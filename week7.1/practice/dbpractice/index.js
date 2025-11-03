const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const {UserModel, TodoModel} = require("./db")
const JWT_SECRET = "krish572";

mongoose.connect("mongodb+srv://krishna:krish572@dbpractice.im8byly.mongodb.net/practice");
const app = express();
app.use(express.json());

function auth(req, res, next){
    const token = req.headers.token;
    const userInfo = jwt.verify(token, JWT_SECRET);

    if(!userInfo){
        return res.json({
            message: "Invalid token"
        })
    }

    req.userId = userInfo.userId;
    next();

}

app.post("/signup",async function(req, res) {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    await UserModel.create({
        name: name,
        email: email,
        password: password
    })

    res.json("Successfully Signed Up");
})

app.post("/signin", async function(req, res){
    const email = req.body.email;
    const password = req.body.password;

    const response = await UserModel.findOne({
        email: email,
        password: password
    })

    if(!response){
        return res.status(403).json({
            message: "Incorrect Username or Password"
        })
    }

    const token = jwt.sign({"userId" : response._id.toString()}, JWT_SECRET);
    res.json({
        "token": token
    })
})

app.post("/todo", auth, async function (req, res) {
    const userId = new mongoose.Types.ObjectId(req.userId);
    const title = req.body.title;
    await TodoModel.create({
        title: title,
        userId: userId,
        done: false
    })
    res.json({
        message: "Created todo"
    })
})

app.get("/todos", auth, async function (req, res) {
    const userId = new mongoose.Types.ObjectId(req.userId);
    const response = await TodoModel.find({
        userId: userId
    })
    res.send(response);
})


app.listen(3000, function(){
    console.log("Server is listening on Port 3000");
})