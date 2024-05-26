// Update with your config settings.
import { config } from "dotenv";

config()

const { MYSQL_HOST, MYSQL_DATABASE, MYSQL_USER, MYSQL_PASSWORD } = process.env;

const baseConn = {
  client: "mysql2",
  connection: {
    host: MYSQL_HOST,
    user: MYSQL_USER,
    password: MYSQL_PASSWORD,
    database: MYSQL_DATABASE,
  },

  migrations: {
    tableName: "knex_migrations",
    directory: './src/config/migrations'
  },
};

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
const knexConfig = {
  development: {
    ...baseConn,
  },

  production: {
    ...baseConn,
    pool: {
      min: 2,
      max: 10,
    },
  },
}

export default knexConfig
