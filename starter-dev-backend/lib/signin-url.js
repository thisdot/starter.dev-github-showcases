/**
 * Fetches an access token from Github.
 */
export default () => {
  const scopes = 'scope=user&scope=read:org';

  const params = new URLSearchParams({
    client_id: process.env.GITHUB_CLIENT_ID ?? '',
  });

  return {
    redirectUrl: `https://github.com/login/oauth/authorize?${scopes}&${params.toString()}`,
  };
};
