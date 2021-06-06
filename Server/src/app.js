const express = require('express');
const { 
  expressFormidableMiddleware,
  loggerMiddleware,
} = require("./middleware");

//initializing app
const app = express();

//add middleware
app.use(expressFormidableMiddleware);
app.use(loggerMiddleware);

// app routers
app.get("/", (req, res) => {
  res.end();
});

//export modules
module.exports = app;