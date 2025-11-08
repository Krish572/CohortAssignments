const jwt = require("jsonwebtoken");
const {Admin, User} = require("../db/db");
const JWT_SECRET = process.env.JWT_SECRET;


function authMiddleware(role){
    return async function(req, res, next){
        if(!req.headers.authorization){
            return res.status(401).json({
                message: "Authorization header required"
            })
        }
        const token = req.headers.authorization.split(" ")[1];
        try{
            const info = jwt.verify(token, JWT_SECRET);
            let account = null;
            if(role === "admin"){
                account = await Admin.findById(info.id)
            }else if(role === "user"){
                account = await User.findById(info.id)
            }

            if(!account){
                return res.status(401).json({
                    message: "Unauthorized"
                })
            }
            req.id = account._id;
            next();
        }catch(e){
            res.status(401).json({
                message: "Invalid or expired token"
            });
        }
    }
}

module.exports = { authMiddleware };