"use strict"

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("posts", "boroughId", {
      type: Sequelize.INTEGER,
      onDelete: "CASCADE",
      references: {
        model: "boroughs",
        key: "id",
      },
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("posts", "boroughId")
  },
}
