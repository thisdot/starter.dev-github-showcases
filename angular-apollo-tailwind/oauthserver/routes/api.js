const express = require("express");
const { fetchSigninUrl, fetchAccessToken } = require("../lib");

const router = express.Router();

/* Generate access token */
router.get("/api/auth/signin", (req, res) => {
  const url = fetchSigninUrl();
  res.send(url);
});

router.post("/api/auth/signin/callback", async (req, res) => {
  try {
    const { data } = await fetchAccessToken(req, res);
    res.send(data);
  } catch (err) {
    res.json(err);
  }
});

router.post("/api/auth/sigout", (req, res) => {});

module.exports = router;
