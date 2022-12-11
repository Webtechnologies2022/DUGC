const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let userSchema = new Schema(
  {
    email: {
      type:String,
    },
    password:{
      type:String
    },
  },
  {
    collection: "userAtuh", //table name
  }
);

module.exports = mongoose.model("userSchema", userSchema);
