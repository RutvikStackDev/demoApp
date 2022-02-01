const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  fname: { type: String },
  lname: { type: String },
  email: { type: String },
  contact: { type: Number },
  product: { type: String },
  quantity: { type: Number },
});

const User = mongoose.model("userData", UserSchema);

module.exports = User;
