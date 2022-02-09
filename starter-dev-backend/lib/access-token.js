import axios from 'axios';

/**
 * Make the request to fetch the access token.
 */
export default (code) => {
  if (!code) {
    throw Error({
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
