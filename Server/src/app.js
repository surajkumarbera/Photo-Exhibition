const express = require('express');
const { 
  expressFormidableMiddleware,
  loggerMiddleware
} = require("./middleware");
const {
  serveHomepage,
  serveImage,
  serveTotalImageCount,
  addImage
} = require("./route");

//initializing app
const app = express();

//add middleware
app.use(expressFormidableMiddleware);
app.use(loggerMiddleware);

// app routers
app.get("/", serveHomepage);
app.get("/image:id", serveImage);
app.get("/totalImageCount", serveTotalImageCount);
app.post("/addImage", addImage);

//export modules
module.exports = app;