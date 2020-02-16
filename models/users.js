const sequelize = require('sequelize')
const connection = require('../config/index');

let User = connection.define("User", {
    username: sequelize.STRING,
    password: sequelize.STRING,
    name: sequelize.STRING,
    age: {
      type: sequelize.INTEGER,
      allowNull: false,
      len: [1, 2]
    },
    location: sequelize.STRING,
    style: sequelize.INTEGER,
    platform: sequelize.INTEGER
  })

  
module.exports = User;