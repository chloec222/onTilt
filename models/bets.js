// const sequelize = require("../config");
// const { DataTypes } = require("sequelize");

module.exports = function(sequelize, DataTypes) {
  const Bet = sequelize.define("Bet", {
    userPick: DataTypes.String,
    allowNull: false
  });
  return Bet;
};
// Bet.sync();

module.exports = Bet;
