const db = require("../models");

module.exports = function(app) {
  app.get("/api/users/", function(req, res) {
    db.User.findAll({
      include: [db.Bet]
    }).then(function(dbUser) {
      res.json(dbUser);
    });
  });
  app.post("/api/users", function(req, res) {
    // Create an Author with the data available to us in req.body
    console.log(req.body);
    db.User.create(req.body).then(function(dbUser) {
      res.json(dbUser);
    });
  });
  app.get("/api/users/:id", function(req, res) {
    // Find one Author with the id in req.params.id and return them to the user with res.json
    db.User.findOne({
      where: {
        id: req.params.id
      },
      include: db.Bet
    }).then(function(dbUser) {
      res.json(dbUser);
    });
  });
  app.delete("/api/users/:id", function(req, res) {
    // Delete the Author with the id available to us in req.params.id
    db.User.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbUser) {
      res.json(dbUser);
    });
  });
  app
    .route("/api/users/:id/bets")
    .get(async (req, res) => {
      const bets = await db.Bet.findAll({ where: { UserId: req.params.id } });
      res.json({ bets });
    })
    .post(async (req, res) => {
      const result = await db.Bet.create({
        UserId: req.params.id,
        ...req.body
      });
      res.json(result);
    });
};
