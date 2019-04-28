const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Users = new Schema({
  username: String,
  password: String,
  team: Array,
  badges: Number
});

module.exports = { Users };
