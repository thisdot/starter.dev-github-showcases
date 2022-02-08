import serverless from 'serverless-http';
import express from 'express';
import cors from 'cors';
import { fetchSigninUrl, fetchAccessToken } from './lib';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res, next) => {
  return res.status(200).json({
    message: 'Hello from root!',
  });
});

app.get('/api/auth/signin', (req, res, next) => {
  const url = fetchSigninUrl();
  return res.send(url);
});

// This should be an actual database so functions can reach it between invocations
const REDIRECT_URL_DATABASE = new Map();

app.post('/api/auth/signin', (req, res, next) => {
  let { redirectUrl } = fetchSigninUrl();
  const uiRedirect = req.body.redirectUrl;
  const reqId = `${new Date().getTime()}_${Math.floor(Math.random() * 1000)}`;
  REDIRECT_URL_DATABASE.set(reqId, uiRedirect);
  const redirectUri = encodeURI(`http://localhost:4000/api/auth/${reqId}`);
  return res.send({
    /**
     * We use encodeURI here to make sure special characters are preserved if necessary.
     * e.g.: the route contains a space character
     */
    redirectUrl: `${redirectUrl}&redirect_uri=${redirectUri}`
  });
});

app.get('/api/auth/:reqId', (req, res) => {
  const reqId = req.params['reqId'];
  const code = req.query['code'];
  const redirectUrl = REDIRECT_URL_DATABASE.get(reqId);
  REDIRECT_URL_DATABASE.delete(reqId);

  res.redirect(200,`${redirectUrl}?code=${code}`);
});

app.post('/api/auth/signin/callback', async (req, res, next) => {
  try {
    const { data } = await fetchAccessToken(req, res);
    return res.send(data);
  } catch (err) {
    return res.json(err);
  }
});

app.post('/api/auth/sigout', (req, res, next) => {});

app.use((req, res, next) => {
  return res.status(404).json({
    error: 'Not Found',
  });
});

export const handler = serverless(app);
