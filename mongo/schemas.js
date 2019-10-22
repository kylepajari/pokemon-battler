const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Users = new Schema({
  username: String,
  password: String,
  team: Array,
  badges: Number,
  lastLogin: Date
});

const Leaders = new Schema({
  name: String,
  team: Array
});

module.exports = { Users, Leaders };
