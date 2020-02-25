// const sequelize = require("../config");
// const { DataTypes } = require("sequelize");

module.exports = function(sequelize, DataTypes) {
  const Bet = sequelize.define("Bet", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    category: {
      type: DataTypes.STRING,
      defaultValue: "Personal"
    }
  });
  return Bet;
};
