import { Handler, HandlerEvent, HandlerContext } from '@netlify/functions';

const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
  // get the redirect_url from the query string
  const { redirect_url } = event.queryStringParameters;

  if (!redirect_url) {
    return {
      statusCode: 400,
      body: 'redirect_url is required',
    };
  }

  const state = Buffer.from(redirect_url).toString('base64');
  const scopes = 'scope=user&scope=read:org';

  const params = new URLSearchParams({
    client_id: process.env.GITHUB_CLIENT_ID ?? '',
    redirect_uri: `${process.env.SERVER_BASE_URL}/api/auth/signin/callback`,
    state,
  });

  // redirect to github
  return {
    statusCode: 302,
    headers: {
      Location: `https://github.com/login/oauth/authorize?${scopes}&${params.toString()}`,
    },
  };
};

export { handler };
