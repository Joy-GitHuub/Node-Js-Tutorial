/**
 ** BUFFER Module 
 * 1. Buffer.from("abc") // return a Buffer text.
 * 2. To create a buffer, use Buffer.from()
 * 3. The buffers module provides a way of handling streams of binary data.
 */
const buffer = require("buffer");

const text = "My Name is Joy.";
const bufferConvert = Buffer.from(text);

const buf = new Buffer.alloc(5);
const buf2 = Buffer.from([10, 20, 30, 40, 50, 60, 70, 80, 90]);


/* 
1. First require fs module
2. use fs.createReadStrea() buildin function
3. use __dirname for get path
4. ourReadStrem give a event and this event use for get chunk of data.
5. "utf-8" use for buffer convert in data.
*/
const fs = require('fs');

const ourReadStrem = fs.createReadStream(`${__dirname}/demo.txt`, "utf-8");
ourReadStrem.on("data", (chunk) => {
    console.log(chunk);
});