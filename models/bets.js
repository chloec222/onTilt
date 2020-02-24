// const sequelize = require("../config");
// const { DataTypes } = require("sequelize");

module.exports = function(sequelize, DataTypes) {
  const Bet = sequelize.define("Bet", {
    userPick: DataTypes.String,
    allowNull: false
  });

  Bet.associate = function(models) {
    Bet.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Bet;
};
