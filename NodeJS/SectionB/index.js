const express = require("express");
const app = express();
const mongoose = require("mongoose");
const students = require("./database/studentdb");
app.use(express.json());

app.get("/", (req, res) => {
    res.send("welcome to node js restapi");
})
app.get("/students", async (req, res) => {
    try {
        const studentData = await students.find();
        if (!studentData) {
            res.status(200).json({ message: "Record not found!" });
        }
        res.status(200).json(studentData);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})

app.post("/students", async(req, res) => {
    try {
        const newStudent = new students(req.body);
        await newStudent.save();
        if (!newStudent) {
            res.status(404).json({ error: "Record not inserted!" });
        }
        res.status(201).json(newStudent);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
 });

app.listen(3000, async(error) => {
    if (error) {
        console.log(error);
    }
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/studentdb");
        console.log("Connected to Database StudentDB");
        console.log("Server running on http://localhost:3000");
    } catch (error) {
        console({ error: error.message });
    }
})

