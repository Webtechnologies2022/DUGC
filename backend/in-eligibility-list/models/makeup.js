const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let studentmodel= new Schema(
  {
    name: {
      type: String,
    },
    sem: {
      type: Number,
    },
    srn: {
      type: String,
    },
    rollNo: {
      type: Number,
    },
    division: {
      type: String,
    },
    selectedCourse: {
      type: Object,
    },
    status:{
      type:String
    },
    reason:{
      type:String
    },
  },
  {
    collection: "makeup", //table name
  }
);

module.exports = mongoose.model("Studentmodel", studentmodel);
