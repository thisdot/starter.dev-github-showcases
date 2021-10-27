import type { NextApiRequest, NextApiResponse } from 'next';
import { getToken } from 'next-auth/jwt';
import { getJwtOptions } from '../../lib/getJwtOptions';

async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  const token = await getToken({
    req,
    ...getJwtOptions(),
  });

  if (token === null) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  try {
    const data = await fetch(process.env.GITHUB_GRAPHQL_ENDPOINT!, {
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
