
const { log } = require("console");
const os=require("os")

console.log(`My first App`);
console.log(`File Name:${__filename}`);
console.log(`Directory Name:${__dirname}`);

console.log(`============Built in Module- OS==============`);
console.log(`Arch:${os.arch()}`);
console.log(`CPUS:${os.cpus()}`);
console.log(`Freemem: ${os.freemem()}`);
console.log(`Totalmem: ${os.totalmem()}`);
console.log(`HostName: ${os.hostname()}`);
console.log(`Platform: ${os.platform()}`);
console.log(`Release: ${os.release()}`);
console.log(`Type: ${os.type()}`);
console.log(`Up time :  ${os.uptime()}`);
console.log(`User Info: ${os.userInfo()}`);










