import fetch from 'node-fetch';
import { ACCESS_TOKEN_COOKIE } from './constants';

/**
 * Make the request to fetch the access token.
 */
export default async (req, res) => {
  // Get encoded state and code
  const { state, code } = req.query;

  try {
    if (!state) {
      throw new Error('No state provided.');
    }

    if (!code) {
      throw new Error('No code provided.');
    }

    const result = await fetch(`${process.env.GITHUB_OAUTH_URL}/access_token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        client_id: process.env.GITHUB_CLIENT_ID ?? '',
        client_secret: process.env.GITHUB_CLIENT_SECRET ?? '',
        code: code,
      }),
    });
    const data = await result.json();
    const accessToken = data['access_token'];
    const redirectUrl = Buffer.from(state, 'base64').toString();

    res
      // `__Host-` restricts the cookie to the origin making requests
      .cookie(ACCESS_TOKEN_COOKIE, accessToken, {
        sameSite: 'None', // used with cors
        path: '/', // needed for `__Host-`
        maxAge: 604800000, // 1 week
        httpOnly: true, // use `withCredentials` in the client to use the cookie
        secure: true, // needed for `__Host-`
      })
      .redirect(303, `${redirectUrl}`);
  } catch (err) {
    console.log('Error:', err);
    return res.status(401).send({
      error: err,
      message: 'Authentication failed. Access token could not be retrieved.',
    });
  }
};
