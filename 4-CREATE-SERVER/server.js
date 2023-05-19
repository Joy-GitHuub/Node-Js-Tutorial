const url = require("url");

const address = 'https://localhost:8080/default.htm?year=2017&month=february';
// console.log(url.parse(address, true));



/**
 *** Create Node js Server
 * 1. First require http
 * 2. http.createServer() function create. And this function need 2 parameters 1.req, 2.res
 * 3. return res.write("") this is response
 * 4. res.end()
 * 5. server running port defined in server.listen(5000)
 */

const http = require("http");
const fs = require("fs");

// const server = http.createServer((req, res) => {
//     res.write("Hello World");
//     res.end();
// });

// server.listen(5000);


http.createServer((req, res) => {
    if (req.url === "/") {
        fs.readFile("index.html", (error, data) => {
            // res.writeHead(202, { "Content-Type": "text/plain" })
            res.writeHead(202, { "Content-Type": "text/html" })
            const text = data.toString();
            res.write(text);
            res.end();
        })
    } else if (req.url === "/about" && req.method === "GET") {
        console.log(req.method);
        res.write("This is about page");
        res.end();
    } else if (req.url === "/data") {
        fs.readFile("demo.json", (error, data) => {
            res.writeHead(200, { "Content-type": "application/json" });
            res.write(data);
            res.end()
        })
    }
    else {
        res.write("Not Found !");
        res.end();
    }
}).listen(5000, () => {
    console.log(`Server is Running Now Successfully..`);
});