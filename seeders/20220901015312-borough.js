"use strict"

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      "boroughs",
      [
        {
          name: "Manhattan",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Staten Island",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Bronx",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Brooklyn",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Queens",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("boroughs", null, {})
  },
}
