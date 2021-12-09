/**
 * Fetches an access token from Github.
 */
export default () => {
  const params = new URLSearchParams({
    client_id: process.env.GITHUB_CLIENT_ID ?? "",
    client_secret: process.env.GITHUB_CLIENT_SECRET ?? "",
  });

  return {
    redirectUrl: `https://github.com/login/oauth/authorize?${params.toString()}`,
  };
};
