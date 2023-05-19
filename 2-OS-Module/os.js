/**
 * * OS MODULE
 * userInfo() => Returns information about the current user
 * homedir() => Returns my Home dir.
 * hostname() => Returns the hostname of the operating system
 * totalmem() => Returns the number of total memory of the system
 * freemem() => Returns the number of free memory of the system
 * arch() =>  Returns the operating system CPU architecture
 * cpus() =>  Returns an array containing information about the computer's CPUs
 * endianness() =>  Returns the endianness of the CPU
 * type() =>  Returns the uptime of the operating system, in seconds
 */
const os = require("os");

const userInfo = os.userInfo();
const homeDir = os.homedir();
const hostName = os.hostname();
const totalMemory = os.totalmem();
const freeMemory = os.freemem();
const arch = os.arch();
const cpus = os.cpus();
const endianness = os.endianness();
const type = os.type();