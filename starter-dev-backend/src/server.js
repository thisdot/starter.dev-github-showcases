/* eslint-disable no-undef */
import serverless from 'serverless-http';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import {
  accessToken,
  clearCookies,
  fetchSigninUrl,
  getAccessToken,
} from './lib';
import cookieParser from 'cookie-parser';

export const app = express();
const router = express.Router();

router.get('/', (req, res) => {
  return res.status(200).json({
    message: 'Welcome to the starter.dev backend!',
  });
});

router.get('/hello', (req, res) => {
  if (!req.query.greeting) {
    res.send('Hello, there');
  }
  res.send(`Hello, ${req.query.greeting}`);
});

// Step 1 - push user to Github OAuth
router.get('/api/auth/signin', fetchSigninUrl);

// Step 2 - verify code and state then fetch token and save it as a cookie
// TODO: replace Github OAuth app with new endpoint -> `https://<host>/api/auth/signin/callback`
router.get('/api/auth/signin/callback', accessToken);

// Step 3 - client fetches token from cookie
router.get('/api/auth/token', getAccessToken);

router.post('/api/auth/signout', clearCookies);

// middleware configs
app.use(
  cors({
    credentials: true,
    origin: new RegExp(
      [
        'localhost',
        '127.0.0.1',
        process.env.SERVER_BASE_URL,
        process.env.CORS_REGEXP,
        process.env.PR_PREVIEW_REGEXP,
      ]
        .filter(Boolean)
        .join('|'),
    ),
  }),
);
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(bodyParser.json());
// app.use('/.netlify/functions/server', router); // path must route to lambda

export default app;
export const handler = serverless(app);
