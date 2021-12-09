const dotenv = require("dotenv");

// get .env vars
dotenv.config();

module.exports = {
  GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID ?? "",
  GITHUB_CLIENT_SECRET: process.env.GITHUB_CLIENT_SECRET ?? "",
  PORT: process.env.PORT,
};
