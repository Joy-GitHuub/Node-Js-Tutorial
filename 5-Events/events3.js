const Events = require("events");

function loopProcessor(num) {
    const emitter = new Events();
    setTimeout(() => {
        for (let i = 0; i <= num; i++) {
            emitter.emit("BeforeProcces", i);
            console.log("Proccess Number: " + i);
            emitter.emit("AfterProccess", i)
        }
    }, 1500);
    return emitter;
};

let e = loopProcessor(3);
e.on("BeforeProcces", function (data) {
    console.log('About to start the process for ' + data);
});

e.on('AfterProccess', function (data) {
    console.log('Completed processing ' + data);
});