module.exports = {
  db: {
    client: "pg",
    connection: process.env.DATABASE_URL || {
      host: process.env.DB_HOST || "127.0.0.1",
      port: process.env.DB_PORT || 5432,
      database: process.env.DB_NAME || "michelin",
      user: process.env.DB_USER || "postgres",
      password: process.env.DB_PASSWORD || "postgres"
    }
  },

  express: {
    port: process.env.PORT || 3000
  },

  logger: {
    format: "dddd MMMM Do YYYY, h:mm:ss a"
  }
};
