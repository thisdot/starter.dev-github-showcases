import { ACCESS_TOKEN_COOKIE } from './constants';

export default (req, res) => {
  res
    .status(200)
    .clearCookie(ACCESS_TOKEN_COOKIE, {
      sameSite: 'strict',
      path: '/',
      httpOnly: true,
      secure: true,
    })
    .json({ message: 'Cookies cleared' });
};
