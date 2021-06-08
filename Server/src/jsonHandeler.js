const fs = require("fs");
const { JSON_FILE_PATH } = require("./pathConstant");

const getJSONObj = () => {
    let jsonObj = [];
    let jsonString = fs.readFileSync(JSON_FILE_PATH, "utf-8");
    if(jsonString != ""){
        jsonObj = JSON.parse(jsonString);
    }
    return jsonObj;
};

const rewriteJSON = (imgArray) => {
    let jsonString = JSON.stringify(imgArray);
    fs.writeFileSync(JSON_FILE_PATH, jsonString, "utf-8");
};

module.exports = {
    getJSONObj,
    rewriteJSON
};