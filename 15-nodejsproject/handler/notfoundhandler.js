const hanlder = {};

hanlder.notFoundHandler = (requestProperties, cb) => {
    cb(404, { message: "Your requested URL was not found!", });
}

module.exports = hanlder;