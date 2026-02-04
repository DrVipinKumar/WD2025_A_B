const mongoose = require("mongoose");

const employeeCol = new mongoose.Schema({
    empid: { type: Number, required:true,unique:true}, 
    name: { type: String, minlength: 3 },
    dept: { type: String, default:"Sales" },
    salary: { type: Number, default: 0 },
    designation: String,
    // issueDate: {
    //     type:Date, default:Date.now
    // }
});

const employee = mongoose.model("employee", employeeCol,"employee");
// const employee = mongoose.models.employee || mongoose.model("employee", employeeCol);
module.exports = employee;