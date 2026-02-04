const mongoose = require("mongoose");
const studentSchema = new mongoose.Schema(
    {
        sid: { type:Number,required:true,unique:true },
        sname: { type: String, minlength: 3 },
        course: { type: String, default: "B.Tech" },
        marks: { type: Number, min: 0 },
        branch: { type: String, default: "CSE" }
    }
);

const students = mongoose.model("student", studentSchema, "student");

module.exports= students;
