'use strict';

const mongoose = require(`mongoose`);
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  _id: { type: String, required: true },
  username: { type: String, required: [true, `username cannot be empty`], unique: true },
  password: { type: String, required: [true, `password cannot be empty`] },
  isAdmin: { type: Boolean, default: false }
});

module.exports = mongoose.model(`users`, UserSchema);
