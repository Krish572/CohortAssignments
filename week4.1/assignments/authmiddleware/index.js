const express = require("express");

const app = express();

const valid_api_key = '100xdevs_cohort3_super_secret_valid_api_key';

function authmiddleware(req, res, next){
    const apikey = req.headers["api-key"];
    if(!apikey){
        return res.status(401).json({message: "Api key should be sent in headers"});
    }
    if(apikey !== valid_api_key){
        return res.status(401).json({message: "Invalid api key"});
    }
    next();
}

app.use(authmiddleware);

app.get("/", function(req, res) {
    res.status(200).json({message: "this is home page"});
})

app.listen(3000, function(){
    console.log("Server is listening on port 3000");
})