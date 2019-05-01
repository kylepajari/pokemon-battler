var mongoose = require("mongoose");
const { LeadersModel } = require("../../mongo/models");

const getAllLeaders = () => {
  return LeadersModel.find({});
};

const createLeader = _name => {
  return LeadersModel.create({
    name: _name,
    team: []
  });
};

const UpdateTeam = (_name, team) => {
  return LeadersModel.updateOne({ name: _name }, { $set: { team } });
};

const getTeamByName = _name => {
  return LeadersModel.findOne({ name: _name });
};

module.exports = {
  getAllLeaders,
  createLeader,
  UpdateTeam,
  getTeamByName
};
