const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const mongoose = require("mongoose");
const employee = require("./mongodb/connectdb");
app.get("/", async (req, res) => {
    try {
        const info = await employee.find();
        res.status(200).json(info);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})
app.get("/emp/:eid", async (req, res) => {
    try {
        const info = await employee.findOne({empid:req.params.eid});
        res.status(200).json(info);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})
app.post("/emp", async (req, res) => {
    try {
        const newEmp = new employee(req.body);
        await newEmp.save();
        if (!newEmp) {
            res.status(404).json({ error: "Record not inserted!" });
        }
        res.status(201).json(newEmp);
    } catch (error) {
         res.status(200).json({error:error.message})
    }

})
app.put("/emp/:eid", async (req, res) => {
    try {
        const empUpdate = await employee.findOneAndUpdate({ empid: req.params.eid }, req.body, { new: true });
        if (!empUpdate) {
           return res.status(404).json({ error: "Employee not found!" });
        }
        res.status(201).json(empUpdate);
        
    } catch (error) {
        res.status(404).json({error:error.message})
    }
})
app.delete("/emp/:eid", async (req, res) => {
    try {
        const delEmp = await employee.deleteOne({ empid: req.params.eid });
        if (delEmp.deletedCount===0) {
             return res.status(404).json({ error: "Employee not found!" });
        }
        res.status(200).json(delEmp);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
})

app.listen(3000, async (error) => {
    if (error) {
        console.log(error);
    }
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/empdb");
        console.log("Mongodb is connected...");
    } catch (error) {
        console.log(error);

    }
    console.log("Running on http://localhost:3000");

})