const path = require("path");

// constants
const HOME_PAGE_PATH = path.join(__dirname, "../", "../", "Client", "homePage.html");
const DATA_FOLDER_PATH = path.join(__dirname, "../", "../", "Data");
const IMAGE_FOLDER_PATH = path.join(__dirname, "../", "../", "Data", "imgs");
const JSON_FILE_PATH = path.join(__dirname, "../", "../", "Data", "data.json");
//export modules
module.exports = {
    HOME_PAGE_PATH,
    DATA_FOLDER_PATH,
    IMAGE_FOLDER_PATH,
    JSON_FILE_PATH
};