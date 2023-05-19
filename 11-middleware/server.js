const express = require("express");
const server = express();
const PORT = 3000;

/* 
Express middleware refers to a set of functions that execute during the processing of HTTP requests received by an Express application. Middleware functions access the HTTP request and response objects. They either terminate the HTTP request or forward it for further processing to another middleware function.
- middleware is a function
- middleware like a fillter
- middleware have a next function
- any middleware have a power send response in client
-  middleware have a power throw error in client site.
- middleware have a executes any code.
- can change req and res object
- can end request/response cycle
- call next middleware by next(). 

** Types of middleware
- application level middleware * server.use(logger)
- router levele middleware * adminRouter.use(logger); | server.use("/admin", logger, adminRouter);
- built-in middleware ** server.use(express.json())
- third-party middleware. ** server.use(cookieParser()) like that
- error-handling middleware ** errorMiddleware(error, req, res, next) get 4 parameters (error, req, res, next) then express understand this is a error handleing middleware function. 

*/

// my Middleware Function
/*
const myMiddleware1 = (req, res, next) => {
    console.log(`Call My Middleware 1`);
    next();
};
const myMiddleware2 = (req, res, next) => {
    console.log(`Call My Middleware 2`);
    next();
};

server.use(myMiddleware1);
server.use(myMiddleware2); */

const adminRouter = express.Router();

const logger = (req, res, next) => {
    console.log(`${new Date(Date.now()).toLocaleString()} - ${req.method} - ${req.originalUrl} - ${req.protocol} - ${req.ip}`);
    next();
    // throw new Error("This is my own create Error")
}

server.use("/admin", logger, adminRouter);

adminRouter.get("/dashboard", (req, res) => {
    res.send("Dashboard");
});



server.get("/about", (req, res) => {
    res.send("About Page")
})

const errorMiddleware = (error, req, res, next) => {
    console.log(error.message);
    res.status(500).send("There was a server side error!")
};
server.use(errorMiddleware);

server.listen(PORT, () => {
    console.log(`Server is Running`);
})