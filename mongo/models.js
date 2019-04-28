const mongoose = require("mongoose");
const { Users } = require("./schemas");

const UsersModel = mongoose.model("User", Users);

module.exports = {
  UsersModel
};
