const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  age: {
    type: Number,
    require: true,
  },
  email: {
    type: String,
  },
  mobile: {
    type: String,
  },
  addrerss: {
    type: String,
  },
  aadharCardNumber: {
    type: Number,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
  role:{
    type:String,
    enum:['voter','admin'],
    default:'voter'
  },
  isVoted:{
    type:Boolean,
    default:false
  }
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
