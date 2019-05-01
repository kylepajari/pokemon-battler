const mongoose = require("mongoose");
const { Users, Leaders } = require("./schemas");

const UsersModel = mongoose.model("User", Users);
const LeadersModel = mongoose.model("Leaders", Leaders);

module.exports = {
  UsersModel,
  LeadersModel
};
