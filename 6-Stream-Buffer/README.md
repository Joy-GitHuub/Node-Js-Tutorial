 ** BUFFER Module 
 * 1. Buffer.from("abc") // return a Buffer text.
 * 2. To create a buffer, use Buffer.from()
 * 3. The buffers module provides a way of handling streams of binary data.

```node
const buffer = require("buffer");

const text = "My Name is Joy.";
const bufferConvert = Buffer.from(text);

const buf = new Buffer.alloc(5);
const buf2 = Buffer.from([10, 20, 30, 40, 50, 60, 70, 80, 90]);
```

1. First require fs module
2. use fs.createReadStrea() buildin function
3. use __dirname for get path
4. ourReadStrem give a event and this event use for get chunk of data.
5. "utf-8" use for buffer convert in data.
```node 
const fs = require('fs');

const ourReadStrem = fs.createReadStream(`${__dirname}/demo.txt`, "utf-8");
ourReadStrem.on("data", (chunk) => {
    console.log(chunk);
});
```


```node 
const http = require("http");
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write(`
        <html>
            <head>
                <title>Form</title>
            </head>
        </html>
        `);
        res.write(`
        <body>
            <form method="post" action="/process">
            <input name="msg" />
            </form>
        </body>
        `);
        res.end();
    } else if (req.url === "/process" && req.method === "POST") {
        const body = [];
        req.on("data", (chunk) => {
            body.push(chunk);
            res.write("This is Process now");
            res.end();
        });
        req.on("end", () => {
            const bodyParsed = Buffer.concat(body).toString();
            console.log(bodyParsed);
            console.log(`Data Get Finished`);
        })
    }
});

server.listen(5000, () => {
    console.log(`Server runing is Perfect on this ${5000}`);
})
```

```node
const fs = require("fs");

/* 
1. fs.createReadStream() use for read chunk of data. 
2. fs.createWriteStream() use for write data in chunk.
*/

const ourReadStream = fs.createReadStream(`${__dirname}/demo.txt`);
const ourWriteStream = fs.createWriteStream(`${__dirname}/output2.txt`);

ourReadStream.on("data", (chunk) => {
    ourWriteStream.write(chunk);
});

//  alternative
ourReadStream.pipe(ourWriteStream)
```

* Example
```node
const fs = require('fs');
const http = require("http");

http.createServer((req, res) => {
    const readDataStream = fs.createReadStream(`${__dirname}/demo.txt`);
    readDataStream.pipe(res);
}).listen(5000);
```