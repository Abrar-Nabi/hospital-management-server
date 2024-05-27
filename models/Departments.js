const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const departmentSchema = new Schema({
    departmentName: { type: String, required: true },
    departmentDescription: { type: String, required: true },
    
}, { timestamps: true }); 

const Department = mongoose.model('Department', departmentSchema);

module.exports = Department;
