const os = require("os");

const totalmem = os.totalmem();
const free = os.freemem();

console.log(`Total memory ${totalmem}`)
console.log(`Total Free mem ${free}`)