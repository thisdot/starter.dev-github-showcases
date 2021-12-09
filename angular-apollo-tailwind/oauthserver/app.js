const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const config = require("./config");

const apiRouter = require("./routes/api");

const app = express();
const PORT = config.PORT ?? 4000;

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", apiRouter);

app.listen(PORT, () => {
  console.log(`OAuth app listening at http://localhost:${PORT}`);
});
