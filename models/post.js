"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Post.belongsTo(models.Borough, { foreignKey: "boroughId" })
      Post.belongsTo(models.Profile, { foreignKey: "profileId" })
    }
  }
  Post.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      image: {
        type: DataTypes.TEXT,
        allowNull: false,
      },

      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },

      bustLevel: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      address: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      profileId: {
        type: DataTypes.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: "profiles",
          key: "id",
        },
      },

      boroughId: {
        type: DataTypes.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: "boroughs",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "Post",
      tableName: "posts",
    }
  )
  return Post
}
