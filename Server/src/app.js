const express = require("express");
const router = require("./route");
const { checkConstants } = require("./apputil");

//const dependency check
checkConstants();

//initializing app
const app = express();

// add router for app
app.use(router);

//export modules
module.exports = app;