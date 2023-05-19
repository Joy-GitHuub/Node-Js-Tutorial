const { sampleHandler } = require('../handler/samplehandler');
const { userHandler } = require('../handler/userHandler');


const routers = {
    sample: sampleHandler,
    user: userHandler,
};

module.exports = routers;