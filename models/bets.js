module.exports = function(sequelize, DataTypes) {
  const Bet = sequelize.define("Bet", {
    teamName: DataTypes.STRING,
    wager: DataTypes.INTEGER
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
