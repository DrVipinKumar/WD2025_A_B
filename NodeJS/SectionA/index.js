const express = require("express");
const app = express();
const path = require("path");
const public = path.join(__dirname, "/public")
app.use(express.static(public));
app.get("/", (req,res) => {
    // res.send("Welcome to Express JS in NOde JS!");
    res.sendFile(`${public}/index.html`);
})
app.get("/about", (req,res) => {
    res.send("<h2>This is about page</h2>")
})
app.listen(3000, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("Express running on http://localhost:3000")
})