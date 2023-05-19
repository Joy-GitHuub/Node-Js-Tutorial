const fs = require('fs');
const http = require("http");


http.createServer((req, res) => {
    const readDataStream = fs.createReadStream(`${__dirname}/demo.txt`);
    readDataStream.pipe(res);
}).listen(5000);