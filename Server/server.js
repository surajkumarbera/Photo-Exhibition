const app = require("./src/app");

// server constants
const IP = "127.0.0.1";
const PORT = process.env.PORT || 1234;

// start the server
app.listen(PORT, IP, (err) => {
    if(err){
        console.log(err);
    }
    else{
        console.log("\n********************************************");
        console.log("Server start Listening...");
        console.log(`App Name: ${process.env.npm_package_name}`);
        console.log(`IP: ${IP}`);
        console.log(`Port: ${PORT}`);
        console.log("********************************************\n");
    }
});