import { createHash, randomUUID } from 'crypto';

export const verifierCache = new Map();

/**
 * Fetches an access token from Github.
 */
export default (req, res) => {
  // Initial client state
  const { state } = req.query;
  const scopes = 'scope=user&scope=read:org';

  const codeVerifier = randomUUID();
  const verifierHash = createHash('sha256');

  verifierCache.set(state, codeVerifier);
  verifierHash.update(codeVerifier);

  const params = new URLSearchParams({
    client_id: process.env.GITHUB_CLIENT_ID ?? '',
    state,
  });

  res.redirect(
    303,
    `https://github.com/login/oauth/authorize?${scopes}&${params.toString()}`
  );
};
