import { Handler, HandlerEvent, HandlerContext } from '@netlify/functions';
import fetch from 'node-fetch';

const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
  // get the code from the query string
  const { code, state } = event.queryStringParameters;

  if (!code || !state) {
    return {
      statusCode: 400,
      body: 'code and state are required',
    };
  }

  // get the redirect_url from the state
  const redirect_url = Buffer.from(state, 'base64').toString('ascii');

  // exchange the code for an access token
  const params = new URLSearchParams({
    client_id: process.env.GITHUB_CLIENT_ID ?? '',
    client_secret: process.env.GITHUB_CLIENT_SECRET ?? '',
    code,
    redirect_uri: `${process.env.SERVER_BASE_URL}/api/auth/signin/callback`,
  });

  return {
    statusCode: 302,
    headers: {
      Location: '',
    },
  };
};

export { handler };
