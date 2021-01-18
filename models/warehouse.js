"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class warehouse extends Model {
    static associate(models) {
      this.hasMany(models.warehouse_description);
    }
  }
  warehouse.init(
    {
      name: { type: DataTypes.STRING, allowNull: false },
      headquarters_number: {
        type: DataTypes.BIGINT(20),
        validate: {
          isInt: true,
        },
      },
    },
    {
      sequelize,
      modelName: "warehouse",
      freezeTableName: true,
    }
  );
  return warehouse;
};
