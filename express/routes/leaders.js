const express = require("express");
const router = express.Router();
const LeadersController = require("../controllers/leaders");

router.get("/leaders", (req, res) => {
  LeadersController.getAllLeaders().then(results => res.json(results));
});

router.get("/getteam/:name", (req, res) => {
  LeadersController.getTeamByName(req.params.name)
    .then(result => res.send(result))
    .catch(err => res.status(404).send(err.message));
});

router.post("/createleader/:name", (req, res) => {
  LeadersController.createLeader(req.params.name)
    .then(() => res.send("Leader Created!"))
    .catch(err => res.status(400).send(err));
});

router.put("/updateteam", (req, res) => {
  LeadersController.UpdateTeam(req.body.name, req.body.team)
    .then(() => res.send("Leader Team updated successfully"))
    .catch(err => res.status(400).send(err));
});

module.exports = router;
