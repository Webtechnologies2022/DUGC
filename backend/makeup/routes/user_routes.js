const express = require('express');

const userRoute = express.Router();
let userSchema= require('../model/users');

userRoute.route('/getuser').get((req, res, next)=>{
    userSchema.find((error, data)=>{
        if(error){
            return next(error)
        }else{
            res.json(data)
        }
    })
})


userRoute.route('/add-user').post((req, res, next) => {
    userSchema.create(req.body, (error, data) => {
        if(error){
            return next(error)
        }else{
            res.json(data)
        }
    })
})
userRoute.route('/user/:id').get((req, res)=>{
    userSchema.findById(req.params.id, (error, data)=>{
        if(error){
            return next(error)
        }else{
            res.json(data)
        }
    })
})


userRoute.route('/update-user/:id').put((req, res) => {
    userSchema.findByIdAndUpdate(req.params.id,{
        $set: req.body
    } ,(error, data) => {
        if(error){
            return next(error)
        }else{
            res.json(data)
        }
    })
})

module.exports = userRoute;