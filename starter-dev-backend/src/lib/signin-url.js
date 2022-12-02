/* eslint-disable no-undef */
/**
 * Creates and redirects to initial Github OAuth for grant.
 */
export default (req, res) => {
  const { redirect_url } = req.query;

  if (!redirect_url) {
    return res.status(400).send('No client url provided.');
  }

  const state = Buffer.from(redirect_url).toString('base64');
  const scopes = 'scope=user&scope=read:org';
  const params = new URLSearchParams({
    client_id: process.env.GITHUB_CLIENT_ID ?? '',
    redirect_uri: `${process.env.SERVER_BASE_URL}/api/auth/signin/callback`,
    state,
  });

  res.redirect(
    303,
    `${process.env.GITHUB_OAUTH_URL}/authorize?${scopes}&${params.toString()}`,
  );
};
