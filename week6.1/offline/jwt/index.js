const jwt = require("jsonwebtoken");
const JWT_SECRET = "krish572"

function generateJwt(username){
    const generatedJwt = jwt.sign({username}, JWT_SECRET);
    return generatedJwt;
}

function decodeJwt(token){
    const decodedInfo = jwt.decode(token);
    if(!decodedInfo){
        return "Invalid token";
    }
    return decodedInfo;
}

function verifyJwt(token){
    try{
        return jwt.verify(token, JWT_SECRET);
    }catch(e){
        return "Invalid Token or Signature";
    }
}

// console.log(generateJwt("krishna"));
//console.log(decodeJwt("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImtyaXNobmEiLCJpYXQiOjE3NjIwNjI5MDF9.tPZzl9Jsjj9tGHjcnVCjvirepBFOm--t7tmRPQzRRdA"));
console.log(decodeJwt("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImtyaXNobmEiLCJpYXQiOjE3NjIwNjI5MDF9.e8lsapO5C8OuTz1ZXK19Q4DVr7No6OdANn8JR5Ug55w"));


//Try taking reference to notes
console.log(verifyJwt("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImtyaXNobmEiLCJpYXQiOjE3NjIwNjI5MDF9.tPZzl9Jsjj9tGHjcnVCjvirepBFOm--t7tmRPQzRRdA"));
console.log(verifyJwt("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImtyaXNobmEiLCJpYXQiOjE3NjIwNjI5MDF9.tPZzl9Jsjj9tGHjcnVCjvirepBFOm--t7tmRPQzRRdA"));