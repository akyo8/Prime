require("dotenv").config();
module.exports = {
  development: {
    client: process.env.DB_CLIENT,
    connection: process.env.DB_CONNECTION,
    migrations: {
      directory: process.env.DB_MIGRATION,
    },
    seeds: {
      directory: process.env.DB_SEED,
    },
    useNullAsDefault: true,
  },

  test: {
    client: process.env.DB_CLIENT,
    connection: process.env.DB_CONNECTION,
    migrations: {
      directory: process.env.DB_MIGRATION,
    },
    seeds: {
      directory: process.env.DB_SEED,
    },
    useNullAsDefault: true,
  },

  production: {
    client: process.env.DB_PRODUCTION_CLIENT,
    connection: {
      host: process.env.DB_PRODUCTION_CONNECTION,
      user: process.env.DB_PRODUCTION_USER,
      password: process.env.DB_PRODUCTION_PASSWORD,
      database: process.env.DB_PRODUCTION_DATABASE,
    },
    migrations: {
      directory: process.env.DB_PRODUCTION_MIGRATION,
    },
    seeds: {
      directory: process.env.DB_PRODUCTION_SEED,
    },
    useNullAsDefault: true,
  },
};
