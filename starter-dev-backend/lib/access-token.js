import axios from 'axios';
import { verifierCache } from './signin-url';
import { codeCache } from './code-auth';

/**
 * Make the request to fetch the access token.
 */
export default (req, res) => {
  // Get code
  const { state } = req.query;

  if (!state) {
    throw Error({
      status: 404,
      success: false,
      error: 'No state provided.',
    });
  }

  const verifier = verifierCache.get(state);
  const code = codeCache.get(state);

  if (!code && !verifier) {
    throw Error({
      status: 404,
      success: false,
      error: 'No authentication code provided.',
    });
  }

  return axios({
    url: 'https://github.com/login/oauth/access_token',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    data: {
      client_id: process.env.GITHUB_CLIENT_ID ?? '',
      client_secret: process.env.GITHUB_CLIENT_SECRET ?? '',
      code,
    },
  });
};
