const { createReadStream, statSync } = require("fs");
const http = require("http");
// const {} = require("util");

const fileName = "./dance.mp4";

const server = http.createServer((req, res) => {
  const readStream = createReadStream(fileName);
  const { size } = statSync(fileName);
  const range = req.headers.range;
  if (range) {
    let [start, end] = range.replace(/bytes=/, "").split("-");
    start = parseInt(start, 10);
    end = end ? parseInt(end, 10) : size - 1;
    res.writeHead(206, {
      "Content-Range": `bytes ${start}-${end}/${size}`,
      "Accept-Range": "bytes",
      "Content-Length": start - end + 1,
      "Content-Type": "video/mp4",
    });
    createReadStream(fileName, { start, end }).pipe(res);
  } else {
    res.writeHead(200, { "Content-Type": "video/mp4", "Content-Length": size });
  }
  readStream.pipe(res);
});
server.listen(3000);
