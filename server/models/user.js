﻿const mongoose = require('mongoose')

//Create the user schema
const UserSchema = new mongoose.Schema({
  userFirstname: {
    type: String
  },
  userLastname: {
    type: String
  },
  username: {
    type: String
  },
  password: {
    type: String
  }
});
//Create, instantiate and export model with schema
const Users = mongoose.model("User", UserSchema);
module.exports = Users;