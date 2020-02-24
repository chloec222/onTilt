// var router = require("express").Router();
var Bet = require("../../../models/bets");
const db = require("../models");

module.exports = function(app) {
  app.get("/api/bets/", function(req, res) {
    db.Bet.findAll({}).then(function(dbBet) {
      res.json(dbBet);
    });
  });
  app.post("/api/bets/", function(req, res) {
    db.Bet.create({
      userPick: req.body.userPick
    }).then(function(dbBet) {
      res.json(dbBet);
    });
  });
};
