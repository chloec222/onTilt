const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.JAWSDB_URL || "mysql://root:1234@localhost:3306/database_development"
);

module.exports = sequelize;
