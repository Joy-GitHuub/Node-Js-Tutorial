const express = require("express");
const server = express();
const adminRouter = require('./Router/adminRouter');
const publicRouter = require('./Router/publicRouter');
const PORT = 3000;


// Create Middleware Function
function log(req, res, next) {
    console.log(`I am logging something!`);
    next();
};


// admin Router use.
server.use('/admin', adminRouter);
// publi Router use.
server.use("/", publicRouter)


server.listen(PORT, () => {
    console.log(`Server is Running......`);
});