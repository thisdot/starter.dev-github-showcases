export default (req, res) => {
  req.status(202).clearCookie('__Host-access_token').send('Cookies cleared');
};
