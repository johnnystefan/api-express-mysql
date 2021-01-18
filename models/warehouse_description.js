"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class warehouse_description extends Model {
    static associate(models) {
      this.belongsTo(models.warehouse);
    }
  }
  warehouse_description.init(
    {
      phone: {
        type: DataTypes.BIGINT(11),
        validate: {
          isInt: true,
        },
      },
      city: DataTypes.STRING,
      address: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "warehouse_description",
      freezeTableName: true,
    }
  );
  return warehouse_description;
};
