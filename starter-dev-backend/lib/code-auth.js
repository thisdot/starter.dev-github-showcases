import { verifierCache } from './signin-url';

export const codeCache = new Map();

export default (req, res) => {
  const { state, code } = req.query;

  if (!code || !state) {
    return res.status(400).send();
  }

  if (!verifierCache.has(state)) {
    return res
      .status(401)
      .send('State not recognized. Please try authentication again.');
  }

  codeCache.set(state, code);
  res.send('Authenticated!');
};
