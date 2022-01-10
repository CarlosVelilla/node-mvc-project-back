const config = require("./config/config");

const express = require("express");
const { json } = require("body-parser");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");

const app = express();

app.use(morgan("dev"));
app.use(helmet());
app.use(json());
app.use(
  cors({
    origin: config.client.URL,
  }),
);

app.get("/", (req, res) => {
  res.status(200).send({
    data: "hello-mundo",
  });
});

module.exports = app;
