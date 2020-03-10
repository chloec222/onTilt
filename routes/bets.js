const db = require("../models");

module.exports = function(app) {
  app.get("/api/bets/", function(req, res) {
    var query = {};
    if (req.query.user_id) {
      query.UserId = req.query.user_id;
    }
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Author
    db.Bet.findAll({
      where: query,
      include: [db.User]
    }).then(function(dbPost) {
      res.json(dbPost);
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
      },
      include: [db.User]
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
