const express = require("express");
const { json } = require("body-parser");
const helmet = require("helmet");
const morgan = require("morgan");

const app = express();

app.use(morgan("dev"));
app.use(helmet());
app.use(json());

app.get("/", (req, res) => {
  res.status(200).send({
    data: "hello-mundo",
  });
});

module.exports = app;
