const {
    HOME_PAGE_PATH
} = require("./pathConstant");

// GET: request for home page
const serveHomepage = (req, res) => {
    // serve home page
    res.sendFile(HOME_PAGE_PATH);
};

// GET: request for img:id file 
const serveImage = (req, res) => {
    // serve the image of the requested image id 
    res.send(req.url)
};

//GET: request for total no of imgs
const serveTotalImageCount = (req, res) => {
    // server the total no of images
    res.send(req.url)
};

//POST: request to add an Image
const addImage = (req, res) => {
    // add a new image
    res.send(req.url)
};

//export modules
module.exports = {
    serveHomepage,
    serveImage,
    serveTotalImageCount,
    addImage
}