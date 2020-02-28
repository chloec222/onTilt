const db = require("../../models");
const express = require('express');
const router = express.Router();

// Find all Authors and return them to the user with res.json
router.get("/api/users", function (req, res) {
  db.User.findAll({
    include: [db.Post]
  }).then(function (dbUser) {
    res.json(dUser);
  });
});

router.get("/api/users/:id", function (req, res) {
  // Find one User with the id in req.params.id and return them to the user with res.json
  db.User.findOne({
    where: {
      id: req.params.id
    }
  }).then(function (dbUser) {
    res.json(dbUser);
  });
});

router.post("/api/users", function (req, res) {
  // Create an User with the data available to us in req.body
  console.log(req.body);
  db.User.create(req.body).then(function (dbUser) {
    res.json(dbUser);
  });
});

// router.delete("/api/users/:id", function (req, res) {
//   // Delete the User with the id available to us in req.params.id
//   db.User.destroy({
//     where: {
//       id: req.params.id
//     }
//   }).then(function (dbUser) {
//     res.json(dbUser);
//   });
// });

module.exports = router;