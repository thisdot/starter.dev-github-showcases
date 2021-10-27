import type { NextApiRequest, NextApiResponse } from "next";
import { getToken } from "next-auth/jwt";

// todo: turn into proxy for github graphql api
async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  const token = await getToken({
    req,
    encryption: true,
    secret: process.env.JWT_SECRET,
    signingKey: process.env.JWT_SIGNING_KEY,
    encryptionKey: process.env.JWT_ENCRYPTION_KEY,
  });

  res.status(200).json(token);
}

export default handler;
