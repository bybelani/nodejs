const os = require('os');
// console.log(os.totalmem());
// console.log(os.freemem());
// console.log(os.hostname());
// console.log(os.constants);

const freemem = os.freemem();
console.log(`free memery: ${freemem}`);