const {Router} = require("express");
const bcrypt = require("bcrypt");
const {Admin, Course} = require("../db/db");
const jwt = require("jsonwebtoken");
require("dotenv").config({silent: true});
const {SignupSchema} = require("../validations/validation");
const { authMiddleware } = require("../auth/authMiddleware")
const router = Router();
const JWT_SECRET = process.env.JWT_SECRET;


router.post("/signup", async function(req, res) {

    const parseSuccess = SignupSchema.safeParse(req.body);

    if(!parseSuccess.success){
        return res.json({
            error: (JSON.parse(parseSuccess.error.message)).map(e => e.message)
        })
    }

    const email = req.body.email;
    const password = req.body.password;

    const hashedPassword = await bcrypt.hash(password, 5);

    Admin.create({
        email,
        password: hashedPassword
    }).then(() => {
        res.json("Admin Sign Up Successfull");
    }).catch(() => {
        res.json("Email Already exists");
    })

})

router.post("/signin", function(req, res){
    const email = req.body.email;
    const password = req.body.password;

    Admin.findOne({
        email
    }).then( async (response) => {
        if(!response){
            return res.status(401).json({
                message: "Incorrect Email or Password"
            })
        }
        const passwordMatch = await bcrypt.compare(password, response.password);
        if(!passwordMatch){
            return res.status(401).json({
                message: "Incorrect Password"
            })
        }
        const token = jwt.sign({
            id : response._id
        }, JWT_SECRET);
        res.status(200).json({
            token
        })
    }).catch(err => {
        res.status(500).json({
            message: "Internal Server Error"
        })
    })
})

router.post("/courses",authMiddleware("admin"), function(req, res) {
    const {title, description, imageLink, price} = req.body;
    
    Course.create({
        title,
        description,
        price,
        imageLink,
        adminId: req.id
    }).then(() => {
        res.status(201).json({
            message: "Course created successfully"
        })
    }).catch(() => {
        res.status(500).json({
            message: "Internal Server Error"
        })
    })
    
})

router.get("/courses", authMiddleware("admin"), function(req, res) {
    Course.find({
        adminId: req.id
    }).then(courses => {
        res.status(200).json({
            courses
        })
    }).catch(() => {
        res.status(500).json({
            message: "Internal Server Error"
        })
    })
})

module.exports = router