const fs = require("fs");
const { Router } = require("express");
const { HOME_PAGE_PATH } = require("./pathConstant");
const {
    expressFormidableMiddleware,
    loggerMiddleware
} = require("./middleware");
const {
    getImage,
    getTotalImageCount,
    isReqValid,
    addtoList,
    deleteErrorImg
} = require("./apputil");

// init router
const router = Router();

//add middleware
router.use(expressFormidableMiddleware);
router.use(loggerMiddleware);


//                      app routers...
/* ************************************************* */

// serve home page
router.get("/", (req, res) => {
    if(fs.existsSync(HOME_PAGE_PATH)) {
        res.sendFile(HOME_PAGE_PATH);
    } else {
        //error head
        res.sendStatus(404);
    }
});

// serve the image of the requested image id 
router.get("/image:id", (req, res) => {
    const imageID = req.params.id;
    const length = getTotalImageCount();
    if(imageID >= 0  && imageID < length){
        var image = getImage(imageID);
        res.sendFile(image.path);
    }else{
        //error head
        res.sendStatus(404);
    }
});

// server the total no of images
router.get("/totalImageCount", (req, res) => {
    const length = getTotalImageCount();
    if(length !== undefined) {
        res.send(String(length));
    } else {
        // err head
        res.sendStatus(404);
    }
});

//get particular Image information
router.get("/imgInfo:id", (req, res) => {
   console.log("I'm in...");
   const imageID = req.params.id;
   const length = getTotalImageCount();
   if(imageID >= 0  && imageID < length){
       var image = getImage(imageID);
       let obj = {
           title: image.getTitle(),
           description: image.getDescription(),
           submittedBy: image.getSubmittedBy()
       }
       let jsonStr = JSON.stringify(obj);

       res.send({img: jsonStr});
   }else{
       //error head
       res.sendStatus(404);
   }
});

// add a new image
router.post("/addImage", (req, res) => {
    if(isReqValid(req.fields, req.files.imgFile)) {
        //success head
        addtoList(req.fields, req.files.imgFile);
        res.sendStatus(200);
    } else {
        //error head
        deleteErrorImg(req.files.imgFile);
        res.sendStatus(404);
    }
});

//export modules
module.exports = router;