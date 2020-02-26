module.exports = {
  development: {
    client: "sqlite3",
    useNullAsDefault: true,
    connection: { filename: "./data/comake.db3" },
    migrations: { directory: "./data/migrations" },
    seeds: { directory: "./data/seeds" },
    pool: {
      afterCreate: (conn, done) => {
        conn.run("PRAGMA foreign_keys = ON", done);
      }
    }
  },

  staging: {
    client: "sqlite3",
    connection: {
      database: "comake",
      user: "username",
      password: "password"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  },

  production: {
    client: "sqlite3",
    useNullAsDefault: true,
    connection: {
      database: "comake",
      user: "username",
      password: "password"
    },
    migrations: {
      directory: "./data/migrations",
      tableName: "knex_migrations"
    },
    seeds: { directory: "./data/seeds" }
  },
  testing: {
    client: "sqlite3",
    connection: {
      filename: "./database/test.db3"
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./database/migrations"
    },
    seeds: {
      directory: "./database/seeds"
    }
  }
};
