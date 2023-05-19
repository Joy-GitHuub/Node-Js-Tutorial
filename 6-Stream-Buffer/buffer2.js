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