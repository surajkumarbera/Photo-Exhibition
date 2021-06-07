const {Router} = require("express");
const {HOME_PAGE_PATH} = require("./pathConstant");
const {
    expressFormidableMiddleware,
    loggerMiddleware
} = require("./middleware");

// init router
const router = Router();

//add middleware
router.use(expressFormidableMiddleware);
router.use(loggerMiddleware);


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
router.post("/addImage", (req, res) => {
    // const title = req.fields["title"];
    // const description = req.fields.description;
    // const submittedBy = req.fields.submittedBy;
    // const ImageFile = req.files;

    // if(isReqValid(title, description, submittedBy, ImageFile)) {
    //     success head
    //     addImagetoList(title, description, submittedBy, ImageFile);
    // } else {
    //     error head
    //     delete error img
    // }
    const { title, description, submittedBy } = req.fields;
    const { img } = req.files;
    console.log(req.fields);
    res.send(/* head */"Success");
});



//export modules
module.exports = router;