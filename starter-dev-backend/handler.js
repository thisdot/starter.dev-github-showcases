import serverless from 'serverless-http';
import express from 'express';
import cors from 'cors';
import { fetchAccessToken, fetchSigninUrl } from './lib';
import cookieParser from 'cookie-parser';

const app = express();

app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.get('/', (req, res, next) => {
  return res.status(200).json({
    message: 'Hello from root!',
  });
});

app.get('/api/auth/signin', (req, res, next) => {
  const { redirectUrl } = fetchSigninUrl();
  const uiRedirect = req.query['redirect_url'];
  // TODO: set this up from env file probably
  const redirectUri = `http://localhost:4000/api/auth/redirect`;
  return res.cookie('redirect_url', uiRedirect, {
    httpOnly: true
  }).redirect(303,`${redirectUrl}&redirect_uri=${redirectUri}`);
});

app.get('/api/auth/redirect', async (req, res) => {
  const code = req.query['code'];
  console.warn('redirected', req.cookies);
  const redirectUrl = req.cookies['redirect_url'];
  console.warn('redirected cleared', req.cookies);

  const {data} = await fetchAccessToken(code);

  res
    .clearCookie('redirect_url')
    .cookie('access_token', data.access_token, {
      httpOnly: true
    })
    .redirect(303, `${redirectUrl}?code=${code}`);
});

app.post('/api/auth/signin/callback', async (req, res, next) => {
  // TODO: I still don't understand the last step of the diagram
  console.warn('cookies', req.cookies);

  try {
    // const {code} = req.body;
    // const {data} = await fetchAccessToken(code);
    return res.send({
      access_token: req.cookies.access_token
    });
  } catch (err) {
    return res.json(err);
  }
});

app.post('/api/auth/sigout', (req, res, next) => {
});

app.use((req, res, next) => {
  return res.status(404).json({
    error: 'Not Found',
  });
});

export const handler = serverless(app);
