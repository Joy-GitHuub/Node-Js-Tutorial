const Events = require("events");

class WaterTrank extends Events { };

const waterTrank = new WaterTrank();

waterTrank.on("TrankFull", () => {
    console.log(`Switch On Your Water Trank`);
});

module.exports = waterTrank;