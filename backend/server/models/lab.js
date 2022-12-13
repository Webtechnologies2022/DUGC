const mongoose = require('mongoose');

const labSchema =new mongoose.Schema(
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

const LabModel = mongoose.model('lab',labSchema);

module.exports = LabModel;
