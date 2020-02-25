const db = require();

module.exports = function(app) {
  app.get("/api/bets/", function(req, res) {
    db.Bet.findAll({}).then(function(dbBet) {
      res.json(dbBet);
    });
  });
};
