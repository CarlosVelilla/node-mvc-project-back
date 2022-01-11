const config = require("./config/config");

const express = require("express");
const { json } = require("body-parser");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");
// const errorHandler = require("./middleware/error");

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

app.use("/api/auth", require("./routes/auth-routes"));
app.use("/api/book", require("./routes/book-routes"));
app.use("/api/private", require("./routes/private"));

// Error Handler should be last piece of middleware
// app.use(errorHandler);

module.exports = app;
