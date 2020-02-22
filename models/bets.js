const sequelize = require("../config");
const { DataTypes } = require("sequelize");

const Bet = sequelize.define("Bet", {
  userPick: DataTypes.String,
  allowNull: false
});

Bet.sync();

module.exports = Bet;
