const Events = require("events");

class School extends Events {
    startClass() {
        this.emit('bellRing', {
            period: "Firls Class",
            text: "Start Now",
        });
    };

    classEnd() {
        setTimeout(() => {
            this.emit("bellRing", {
                period: "Firls Class",
                text: "End Now",
            });
        }, 1500);
    };
};

module.exports = School;