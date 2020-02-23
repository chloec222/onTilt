const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.JAWSDB_URL || "mysql://root:1234@localhost:3306/ontilt_db"
);

module.exports = sequelize;
