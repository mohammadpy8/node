const os = require("os");
const currentSystem = {
  name: os.type(),
  arch: os.arch(),
  platform: os.platform(),
  release: os.release(),
  version: os.version(),
  timeStart: os.uptime(),
  userInfo: os.userInfo(),
  totalMemory: os.totalmem(),
  freeMemory: os.freemem(),
  cpu: os.cpus(),
  network: os.networkInterfaces(),
};
console.log(currentSystem);
