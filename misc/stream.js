const fs = require("fs");

let counter = 0;
let buffer = [];

const streamData = fs.createReadStream("./file.txt");
const readStreamData = fs.createReadStream("./read.txt");
const writeStreamData = fs.createWriteStream("./write.txt");

streamData.on("ready", () => {
  console.log("ready stream");
});

streamData.on("data", (chunk) => {
  counter++;
  console.log("counter => ", counter);
  console.log(chunk);
  buffer.push(chunk);
  writeStreamData.write(chunk);
});

streamData.on("error", (error) => {
  console.log(error);
});

streamData.on("end", () => {
  console.log("end stream");
  console.log(buffer.toString());
});

writeStreamData.on("finish", () => {
  console.log("finish write");
});
