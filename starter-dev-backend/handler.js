import serverless from "serverless-http";
import express from "express";
import cors from 'cors';
import { fetchSigninUrl, fetchAccessToken } from "./lib";

const app = express();

app.use(cors());

app.get("/", (req, res, next) => {
  return res.status(200).json({
    message: "Hello from root!",
  });
});

app.get("/api/auth/signin", (req, res, next) => {
  const url = fetchSigninUrl();
  return res.send(url);
});

app.post("/api/auth/signin/callback", async (req, res, next) => {
  try {
    const { data } = await fetchAccessToken(req, res);
    return res.send(data);
  } catch (err) {
    return res.json(err);
  }
});

app.post("/api/auth/sigout", (req, res, next) => {});

app.use((req, res, next) => {
  return res.status(404).json({
    error: "Not Found",
  });
});

export const handler = serverless(app);
