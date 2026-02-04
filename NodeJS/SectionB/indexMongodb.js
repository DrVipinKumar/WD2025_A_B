const express = require("express");
const app = express();
app.use(express.json());
const mongoose = require("mongoose");
const employee = require("./database/connectdb");
app.get("/", async (req, res) => {
    try {
        const empData = await employee.find();
        if (!empData) {
            res.status(404).json({ error: "Records not found!" });
        }
        res.status(200).json(empData);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})
app.get("/emp/:eid", async (req, res) => {
    try {
        const empData = await employee.findOne({empid:req.params.eid});
        if (!empData) {
            res.status(404).json({ error: "Records not found!" });
        }
        res.status(200).json(empData);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})
app.post("/emp", async (req, res) => {
    try {

        const newEmp = new employee(req.body);
        await newEmp.save();
        if (!newEmp) {
            res.status(404).json({ error: "Records not inserted!" });
        }
        res.status(200).json(newEmp);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})
app.put("/emp/:eid", async (req, res) => {
    try {
        const updateEmp = await employee.findOneAndUpdate({ empid: req.params.eid }, req.body, { new: true });
        if (!updateEmp) {
            res.status(404).json({ error: "Records not updated!" });
        }
        res.status(200).json(updateEmp);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})
app.delete("/emp/:eid", async (req, res) => {
    try {
        const updateEmp = await employee.deleteOne({ empid: req.params.eid });
        if (!updateEmp) {
            res.status(404).json({ error: "Record not deleted!" });
        }
        res.status(200).json({message:"Record deleted!"});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})

app.listen(3000, async(error) => {
    if (error) {
        console.log(error)
    }
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/empdb");
        console.log("Database connected....");    
        console.log("Server running on http://localhost:3000");
    } catch (error) {
        console.log(error);
    }
})


