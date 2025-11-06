const express = require("express");
const connectDB = require("./db/dbconnection");
const adminRouter = require("./routes/admin");

const app = express();

connectDB(); 
app.use(express.json());
app.use("/admin", adminRouter);


app.listen(3000, () => {
    console.log("Server is listening on Port 3000");
})
