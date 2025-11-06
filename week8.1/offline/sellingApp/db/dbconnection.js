const mongoose = require("mongoose");

function connectDB () {
    mongoose.connect("mongodb+srv://krishna:krish572@dbpractice.im8byly.mongodb.net/Selling-App")
    .then(() => {
        console.log("DB connected successfully");
    }).catch(() => {
        console.log("DB connection failed");
    })
}



module.exports = connectDB;