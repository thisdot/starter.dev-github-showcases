import { ACCESS_TOKEN_COOKIE } from './constants';

export default async (req, res, next) => {
  res.status(200).json({
    access_token: req.cookies[ACCESS_TOKEN_COOKIE],
  });
};
