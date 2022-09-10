// {
//   "development": {
//     "database": "spotcheck_dev",
//     "host": "127.0.0.1",
//   "dialect": "postgres"
//   },
//   "test": {
//     "database": "spotCheck_test",
//     "host": "127.0.0.1",
//   "dialect": "postgres"
//   },
//   "production": {
//     "database": "spotCheck_production",
//     "host": "127.0.0.1",
//   "dialect": "postgres"
//   }
// }

require("dotenv").config()
module.exports = {
  development: {
    database: "spotcheck_dev",
    dialect: "postgres",
  },
  test: {
    database: "spotCheck_test",
    dialect: "postgres",
  },
  production: {
    use_env_variable: "DATABASE_URL",
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
        require: true,
      },
    },
  },
}
