const url = require("url");
const { StringDecoder } = require('string_decoder');
const routers = require('../router/routers');
const { notFoundHandler } = require("../handler/notfoundhandler");


const handler = {};
handler.handleReqRes = (req, res) => {
    const parseUrl = url.parse(req.url, true);
    const path = parseUrl.pathname;
    const trimedPath = path.replace(/^\/+|\/+$/g, "")
    const method = req.method.toLowerCase();
    const queryStringObj = parseUrl.query;
    const headers = req.headers;

    const requestProperties = {
        parseUrl,
        path,
        trimedPath,
        method,
        queryStringObj,
        headers,
    };

    const choseHandler = routers[trimedPath] ? routers[trimedPath] : notFoundHandler;

    const decoder = new StringDecoder("utf-8");
    let realData = '';

    req.on("data", (buffer) => {
        realData = realData + decoder.write(buffer);
    });

    req.on("end", () => {
        realData += decoder.end();
        choseHandler(requestProperties, (statusCode, payload) => {
            statusCode = typeof (statusCode) === "number" ? statusCode : 500;
            payload = typeof (payload) === "object" ? payload : {};
            const payloadString = JSON.stringify(payload);
            res.writeHead(statusCode);
            res.end(payloadString);
        });
    });
};

module.exports = handler;