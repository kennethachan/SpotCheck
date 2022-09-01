"use strict"

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("profiles", "postId", {
      type: Sequelize.INTEGER,
      onDelete: "CASCADE",
      references: {
        model: "posts",
        key: "id",
      },
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("profiles", "postId")
  },
}
