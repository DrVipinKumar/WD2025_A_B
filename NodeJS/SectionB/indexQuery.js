const express = require("express");
const app = express();
const path = require("path");
const public = path.join(__dirname, "/public");
app.use(express.static(public));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.get("/", (req,res) => {
    res.send("<h2>Welcome to Express JS</h2>");
})
app.post("/login", (req,res) => {
    const data = req.body;
    const { user, pwd } = data;
    if (user === "kiet" & pwd === "mca") {
        res.status(200).json({ message: "Ok" });
    } else {
        res.status(200).json({ error: "user not found!" });
    }
})
app.post("/auth",(req,res) => {
    const { user, pwd } = req.body;
    if (user === "kiet" & pwd === "mca") {
        res.status(201).json({
            id: new Date(Date.now()),
            message: "Ok"
        });
    } else {
        res.status(201).json({ error: "user not found!" });
    }
})
app.get("/login/:user/:pwd", (req,res) => {
    const { user, pwd } = req.params;
    if (user === "kiet" & pwd === "mca") {
        res.status(200).json({ message: "Ok" });
    } else {
        res.status(200).json({ error: "user not found!" });
    }
})
app.get("/user", (req, res) => {
    const { user, pwd } = req.query;
    // const user = req.query.user;
    // const pwd = req.query.pwd;
    if (user === "kiet" & pwd === "mca") {
        res.status(200).json({ message: "Ok" });
    } else {
        res.status(200).json({ error: "user not found!" });
    }
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