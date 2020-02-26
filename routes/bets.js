const db = require("../models");

module.exports = function(app) {
  app.get("/api/bets/", function(req, res) {
    db.Bet.findAll({}).then(function(dbBet) {
      res.json(dbBet);
    });
  });
  app.post("/api/bets", function(req, res) {
    // Create an Author with the data available to us in req.body
    console.log(req.body);
    db.Bet.create(req.body).then(function(dbBet) {
      res.json(dbBet);
    });
  });
};
