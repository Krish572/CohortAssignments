const {Router} = require("express");
const {User, Course} = require("../db/db");
const bcrypt = require("bcrypt");
const {SignupSchema} = require("../validations/validation");
const jwt = require("jsonwebtoken");
const { authMiddleware } = require("../auth/authMiddleware");
const router = Router();
const JWT_SECRET = process.env.JWT_SECRET;



router.post("/signup", async function (req, res) {
    const parseSuccess = SignupSchema.safeParse(req.body);

    if(!parseSuccess.success){
        return res.status(400).json({
            error: (JSON.parse(parseSuccess.error.message)).map((er) => er.message)
        })
    }

    const {email, password} = req.body;
    const hashedPassword = await bcrypt.hash(password, 5);
    User.create({
        email, 
        password: hashedPassword
    }).then(() => {
        res.status(201).json({
            message: "Sign Up successful"
        })
    }).catch(() => {
        res.status(400).json({
            message: "Email already exits"
        })
    })
    
})

router.post("/signin", async function(req, res) {
    const parseSuccess = SignupSchema.safeParse(req.body);

    if(!parseSuccess.success){
        return res.status(400).json({
            error: (JSON.parse(parseSuccess.error.message)).map(er => er.message)
        })
    }

    const {email, password} = req.body;
    User.findOne({email: email})
    .then(async (response) => {
        if(!response){
            return res.status(401).json({message: "Invalid Email or Password"});
        }
        const passwordMatch = await bcrypt.compare(password, response.password);
        if(!passwordMatch){
            return res.status(401).json({
                message: "Invalid Password"
            })
        }
        const token = jwt.sign({id: response._id}, JWT_SECRET);
        res.status(200).json({
            token
        })
    }).catch(() => {
        res.status(500).json({message: "Internal Server Error"});
    })

})

router.get("/courses", authMiddleware("user"), function(req, res) {
    Course.find()
    .then(courses => {
        res.status(200).json({
            courses
        })
    }).catch(() => {
        res.status(500).json({
            message: "Internal Server Error"
        })
    })
})

router.put("/courses/:courseId", authMiddleware("user"),async function(req, res) {
    try{
    const {courseId} = req.params;

    const course = await Course.findById(courseId);
    if(!course) {
        res.status(404).json({message: "Course not found"});
    }
    
    User.findByIdAndUpdate(req.id, {
        $addToSet : {purchasedCourses : courseId}
    }, {
        new: true
    })
    .then((response) => {
        if(!response){
            return res.status(404).json({
                message: "user not found"
            })
        }
        res.status(200).json({message: "Course purchased succesfully"});
    }).catch(e => {
        res.json({
            message: "error in adding the course"
        })
    })}
    catch(er){
        res.json({message: "Invalid course Id or internal server issue"});
    }
})

module.exports = router;