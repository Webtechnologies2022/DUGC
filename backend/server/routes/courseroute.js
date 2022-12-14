const express = require('express');
const app = express();
const courseRoute = express.Router();
let courseSchema = require('../models/courses');


courseRoute.route('/add-course').post((req, res, next) => {
    courseSchema.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})



courseRoute.route('/getCourses').get((req, res, next) => {
    courseSchema.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

module.exports = courseRoute;