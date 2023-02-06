const sequelize = require("../utils/database");
const Sequelize = require("sequelize");

module.exports = sequelize.define(
  "product",
  {
    id: {
      type: Sequelize.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: Sequelize.STRING(100),
      allowNull: false,
    },
    price: {
      type: Sequelize.FLOAT,
      defaultValue: 0,
      allowNull: false,
    },
  },
  {
    paranoid: true,
    tableName: "products",
  }
);
