"use strict"

const fs = require("fs")
const path = require("path")
const Sequelize = require("sequelize")
const basename = path.basename(__filename)
const env = process.env.NODE_ENV || "development"
const config = require(__dirname + "/../config/config.js")[env]
const db = {}

let dbURL = "postgresql://spotcheck_db_user:nZuliKjSlhF21x6llqPVX0mtTA8Wxgm3@dpg-cv74co7noe9s73c46t9g-a/spotcheck_db"

let sequelize
if (config.use_env_variable || dbURL) {
  sequelize = new Sequelize(process.env[config.use_env_variable] || dbURL, config)
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  )
}

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    )
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(
      sequelize,
      Sequelize.DataTypes
    )
    db[model.name] = model
  })

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db)
  }
})

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db


