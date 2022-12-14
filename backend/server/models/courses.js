const mongoose = require('mongoose');

const course = new mongoose.Schema(
    [{

        name: { type: String },
        code: { type: Number },
        credits: { type: String },
        credit: { type: String }
    }]);

const courseModel = mongoose.model('course', course);

module.exports = courseModel;
