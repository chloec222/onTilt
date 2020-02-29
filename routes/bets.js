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
  app.get("/api/bets/:id", function(req, res) {
    // Find one Author with the id in req.params.id and return them to the user with res.json
    db.Bet.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbBet) {
      res.json(dbBet);
    });
  });
  app.delete("/api/bets/:id", function(req, res) {
    // Delete the Author with the id available to us in req.params.id
    db.Bet.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbBets) {
      res.json(dbBets);
    });
  });
};
