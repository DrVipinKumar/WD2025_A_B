const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use((req, res, next) => {
//     if (req.query.name==="admin")
//     {
//         next();
//     }
// })
app.get("/", (req,res) => {
    res.send("hello");
})
app.get("/:user/:pwd", (req,res) => {
    const username = req.params.user;    
    const pwd = req.params.pwd;
    if (username === "kiet" && pwd === "mca") {
    res.status(200).json({ id:Date.now().toLocaleString(),date:Date(),message: "user verified" });
    } else {
     res.status(404).json({ error: "not found" });     
       
    }
})
app.post("/login", (req,res) => {
    const data = req.body;    
    const username = data.user;
    const pwd = data.pwd;
    if (username === "kiet" && pwd === "mca") {
    res.status(200).json({ id:Date.now().toLocaleString(),date:Date(),message: "user verified" });
    } else {
     res.status(404).json({ error: "not found" });     
       
    }
})
app.get("/about", (req,res) => {
    res.status(200).json({ info: "kiet mca" });
})
app.listen(3000, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("Server running on port http://localhost:3000");
})