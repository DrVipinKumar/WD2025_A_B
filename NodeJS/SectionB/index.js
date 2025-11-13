const express = require("express");
const app = express();
const path = require("path");
const public = path.join(__dirname, "/public");
app.use(express.static(public));
app.get("/", (req,res) => {
    res.send("<h2>Welcome to Express JS</h2>");
})
app.get("/about", (req, res) => {
    res.send("{message:This is about page!}")
})
app.get("/htmlFile", (req,res) => {
    res.sendFile(`${public}/mypage.html`);
})

app.listen(3000, (error) => {
    if (error) {
        console.log(error)
    }
    console.log("Express Server Running on http://localhost:3000");
})