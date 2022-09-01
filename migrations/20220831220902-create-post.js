"use strict"
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("posts", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      image: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      description: {
        type: Sequelize.TEXT,
      },
      bustLevel: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      address: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      profileId: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: "profiles",
          key: "id",
        },
      },
      // boroughId: {
      //   type: Sequelize.INTEGER,
      //   onDelete: "CASCADE",
      //   references: {
      //     model: "boroughs",
      //     key: "id",
      //   },
      // },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("posts")
  },
}
