const mongoose = require('mongoose');

const studentSchema =new mongoose.Schema(
 [{
        Sl_no:{type:Number},
        USN:{type:String},
        Name:{type:String},
        Sem:{type:Number},
        div:{type:String},
        CourseId:{type:String},
        CourseName:{type:String},
        CIE:{type:Number},
        Attendance:{type:Number}
}]);

const studentModel = mongoose.model('students',studentSchema);

module.exports = studentModel;