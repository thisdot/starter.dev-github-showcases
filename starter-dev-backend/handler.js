import serverless from 'serverless-http';
import express from 'express';
import cors from 'cors';
import {
  accessToken,
  clearCookies,
  fetchSigninUrl,
  getAccessToken,
} from './lib';
import cookieParser from 'cookie-parser';

const app = express();

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
app.use(express.json());

app.get('/', (req, res, next) => {
  return res.status(200).json({
    message: 'Welcome to the starter.dev backend!',
  });
});

// Step 1 - push user to Github OAuth
app.get('/api/auth/signin', fetchSigninUrl);

// Step 2 - verify code and state then fetch token and save it as a cookie
// TODO: replace Github OAuth app with new endpoint -> `https://<host>/api/auth/signin/callback`
app.get('/api/auth/signin/callback', accessToken);

// Step 3 - client fetches token from cookie
app.get('/api/auth/token', getAccessToken);

app.post('/api/auth/signout', clearCookies);

app.use((req, res, next) => {
  return res.status(404).json({
    error: 'Not Found',
  });
});

export const handler = serverless(app);
