const mongoose = require("mongoose");
//You can use Schema below here to define the schema
//const Schema = mongoose.Schema;

const AdminSchema = new mongoose.Schema({
    email : {
        type: String,
        unique: true
    },
    password: String,
})

const UserSchema = new mongoose.Schema({
    email : {
        type: String,
        unique: true
    },
    password: String,
    purchasedCourses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
    }]
})

const CourseSchema = new mongoose.Schema({
    title : String,
    description: String,
    imageLink: String,
    price: Number,
    adminId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Admin'
    }
})

const Admin = mongoose.model("Admin", AdminSchema);
const User = mongoose.model("User", UserSchema);
const Course = mongoose.model("Course", CourseSchema);

module.exports = {
    Admin, 
    User, 
    Course
}