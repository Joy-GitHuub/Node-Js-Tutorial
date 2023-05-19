const express = require("express");
const fs = require("fs");
const server = express();
const PORT = 3000;

/**
 ** Express have 2 Type error handle
 * 1. synchronous code
 * - express give a invisible default error handling middleware
 * - i can handle my one error handling middleware
 * 2. asynchronous code error handle
 */

server.get('/', (req, res, next) => {
    fs.readFile("/file-doc-not", (err, data) => {
        if (err) {
            next(err)
        } else {
            res.send(data);
        }
    })
});

server.use((req, res, next) => {
    /*     res.status(404).json({
            msg: "Requested url was not found!",
        }); */
    next("Request url was not found");
})

server.use((err, req, res, next) => {
    console.log(err);
    if (err.message || err) {
        res.status(500).send(err.message ? err.message : err);
    }
});


server.listen(PORT, () => {
    console.log(`Server is Running........`);
})