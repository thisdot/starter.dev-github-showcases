import axios from 'axios';

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

    const result = await axios({
      url: `${process.env.GITHUB_OAUTH_URL}/access_token`,
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

    const accessToken = result.data['access_token'];
    const redirectUrl = Buffer.from(state, 'base64').toString();

    res
      // `__Host-` restricts the cookie to the origin making requests
      .cookie('__Host-access_token', accessToken, {
        sameSite: 'strict', // used with cors
        path: '/', // needed for `__Host-`
        maxAge: 604800000, // 1 week
        httpOnly: true, // user `withCredentials` in the client to use the cookie
        secure: true, // needed for `__Host-`
      })
      // .send('Cookie created successfully');
      .redirect(303, `${redirectUrl}`);
  } catch (err) {
    console.log('Error:', err);
    return res.status(401).send({
      error: err,
      message: 'Authentication failed. Access token could not be retrieved.',
    });
  }
};
