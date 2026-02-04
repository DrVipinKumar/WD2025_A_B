const mongoose = require("mongoose");

const empSchema = new mongoose.Schema({
    empid: {
        type: Number, required:true, unique:true
    } ,
    name: {
        type:String, minlength:3
    },
    dept: {
        type:String, default:"Sales"
    },
    salary: {
        type:Number,min:10000
    },
    designation:String
});

const employee = mongoose.model("employee", empSchema, "employee");

module.exports = employee;