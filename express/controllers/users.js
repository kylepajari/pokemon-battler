var mongoose = require("mongoose");
const crypto = require("crypto");
var ObjectId = mongoose.Types.ObjectId;
const { UsersModel } = require("../../mongo/models");
const getAllUsers = () => {
  return UsersModel.find({});
};

const createUser = user => {
  const hash = crypto
    .createHash("md5")
    .update(user.password)
    .digest("hex");
  return UsersModel.create({
    username: user.username,
    password: hash,
    team: null,
    badges: 0
  });
};

const updateUser = (name, updates) => {
  // use name as the query and updates for the updates
  return UsersModel.updateOne(
    { username: name },
    {
      $set: {
        username: updates.username,
        password: updates.password,
        team: updates.team,
        badges: updates.badges
      }
    }
  );
};

const UpdateBadges = (id, badges) => {
  console.log("controller update badges");

  return UsersModel.updateOne({ _id: ObjectId(id) }, { $set: { badges } });
};

const Login = ({ username, password }) => {
  const hash = crypto
    .createHash("md5")
    .update(password)
    .digest("hex");
  return UsersModel.findOne({ username, password: hash });
};

const getUserById = id => {
  return UsersModel.findOne({ _id: ObjectId(id) });
};

module.exports = {
  getAllUsers,
  createUser,
  updateUser,
  UpdateBadges,
  Login,
  getUserById
};
