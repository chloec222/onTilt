const db = require("../models");
const express = require("express");
const router = express.Router();

router.get("/api/bets", function(req, res) {
  var query = {};
  if (req.query.user_id) {
    query.UserId = req.query.user_id;
  }
  db.Bet.findAll({
    where: query,

    include: [db.User]
  }).then(function(dbBet) {
    res.json(dbBet);
  });
});

router.get("/api/bets/:id", function(req, res) {
  db.Bet.findOne({
    where: {
      id: req.params.id
    }
  }).then(function(dbBet) {
    console.log(dbBet);
    res.json(dbBet);
  });
});

router.post("/api/bets", function(req, res) {
  db.Bet.create(req.body).then(function(dBet) {
    res.json(dbBet);
  });
});

router.delete("/api/bets/:id", function(req, res) {
  db.Bet.destroy({
    where: {
      id: req.params.id
    }
  }).then(function(dbBet) {
    res.json(dbBet);
  });
});

module.exports = router;
