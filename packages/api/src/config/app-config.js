require("dotenv").config();

const {
  NODE_ENV = "development",
  MONGO_DB_URL_DEVELOPMENT,
  PORT = PORT,
} = process.env;

const baseConfig = {
  app: {
    port: PORT,
  },
  client: {
    url: "http://localhost:3000",
  },
};

const config = {
  development: {
    ...baseConfig,
    db: {
      url: MONGO_DB_URL_DEVELOPMENT,
    },
  },
};

module.exports = {
  config: config[NODE_ENV],
};
