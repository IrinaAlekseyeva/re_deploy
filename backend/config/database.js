// This will allow you to load the database configuration environment variables
// from the `.env` file into the `config/index.js`, as well as define the global schema for the project.

// backend/config/database.js
const config = require('./index');

module.exports = {
  development: {
    storage: config.dbFile,
    dialect: "sqlite",
    seederStorage: "sequelize",
    logQueryParameters: true,
    typeValidation: true
  },
  production: {
    use_env_variable: 'postgresql://irina_db_q9lg_user:fuQaHF1c2aPAz3fjQCMX8Wm4YkoHWuB8@dpg-cu4a3ndds78s739qc7a0-a/irina_db_q9lg',
    dialect: 'postgres',
    seederStorage: 'sequelize',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    },
    define: {
      schema: process.env.SCHEMA
    }
  }
};
