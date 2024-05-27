const express = require('express');
const router = express.Router();


const Department =
	require('../models/Departments');

// Get all departments
router.route('/').get((req, res) => {
    Department.find()
        .then(departments => res.json(departments))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Add new department
router.route('/add').post((req, res) => {
    const { departmentName, departmentDescription } = req.body;
    const newDepartment = new Department({ departmentName, departmentDescription });

    newDepartment.save()
        .then(savedDepartment => res.json(savedDepartment))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Update department data
router.route('/update/:id').post((req, res) => {
    Department.findById(req.params.id)
        .then(department => {
            department.departmentName = req.body.departmentName;
            department.departmentDescription = req.body.departmentDescription;

            department.save()
                .then(() => res.json('Department updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

// Delete department
router.route('/delete/:id').delete((req, res) => {
    Department.findByIdAndDelete(req.params.id)
        .then(() => res.json('Department deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
