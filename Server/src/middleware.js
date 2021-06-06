const expressFormidable = require('express-formidable');
const options = {
    encoding: 'utf-8',
    uploadDir: '/',
    multiples: false,
};
const expressFormidableMiddleware = expressFormidable(options);

const loggerMiddleware = function (req, res, next) {
    console.log("\n======================================\n");
    console.log(`Request method : ${req.method}`);
    console.log(`Request URL :  ${req.url}`);
    console.log(`At ${new Date().toLocaleString()}`);
    console.log(`Response statusCode : ${res.statusCode}`);
    next();
};

module.exports = {
    expressFormidableMiddleware,
    loggerMiddleware,
};