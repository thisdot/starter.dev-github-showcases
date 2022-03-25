import type { NextApiRequest, NextApiResponse } from 'next';
import { getToken } from 'next-auth/jwt';
import { getJwtOptions } from '@lib/jwt';

const GRAPHQL_ENDPOINT = process.env.GITHUB_GRAPHQL_ENDPOINT;

/**
 * This endpoint is a client proxy to the GitHub GraphQL API
 */
async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  if (!GRAPHQL_ENDPOINT) {
    return res.status(500).json({ message: 'Invalid server configuration' });
  }

  const token = await getToken({
    req,
    ...getJwtOptions(),
  });

  if (token === null) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  try {
    const data = await fetch(GRAPHQL_ENDPOINT, {
      method: 'POST',
      headers: {
        authorization: `Bearer ${token.accessToken}`,
      },
      body: JSON.stringify(req.body),
    });
    const json = await data.json();
    return res.status(200).json(json);
  } catch (err) {
    return res
      .status(500)
      .json(
        err instanceof Error
          ? { message: err.message }
          : { message: 'Server error' }
      );
  }
}

export default handler;
