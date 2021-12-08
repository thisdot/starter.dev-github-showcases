const axios = require("axios");
const config = require("../config");

/**
 * Make the request to fetch the access token.
 */
module.exports = (req, res) => {
  // Get code
  const { code } = req.body;

  if (!code) {
    throw Error({
      success: false,
      error: "No authentication code provided.",
    });
  }

  return axios({
    url: "https://github.com/login/oauth/access_token",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    data: {
      client_id: config.GITHUB_CLIENT_ID ?? "",
      client_secret: config.GITHUB_CLIENT_SECRET ?? "",
      code,
    },
  });
};
