import serverless from 'serverless-http';
import express from 'express';
import cors from 'cors';
import { fetchSigninUrl, fetchAccessToken, codeAuth } from './lib';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res, next) => {
  return res.status(200).json({
    message: 'Hello from root!',
  });
});

// Step 1 - push user to new tab for auth
app.get('/api/auth/signin', fetchSigninUrl);

// Step 2 - verify code and store cache
// TODO: replace Github OAuth app with new endpoint -> `https://<aws-host>/api/auth/signin/callback`
app.get('/api/auth/signin/callback', codeAuth);

// Step 3 - client polls token endpoint
app.get('/api/auth/token', async (req, res) => {
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
