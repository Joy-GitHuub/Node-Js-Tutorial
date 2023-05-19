const express = require("express");
const server = express();
const PORT = 3000;


server.use(express.json());

// EJS set
server.set("view engine", "ejs");

/**
 ** Response Object Properties-----------------
 * - response represents the HTTP response.
 * res.headersSent ** return boolean res send return true or not false.
 * res.locals
 * 
 * 
 * Response Methods----------------------
 * res.cookie() - send cookes in res.
 * res.clearCookie() - clear cookie in client.
 * res.end() - send response with out data
 * res.send() - send response with data
 * res.json() - send response with json data.
 * res.status() - just send statuscode response not end 
 * res.sendStatus() - get a HTTP status code and return a OK | Bad Request | Unauthorized | Created | Not Found | Method Not Allowed
 * res.render() - use for view engine page render.
 * res.format() - accept check function and response.  
 * res.location() - res url in headers.
 * res.redirect() - redirect user.
 * res.set() - function is used to set the res HTTP header field to value.
 * res.get() - function is used to get res HTTP header field to value.
 */

/* 
single Response Function...
    res.format({
       'text/plain': () => {
           res.send('Hi');
       },
       "text/html": () => {
           res.render("pages/about", {
               page: "About Page"
           });
       },
       "application/json": () => {
           res.json({ message: "about" });
       },
       default: () => {
           res.status(406).send("Not acceptable");
       }
   });
*/

server.get('/about', (req, res) => {
    res.clearCookie("name");
    res.send("HELLO ABOUT")
    res.end()
});

server.get("/test", (req, res) => {
    res.send("Redirect in Test Router");
});

server.listen(PORT, () => {
    console.log(`Server runing is on this ${PORT}`);
});