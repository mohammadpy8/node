const fs = require("fs");

const writeStream = fs.createWriteStream("./stdin.txt");
process.stdin.pipe(writeStream);
