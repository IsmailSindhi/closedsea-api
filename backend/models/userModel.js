const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: [true, "Please Enter Your Name"],
    maxLength: [30, "Name cannot exceed 30 characters"],
    minLength: [4, "Name should have more than 4 characters"],
  },
  identity: {
      type: String,
      required: true,
  },
  
  public_key: {
    type: String,
    required: [true, "Please Enter Your Email"],
    unique: true,
    validate: [validator.isEmail, "Please Enter a valid Email"],
  },
  profilePic: {
    public_id: {
      type: String,
    },
    url: {
      type: String,
    },
  },
  coverPic: {
    public_id: {
      type: String,
    },
    url: {
      type: String,
    },
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  following : [
      {
          type: mongoose.Schema.ObjectID,
          ref: "user"
      }
  ],
  followers : [
    {
        type: mongoose.Schema.ObjectID,
        ref: "user"
    }
],

});

module.exports = mongoose.model("User", userSchema);
