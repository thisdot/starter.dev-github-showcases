const config = require("../config");

/**
 * Fetches an access token from Github.
 */
module.exports = () => {
  const params = new URLSearchParams({
    client_id: config.GITHUB_CLIENT_ID ?? "",
    client_secret: config.GITHUB_CLIENT_SECRET ?? "",
  });

  return {
    redirectUrl: `https://github.com/login/oauth/authorize?${params.toString()}`,
  };
};
