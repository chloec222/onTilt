const db = require("../models");
const express = require("express");
const router = express.Router();

router.get("/api/users", function(req, res) {
  db.User.findAll({
    include: [db.Bet]
  }).then(function(dbUser) {
    res.json(dbUser);
  });
});

router.get("/api/users/:id", function(req, res) {
  db.USer.findOne({
    where: {
      id: req.params.id
    }
  }).then(function(dbUser) {
    res.json(dbUser);
  });
});

router.post("/api/users", function(req, res) {
  console.log(req.body);
  db.User.create(req.body).then(function(dbUser) {
    res.json(dbUser);
  });
});

router.delete("/api/users/:id", function(req, res) {
  db.User.destroy({
    where: {
      id: req.params.id
    }
  }).then(function(dbUser) {
    res.json(dbUser);
  });
});

module.exports = router;
