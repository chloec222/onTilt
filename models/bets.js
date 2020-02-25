// const sequelize = require("../config");
// const { DataTypes } = require("sequelize");

module.exports = function(sequelize, DataTypes) {
  const Bet = sequelize.define("Bet", {
    teamName: DataTypes.STRING,
    wager: DataTypes.INTEGER
  });
  return Bet;
};
