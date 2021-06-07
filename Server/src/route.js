const {Router} = require("express");
const {HOME_PAGE_PATH} = require("./pathConstant");

const router = Router();

//                      app routers...
/* ************************************************* */

// serve home page
router.get("/", (req, res) => {
    res.sendFile(HOME_PAGE_PATH);
});

// serve about page
router.get("/about", (req, res) => {
    res.send("<h2>In development...</h2>");
});

// serve the image of the requested image id 
router.get("/image:id", (req, res) => {
    let imageID = req.params.id;
    //const image = req.locals.gallery[imageID];
    //res.sendFile(image.getPath());
    res.send(String(imageID));
});

// server the total no of images
router.get("/totalImageCount", (req, res) => {
    //const length = req.locals.gallery.getLength();
    //res.send(String(length));
    res.send();
});

// add a new image
router.get("/addImage", (req, res) => {
    // if(isReqValid(req)) {
    //     success head

    //     title = req.fields.title;
    //     description = req.fields.description;
    //     submittedBy = req.fields.submittedBy;
    //     ImageFile = req.files;

    //     addImagetoList();
    // } else {
    //     error head
    // }
    res.send();
});



//export modules
module.exports = router;