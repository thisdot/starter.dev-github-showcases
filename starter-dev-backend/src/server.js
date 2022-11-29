import serverless from 'serverless-http';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import graphql from './routes';
// import {
//   accessToken,
//   clearCookies,
//   fetchSigninUrl,
//   getAccessToken,
// } from './lib';
// import cookieParser from 'cookie-parser';

export const app = express();
const router = express.Router();

router.get('/', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('<h1>Hello from Express.js!</h1>');
  res.end();
});
router.get('/another', (req, res) => res.json({ route: req.originalUrl }));
router.post('/', (req, res) => res.json({ postBody: req.body }));

app.use(bodyParser.json());
app.use('/.netlify/functions/server', router); // path must route to lambda
app.use('/', (req, res) => res.sendFile(path.join(__dirname, '../index.html')));

export const handler = serverless(app);
