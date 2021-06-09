const fs = require("fs");
const Image = require("./Image");
const pathConst = require("./pathConstant");

const {
    getJSONObj,
    rewriteJSON
} = require("./jsonHandeler");
const { exit } = require("process");

const getImage = (imageID) => {
    imgArray = getJSONObj();
    img = new Image (
        imgArray[imageID].title,
        imgArray[imageID].description,
        imgArray[imageID].submittedBy,
        imgArray[imageID].path
    );
    return img;
};
    
const getTotalImageCount = () => {
    imgArray = getJSONObj();
    return imgArray.length;
};     
    
const isReqValid = (fields, imgFiles) => {
    if(
        fields.title == "" ||
        fields.description == "" ||
        fields.submittedBy == "" ||
        imgFiles.size <= 0 ||
        imgFiles.type.indexOf("image/") != 0
    ) {
        return false;
    }
    return true;
};                   
    
const addtoList = (fields, imgFiles) => {
    imgArray = getJSONObj();
    img = new Image(
        fields.title,
        fields.description,
        fields.submittedBy,
        imgFiles.path
    );
    imgArray.push(img);
    rewriteJSON(imgArray);
};
    
const deleteErrorImg = (imgFiles) => {
    //remove img file path imgFiles.path
    fs.unlinkSync(imgFiles.path);
};

//check Data files existence
const checkConstants = () => {
    if(!fs.existsSync(pathConst.HOME_PAGE_PATH)){
        console.log(" :( Home Page missing.");
        console.log(" :( Terminating process...");
        exit(1);
    } else {
        console.log(" :) Home Page reachable...");
    }

    if(!fs.existsSync(pathConst.DATA_FOLDER_PATH)){
        console.log(" :| Data Folder does not exists.");
        fs.mkdirSync(pathConst.DATA_FOLDER_PATH);
        console.log(" :) Data Folder CREATED...");
    } else {
        console.log(" :) Data Folder reachable...");
    }

    if(!fs.existsSync(pathConst.IMAGE_FOLDER_PATH)){
        console.log(" :| Image Folder does not exists.");
        fs.mkdirSync(pathConst.IMAGE_FOLDER_PATH);
        console.log(" :) Image Folder CREATED...");
    } else {
        console.log(" :) Image Folder reachable...");
    }

    if(!fs.existsSync(pathConst.JSON_FILE_PATH)){
        console.log(" :| JSON File does not exists.");
        fs.writeFileSync(pathConst.JSON_FILE_PATH, "");
        console.log(" :)JSON File CREATED...");
    } else {
        console.log(" :) JSON File reachable...");
    }
    
};

// export modules
module.exports = {
    getImage,
    getTotalImageCount,
    isReqValid,
    addtoList,
    deleteErrorImg,
    checkConstants
};