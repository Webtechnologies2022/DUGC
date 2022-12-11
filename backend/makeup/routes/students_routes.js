const express = require('express');

const studentRoute = express.Router();
let studentSchema = require('../model/student_model');

studentRoute.route('/').get((req, res, next)=>{
    studentSchema.find((error, data)=>{
        if(error){
            return next(error)
        }else{
            res.json(data)
        }
    })
})


studentRoute.route('/student/:id').get((req, res)=>{
    studentSchema.findById(req.params.id, (error, data)=>{
        if(error){
            return next(error)
        }else{
            res.json(data)
        }
    })
})

studentRoute.route('/add-student').post((req, res, next) => {
    studentSchema.create(req.body, (error, data) => {
        if(error){
            return next(error)
        }else{
            res.json(data)
        }
    })
})

studentRoute.route('/update-student/:id').put((req, res) => {
    studentSchema.findByIdAndUpdate(req.params.id,{
        $set: req.body
    } ,(error, data) => {
        if(error){
            return next(error)
        }else{
            res.json(data)
        }
    })
})

module.exports = studentRoute;