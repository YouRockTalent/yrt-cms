module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "mongoose",
      settings: {
        host: env("DATABASE_HOST", "ds137650.mlab.com"),
        srv: env.bool("DATABASE_SRV", false),
        port: env.int("DATABASE_PORT", 37650),
        database: env("DATABASE_NAME", "yrt-cms"),
        username: env("DATABASE_USERNAME", "root"),
        password: env("DATABASE_PASSWORD", "root123"),
      },
      options: {
        authenticationDatabase: env("AUTHENTICATION_DATABASE", "yrt-cms"),
        ssl: env.bool("DATABASE_SSL", false),
      },
    },
  },
});
