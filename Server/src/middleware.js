const expressFormidable = require('express-formidable');
const { IMAGE_FOLDER_PATH } = require("./pathConstant");

//express-formidable middleware
const options = {
    encoding: 'utf-8',
    uploadDir: IMAGE_FOLDER_PATH,
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