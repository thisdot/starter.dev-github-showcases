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
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(bodyParser.json());
app.use('/.netlify/functions/server', router); // path must route to lambda

router.get('/', (req, res) => {
  res.redirect(303, `https://starter.dev`);
});
router.post('/', (req, res) => res.json({ postBody: req.body }));

// Step 1 - push user to Github OAuth
app.get('/api/auth/signin', fetchSigninUrl);

// Step 2 - verify code and state then fetch token and save it as a cookie
// TODO: replace Github OAuth app with new endpoint -> `https://<host>/api/auth/signin/callback`
app.get('/api/auth/signin/callback', accessToken);

// Step 3 - client fetches token from cookie
app.get('/api/auth/token', getAccessToken);

app.post('/api/auth/signout', clearCookies);

// Step 1 - push user to Github OAuth
app.use('/', (req, res) => res.sendFile(path.join(__dirname, '../index.html')));

export const handler = serverless(app);
