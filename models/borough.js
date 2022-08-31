"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
  class Borough extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Borough.hasMany(models.Post, { foreignKey: "boroughId" })
    }
  }
  Borough.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Borough",
      tableName: "boroughs",
    }
  )
  return Borough
}
