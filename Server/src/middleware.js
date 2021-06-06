const expressFormidable = require('express-formidable');

//express-formidable middleware
const options = {
    encoding: 'utf-8',
    uploadDir: '/',
    multiples: false,
};
const expressFormidableMiddleware = expressFormidable(options);

// logger middleware
const loggerMiddleware = function (req, res, next) {
    console.log("\n======================================\n");
    console.log(`Request method : ${req.method}`);
    console.log(`Request URL :  ${req.url}`);
    console.log(`At ${new Date().toLocaleString()}`);
    console.log(`Response statusCode : ${res.statusCode}`);
    next();
};

// exports modules
module.exports = {
    expressFormidableMiddleware,
    loggerMiddleware
};