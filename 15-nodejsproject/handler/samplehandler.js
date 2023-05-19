
const hanlder = {};

hanlder.sampleHandler = (requestProperties, cb) => {
    cb(200, { message: "This is sample url", });
};

module.exports = hanlder;