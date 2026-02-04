const express = require("express");
const app = express();
const userRouter = require("./auth/user");
const loginRouter = require("./auth/login");
app.use("/user", userRouter);
app.use("/login", loginRouter);
app.get("/", (req, res) => {
    const { user, pwd } = req.query;
    if (user === "kiet" && pwd==="mca"){
    res.send("Welcome to Advance Route Handler in Node JS");
    } else {
      res.redirect("/login")  
}
})


app.listen(3000, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("Server running on http://localhost:3000/");
})