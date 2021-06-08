const path = require("path");

// constants
const HOME_PAGE_PATH = path.join(__dirname, "../", "../", "Client", "homePage.html");
const IMAGEE_FILE_PATH = path.join(__dirname, "../", "../", "Data", "imgs");
const JSON_FILE_PATH = path.join(__dirname, "../", "../", "Data", "data.json");
//export modules
module.exports = {
    HOME_PAGE_PATH,
    IMAGEE_FILE_PATH,
    JSON_FILE_PATH
};