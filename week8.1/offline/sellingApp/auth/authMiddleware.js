const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;


function authMiddleware(req, res, next){

    if(!req.headers.authorization){
        return res.status(401).json({
            message: "Authorization header required"
        })
    }
    const token = req.headers.authorization.split(" ")[1];
    try{
        const admin = jwt.verify(token, JWT_SECRET);
        req.id = admin.id;
        next();
    }catch(e){
        res.status(401).json({
            message: "Invalid or expired token"
        });
    }
    
}

module.exports = authMiddleware