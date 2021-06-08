const fs = require("fs");
const Image = require("./Image");
const {
    getJSONObj,
    rewriteJSON
} = require("./jsonHandeler");

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

// export modules
module.exports = {
    getImage,
    getTotalImageCount,
    isReqValid,
    addtoList,
    deleteErrorImg
};