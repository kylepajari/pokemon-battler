const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const UsersController = require("../controllers/users");

function isAuthenticated(req, res, next) {
  if (!req.cookies.id_token) {
    return res.status(401).send("Unauthorized");
  }
  const payload = jwt.verify(req.cookies.id_token, "secret");
  req.user = payload._doc;
  return next();
}

router.get("/users", (req, res) => {
  UsersController.getAllUsers().then(results => res.json(results));
});

router.post("/signup", (req, res) => {
  UsersController.createUser(req.body)
    .then(() => res.send("Account created! You can now Log In."))
    .catch(err => res.status(400).send(err));
});

router.post("/login", (req, res) => {
  UsersController.Login(req.body).then(result => {
    if (!result) return res.status(404).send("No matching user found!");
    const token = jwt.sign({ ...result }, "secret");
    return res.send({ token: token, user: result });
  });
});

router.put("/updatebadges", (req, res) => {
  UsersController.UpdateBadges(req.body.id, req.body.badgesCount)
    .then(() => res.send("Badges updated successfully"))
    .catch(err => res.status(400).send(err));
});

router.put("/updateteam", (req, res) => {
  UsersController.UpdateTeam(req.body.id, req.body.team)
    .then(() => res.send("Team updated successfully"))
    .catch(err => res.status(400).send(err));
});

router.get("/:id", (req, res) => {
  UsersController.getUserById(req.params.id)
    .then(result => res.json(result))
    .catch(err => res.status(404).send(err.message));
});

router.get("/getteam/:id", (req, res) => {
  UsersController.getTeamById(req.params.id)
    .then(result => res.send(result))
    .catch(err => res.status(404).send(err.message));
});

module.exports = router;
