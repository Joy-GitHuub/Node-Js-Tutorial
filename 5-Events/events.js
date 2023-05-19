/**
 ** Node Js Events Module
 * Node.JS has a build-in module, called  "Events", where you can create-, fire-, and listen for- your own events.
 * 1. first require('events)
 * 2. Events() return a Class Object
 * 3. create a events eventEmitter.on()
 * 4. give a events name
 * 5. second give a function. 
 * 6. eventEmitter.emit() and call this event any time.
 */

const Events = require('events');
const eventEmitter = new Events();

const myEventHandle = function () {
    console.log(`Call me Any Time!`);
};
eventEmitter.on("callMe", myEventHandle);
eventEmitter.emit("callMe");


const eventEmitter2 = new Events();
eventEmitter2.on("ringball", (time) => {
    console.log(`Ring ball ${time} now.`);
});
eventEmitter2.emit("ringball", new Date().toLocaleTimeString());
