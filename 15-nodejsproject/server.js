const http = require("http");
const { handleReqRes } = require('./helpers/handleReqRes');
const { staging } = require("./helpers/environments");
const data = require('./lib/data');


const app = {};


// data.create('test', "newFile", { "name": "Bangladesh", "langulage": "Bangla" }, (error) => {
//     console.log(`Errow was`, error);
// });

// data.read("test", "newFile", (err, data) => {
//     console.log(data);
// })

// data.update("test", "newFile", { "name": "Bangladesh", "langulage": "Bangla" }, (err) => {
//     if (!err) {
//         console.log(`SuccessFully Update File`);
//     }
// })

// data.delete("test", "newFile", (err) => {
//     if (!err) {
//         console.log(`SuccessFully Delete File`);
//     }
// })

// Create Server
app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(staging.port, () => {
        console.log(`Server is Running on this ${staging.port}...`);
    });
};

// Handle Request Response
app.handleReqRes = handleReqRes

// Start the Server
app.createServer();