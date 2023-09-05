require("dotenv").config();
require("express-async-errors");
const path = require("path");

const express = require("express");
const app = express();

// error handler
const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");
const sendEmail = require("./controllers/sendEmail");

app.use(express.static(path.resolve(__dirname, "client")));
app.use(express.json());

// routes
app.get("*", (res, req) => {
  res.sendFile(path.resolve(__dirname, "client", "index.html"));
});

app.post("/", sendEmail);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
