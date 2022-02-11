import {ACCESS_TOKEN_COOKIE} from './constants';

export const getAccessToken = async (req, res, next) => {
  res.status(200).json({
    access_token: req.cookies[ACCESS_TOKEN_COOKIE]
  });
};
