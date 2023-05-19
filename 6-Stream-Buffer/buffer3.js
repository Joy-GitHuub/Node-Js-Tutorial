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
// ourReadStream.pipe(ourWriteStream)