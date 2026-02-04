const express = require("express");
const app = express();
const auth = require("./auth/login");
const filter = (req,res,next) => {
    if (!req.query.user) {
        console.log("this is not valid!");
    } else {
        next();
    }
}
// app.use(filter);//valid for all routes
app.use("/user", auth);
app.get("/", (req, res) => {
    res.send("Welcome to Advance Rounting in Node JS");
})

app.listen(3000, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("Running on http://localhost:3000");
})