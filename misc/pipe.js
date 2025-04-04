const fs = require("fs");
const http = require("http");

// const readStreamData = fs.createReadStream("./read.txt");
// const writeStreamData = fs.createWriteStream("./write-pipe.txt");

// readStreamData.pipe(writeStreamData);

http
  .createServer((req, res) => {
    const readStreamData = fs.createReadStream("./read.txt");
    res.writeHead(200, { "Content-Type": "text-plain" });
    readStreamData.pipe(res);
  })
  .listen(3000);
